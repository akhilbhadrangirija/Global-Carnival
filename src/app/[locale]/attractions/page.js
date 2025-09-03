'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Star, Users, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Chip } from '@/components/ui/Chip';

export const metadata = {
  title: 'Explore Attractions',
  description: 'Discover amazing attractions across six unique categories at Global Carnival Jeddah. Adventure parks, cultural experiences, family fun, and entertainment for all ages.',
  keywords: 'attractions Jeddah, adventure park, cultural experiences, family attractions, entertainment venues, tourist attractions Saudi Arabia, carnival attractions, family fun',
  openGraph: {
    title: 'Explore Attractions | Global Carnival Jeddah',
    description: 'Discover amazing attractions across six unique categories at Global Carnival Jeddah. Adventure parks, cultural experiences, family fun, and entertainment for all ages.',
    type: 'website',
    images: [
      {
        url: '/attractions/adventurePark.jpg',
        width: 1200,
        height: 630,
        alt: 'Attractions at Global Carnival Jeddah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Attractions | Global Carnival Jeddah',
    description: 'Discover amazing attractions across six unique categories at Global Carnival Jeddah. Adventure parks, cultural experiences, family fun, and entertainment for all ages.',
    images: ['/attractions/adventurePark.jpg'],
  },
  alternates: {
    canonical: '/attractions',
  },
};

// Mock attractions data
const attractions = [
  {
    id: 1,
    name: "Cultural Pavilion",
    category: "culture",
    ageGroup: "all",
    price: "free",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    description: "Experience the rich traditions and customs of cultures from around the world.",
    location: "Main Plaza",
    duration: "2-3 hours"
  },
  {
    id: 2,
    name: "Adventure Zone",
    category: "adventure",
    ageGroup: "teen",
    price: "paid",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
    description: "Thrilling rides and outdoor activities for adventure seekers.",
    location: "North District",
    duration: "3-4 hours"
  },
  {
    id: 3,
    name: "Family Fun Center",
    category: "family",
    ageGroup: "children",
    price: "paid",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
    description: "Safe and entertaining activities designed for families with young children.",
    location: "East Wing",
    duration: "2-3 hours"
  },
  {
    id: 4,
    name: "Entertainment Plaza",
    category: "entertainment",
    ageGroup: "all",
    price: "mixed",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    description: "Live performances, shows, and interactive entertainment experiences.",
    location: "Central Hub",
    duration: "1-2 hours"
  },
  {
    id: 5,
    name: "Shopping District",
    category: "shopping",
    ageGroup: "all",
    price: "free",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    description: "Discover unique souvenirs, local crafts, and international brands.",
    location: "West Quarter",
    duration: "1-3 hours"
  },
  {
    id: 6,
    name: "Gourmet Alley",
    category: "dining",
    ageGroup: "all",
    price: "mixed",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    description: "A culinary journey featuring cuisines from around the globe.",
    location: "South End",
    duration: "1-2 hours"
  }
];

const categories = [
  { key: "all", label: "All Categories", color: "bg-gray-500" },
  { key: "family", label: "Family", color: "bg-blue-500" },
  { key: "culture", label: "Culture", color: "bg-purple-500" },
  { key: "adventure", label: "Adventure", color: "bg-green-500" },
  { key: "entertainment", label: "Entertainment", color: "bg-red-500" },
  { key: "shopping", label: "Shopping", color: "bg-yellow-500" },
  { key: "dining", label: "Dining", color: "bg-orange-500" }
];

const ageGroups = [
  { key: "all", label: "All Ages" },
  { key: "children", label: "Children (3-12)" },
  { key: "teen", label: "Teens (13-17)" },
  { key: "adult", label: "Adults (18+)" }
];

const priceRanges = [
  { key: "all", label: "All Prices" },
  { key: "free", label: "Free" },
  { key: "paid", label: "Paid" },
  { key: "mixed", label: "Mixed" }
];

export default function AttractionsPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const filteredAttractions = useMemo(() => {
    return attractions.filter(attraction => {
      const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           attraction.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || attraction.category === selectedCategory;
      const matchesAge = selectedAgeGroup === 'all' || attraction.ageGroup === selectedAgeGroup;
      const matchesPrice = selectedPrice === 'all' || attraction.price === selectedPrice;

      return matchesSearch && matchesCategory && matchesAge && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedAgeGroup, selectedPrice]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedAgeGroup('all');
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
              {t('attractions.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover amazing attractions across six unique categories, each offering unforgettable experiences for visitors of all ages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t('attractions.filters.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3">
              {/* Category Filters */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Category:</span>
                {categories.map((category) => (
                  <Chip
                    key={category.key}
                    label={category.label}
                    isSelected={selectedCategory === category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    color={category.color}
                  />
                ))}
              </div>

              {/* Age Group Filters */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Age:</span>
                {ageGroups.map((ageGroup) => (
                  <Chip
                    key={ageGroup.key}
                    label={ageGroup.label}
                    isSelected={selectedAgeGroup === ageGroup.key}
                    onClick={() => setSelectedAgeGroup(ageGroup.key)}
                  />
                ))}
              </div>

              {/* Price Filters */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Price:</span>
                {priceRanges.map((price) => (
                  <Chip
                    key={price.key}
                    label={price.label}
                    isSelected={selectedPrice === price.key}
                    onClick={() => setSelectedPrice(price.key)}
                  />
                ))}
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

      {/* Attractions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredAttractions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No attractions found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find what you&apos;re looking for.
              </p>
              <Button onClick={clearFilters}>
                Clear All Filters
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredAttractions.length} Attraction{filteredAttractions.length !== 1 ? 's' : ''} Found
                </h2>
                <div className="text-gray-600">
                  Showing results for your selected criteria
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAttractions.map((attraction, index) => (
                  <motion.div
                    key={attraction.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={attraction.image}
                          alt={attraction.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-gray-900">
                            {attraction.price === 'free' ? 'Free' : attraction.price === 'paid' ? 'Paid' : 'Mixed'}
                          </span>
                        </div>
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{attraction.rating}</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {attraction.name}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {attraction.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span>{attraction.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Users className="w-4 h-4" />
                            <span>{attraction.ageGroup === 'all' ? 'All Ages' : attraction.ageGroup === 'children' ? 'Children' : attraction.ageGroup === 'teen' ? 'Teens' : 'Adults'}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{attraction.duration}</span>
                          </div>
                        </div>

                        <Button className="w-full group">
                          View Details
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
