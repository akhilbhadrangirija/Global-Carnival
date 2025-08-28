'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, MapPin, Phone, Globe, Utensils } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Chip } from '@/components/ui/Chip';

// Mock dining data
const restaurants = [
  {
    id: 1,
    name: "Sakura Garden",
    cuisine: "Japanese",
    priceLevel: "$$",
    rating: 4.8,
    phone: "+966 11 234 5678",
    website: "www.sakura-garden.com",
    hours: "11:00 AM - 10:00 PM",
    location: "East Wing, Restaurant #3",
    description: "Authentic Japanese cuisine featuring sushi, sashimi, and traditional dishes in an elegant garden setting.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    specialties: ["Sushi", "Sashimi", "Ramen", "Tempura"]
  },
  {
    id: 2,
    name: "Mediterranean Breeze",
    cuisine: "Mediterranean",
    priceLevel: "$$$",
    rating: 4.6,
    phone: "+966 11 234 5679",
    website: "www.mediterranean-breeze.com",
    hours: "12:00 PM - 11:00 PM",
    location: "South End, Restaurant #7",
    description: "Fresh Mediterranean flavors with a modern twist, featuring grilled seafood, fresh salads, and aromatic herbs.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    specialties: ["Grilled Fish", "Greek Salad", "Hummus", "Falafel"]
  },
  {
    id: 3,
    name: "Spice Route",
    cuisine: "Indian",
    priceLevel: "$$",
    rating: 4.7,
    phone: "+966 11 234 5680",
    website: "www.spice-route.com",
    hours: "11:30 AM - 10:30 PM",
    location: "West Quarter, Restaurant #12",
    description: "Aromatic Indian cuisine with rich spices and flavors, offering both vegetarian and non-vegetarian options.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    specialties: ["Butter Chicken", "Biryani", "Naan", "Tandoori"]
  },
  {
    id: 4,
    name: "Tuscany Terrace",
    cuisine: "Italian",
    priceLevel: "$$$",
    rating: 4.9,
    phone: "+966 11 234 5681",
    website: "www.tuscany-terrace.com",
    hours: "5:00 PM - 11:00 PM",
    location: "North District, Restaurant #5",
    description: "Classic Italian dining with handmade pasta, wood-fired pizzas, and fine wines in a romantic terrace setting.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    specialties: ["Pasta", "Pizza", "Risotto", "Tiramisu"]
  },
  {
    id: 5,
    name: "Golden Dragon",
    cuisine: "Chinese",
    priceLevel: "$$",
    rating: 4.5,
    phone: "+966 11 234 5682",
    website: "www.golden-dragon.com",
    hours: "10:00 AM - 9:30 PM",
    location: "Central Hub, Restaurant #8",
    description: "Traditional Chinese cuisine with dim sum, stir-fries, and authentic flavors in a vibrant atmosphere.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    specialties: ["Dim Sum", "Kung Pao Chicken", "Sweet & Sour", "Fried Rice"]
  },
  {
    id: 6,
    name: "Le Petit Bistro",
    cuisine: "French",
    priceLevel: "$$$",
    rating: 4.8,
    phone: "+966 11 234 5683",
    website: "www.le-petit-bistro.com",
    hours: "6:00 PM - 10:30 PM",
    location: "East Wing, Restaurant #15",
    description: "Intimate French bistro serving classic dishes like coq au vin, beef bourguignon, and crème brûlée.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    specialties: ["Coq au Vin", "Beef Bourguignon", "Escargot", "Crème Brûlée"]
  }
];

const cuisines = [
  { key: "all", label: "All Cuisines", color: "bg-gray-500" },
  { key: "japanese", label: "Japanese", color: "bg-red-500" },
  { key: "mediterranean", label: "Mediterranean", color: "bg-blue-500" },
  { key: "indian", label: "Indian", color: "bg-orange-500" },
  { key: "italian", label: "Italian", color: "bg-green-500" },
  { key: "chinese", label: "Chinese", color: "bg-yellow-500" },
  { key: "french", label: "French", color: "bg-purple-500" }
];

const priceLevels = [
  { key: "all", label: "All Prices", color: "bg-gray-500" },
  { key: "$", label: "$ (Under $15)", color: "bg-green-500" },
  { key: "$$", label: "$$ ($15-$30)", color: "bg-yellow-500" },
  { key: "$$$", label: "$$$ ($30-$50)", color: "bg-orange-500" },
  { key: "$$$$", label: "$$$$ (Over $50)", color: "bg-red-500" }
];

export default function DiningPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           restaurant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = selectedCuisine === 'all' || restaurant.cuisine.toLowerCase() === selectedCuisine;
      const matchesPrice = selectedPrice === 'all' || restaurant.priceLevel === selectedPrice;

      return matchesSearch && matchesCuisine && matchesPrice;
    });
  }, [searchTerm, selectedCuisine, selectedPrice]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCuisine('all');
    setSelectedPrice('all');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {t('dining.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Embark on a culinary journey around the world with our diverse selection of restaurants, cafes, and food courts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t('dining.filters.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Cuisine Filters */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Cuisine:</span>
              {cuisines.map((cuisine) => (
                <Chip
                  key={cuisine.key}
                  label={cuisine.label}
                  isSelected={selectedCuisine === cuisine.key}
                  onClick={() => setSelectedCuisine(cuisine.key)}
                  color={cuisine.color}
                />
              ))}
            </div>

            {/* Price Filters */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Price:</span>
              {priceLevels.map((price) => (
                <Chip
                  key={price.key}
                  label={price.label}
                  isSelected={selectedPrice === price.key}
                  onClick={() => setSelectedPrice(price.key)}
                  color={price.color}
                />
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Clear Filters</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredRestaurants.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No restaurants found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <Button onClick={clearFilters}>
                Clear All Filters
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredRestaurants.length} Restaurant{filteredRestaurants.length !== 1 ? 's' : ''} Found
                </h2>
                <div className="text-gray-600">
                  Showing results for your selected criteria
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRestaurants.map((restaurant, index) => (
                    <motion.div
                      key={restaurant.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-sm font-medium text-gray-900">{restaurant.priceLevel}</span>
                          </div>
                          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{restaurant.rating}</span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {restaurant.name}
                            </h3>
                            <Chip
                              label={restaurant.cuisine}
                              color={cuisines.find(c => c.key === restaurant.cuisine.toLowerCase())?.color}
                            />
                          </div>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {restaurant.description}
                          </p>

                          {/* Specialties */}
                          <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                            <div className="flex flex-wrap gap-2">
                              {restaurant.specialties.slice(0, 3).map((specialty, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                              {restaurant.specialties.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{restaurant.specialties.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-2 mb-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{restaurant.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{restaurant.hours}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <Button className="group">
                              View Menu
                              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              Reserve
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredRestaurants.map((restaurant, index) => (
                    <motion.div
                      key={restaurant.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Restaurant Image */}
                          <div className="lg:col-span-1">
                            <div className="relative h-48 lg:h-full overflow-hidden">
                              <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="text-sm font-medium text-gray-900">{restaurant.priceLevel}</span>
                              </div>
                            </div>
                          </div>

                          {/* Restaurant Details */}
                          <div className="lg:col-span-2 p-6">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-2xl font-bold text-gray-900">
                                {restaurant.name}
                              </h3>
                              <Chip
                                label={restaurant.cuisine}
                                color={cuisines.find(c => c.key === restaurant.cuisine.toLowerCase())?.color}
                              />
                            </div>

                            <p className="text-gray-600 mb-6 line-clamp-2">
                              {restaurant.description}
                            </p>

                            {/* Specialties */}
                            <div className="mb-6">
                              <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                              <div className="flex flex-wrap gap-2">
                                {restaurant.specialties.map((specialty, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                                  >
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-5 h-5" />
                                <span>{restaurant.location}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Phone className="w-5 h-5" />
                                <span>{restaurant.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Clock className="w-5 h-5" />
                                <span>{restaurant.hours}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Globe className="w-5 h-5" />
                                <span>{restaurant.website}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <Button className="group">
                                View Menu
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                              </Button>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  Reserve Table
                                </Button>
                                <Button variant="outline" size="sm">
                                  View on Map
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
