'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Phone, Globe, Star, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Chip } from '@/components/ui/Chip';

// Mock directory data
const businesses = [
  {
    id: 1,
    name: "Artisan Crafts Co.",
    category: "shops",
    type: "Handmade Goods",
    rating: 4.9,
    phone: "+971 50 354 5972",
    website: "www.artisancrafts.com",
    hours: "9:00 AM - 8:00 PM",
    location: "West Quarter, Shop #12",
    description: "Specializing in authentic handmade crafts from local artisans and international artists.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Tech Solutions Hub",
    category: "services",
    type: "IT Services",
    rating: 4.8,
    phone: "+966 11 234 5679",
    website: "www.techsolutions.com",
    hours: "8:00 AM - 6:00 PM",
    location: "North District, Office #5",
    description: "Comprehensive IT solutions including web development, mobile apps, and digital consulting.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Cultural Center",
    category: "entertainment",
    type: "Cultural Events",
    rating: 4.7,
    phone: "+966 11 234 5680",
    website: "www.culturalcenter.com",
    hours: "10:00 AM - 10:00 PM",
    location: "Main Plaza, Building A",
    description: "Hosting cultural performances, workshops, and exhibitions from around the world.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Wellness Spa",
    category: "wellness",
    type: "Health & Wellness",
    rating: 4.9,
    phone: "+966 11 234 5681",
    website: "www.wellnessspa.com",
    hours: "9:00 AM - 9:00 PM",
    location: "East Wing, Suite #8",
    description: "Luxury spa services including massages, facials, and wellness treatments.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Global Fashion Boutique",
    category: "shops",
    type: "Fashion & Apparel",
    rating: 4.6,
    phone: "+966 11 234 5682",
    website: "www.globalfashion.com",
    hours: "10:00 AM - 9:00 PM",
    location: "West Quarter, Shop #15",
    description: "International fashion brands and designer collections for all ages and styles.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Digital Marketing Agency",
    category: "services",
    type: "Marketing Services",
    rating: 4.8,
    phone: "+966 11 234 5683",
    website: "www.digitalmarketing.com",
    hours: "8:00 AM - 6:00 PM",
    location: "North District, Office #12",
    description: "Full-service digital marketing including SEO, social media, and content creation.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
  }
];

const categories = [
  { key: "all", label: "All Categories", color: "bg-gray-500" },
  { key: "shops", label: "Shops", color: "bg-blue-500" },
  { key: "services", label: "Services", color: "bg-green-500" },
  { key: "entertainment", label: "Entertainment", color: "bg-purple-500" },
  { key: "wellness", label: "Wellness", color: "bg-pink-500" }
];

export default function DirectoryPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredBusinesses = useMemo(() => {
    return businesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           business.type.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
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
              {t('directory.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Find everything you need in one place - from unique shops and essential services to entertainment venues and wellness centers.
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
                placeholder={t('directory.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

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

      {/* Directory Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredBusinesses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No businesses found
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
                  {filteredBusinesses.length} Business{filteredBusinesses.length !== 1 ? 'es' : ''} Found
                </h2>
                <div className="text-gray-600">
                  Showing results for your selected criteria
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBusinesses.map((business, index) => (
                    <motion.div
                      key={business.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={business.image}
                            alt={business.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-sm font-medium text-gray-900">
                              {business.type}
                            </span>
                          </div>
                          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{business.rating}</span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {business.name}
                            </h3>
                            <Chip
                              label={business.category}
                              color={categories.find(c => c.key === business.category)?.color}
                            />
                          </div>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {business.description}
                          </p>
                          
                          <div className="space-y-2 mb-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{business.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{business.hours}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <Button className="group">
                              View Details
                              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredBusinesses.map((business, index) => (
                    <motion.div
                      key={business.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Business Image */}
                          <div className="lg:col-span-1">
                            <div className="relative h-48 lg:h-full overflow-hidden">
                              <img
                                src={business.image}
                                alt={business.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="text-sm font-medium text-gray-900">
                                  {business.type}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Business Details */}
                          <div className="lg:col-span-2 p-6">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-2xl font-bold text-gray-900">
                                {business.name}
                              </h3>
                              <Chip
                                label={business.category}
                                color={categories.find(c => c.key === business.category)?.color}
                              />
                            </div>

                            <p className="text-gray-600 mb-6 line-clamp-2">
                              {business.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-5 h-5" />
                                <span>{business.location}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Phone className="w-5 h-5" />
                                <span>{business.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Clock className="w-5 h-5" />
                                <span>{business.hours}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Globe className="w-5 h-5" />
                                <span>{business.website}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <Button className="group">
                                View Details
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                              </Button>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  Contact
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
