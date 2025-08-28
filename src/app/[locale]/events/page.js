'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, Clock, Users, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Chip } from '@/components/ui/Chip';

// Mock events data
const events = [
  {
    id: 1,
    name: "Winter Festival of Lights",
    category: "festival",
    date: "2025-12-01",
    time: "6:00 PM - 11:00 PM",
    location: "Main Plaza",
    capacity: 5000,
    price: "Free",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=300&fit=crop",
    description: "A magical evening of illuminated displays, live music, and festive activities.",
    status: "upcoming"
  },
  {
    id: 2,
    name: "Cultural Heritage Exhibition",
    category: "exhibition",
    date: "2025-11-15",
    time: "10:00 AM - 6:00 PM",
    location: "Cultural Pavilion",
    capacity: 2000,
    price: "Free",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    description: "Explore the rich traditions and artifacts from cultures around the world.",
    status: "upcoming"
  },
  {
    id: 3,
    name: "Summer Music Concert Series",
    category: "concert",
    date: "2025-08-20",
    time: "7:00 PM - 10:00 PM",
    location: "Entertainment Plaza",
    capacity: 3000,
    price: "$25",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    description: "An evening of live performances featuring local and international artists.",
    status: "past"
  },
  {
    id: 4,
    name: "Food & Wine Festival",
    category: "festival",
    date: "2025-07-10",
    time: "12:00 PM - 8:00 PM",
    location: "Gourmet Alley",
    capacity: 1500,
    price: "$50",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    description: "Sample exquisite cuisines and fine wines from renowned chefs and wineries.",
    status: "past"
  },
  {
    id: 5,
    name: "Adventure Sports Championship",
    category: "sports",
    date: "2025-06-05",
    time: "9:00 AM - 5:00 PM",
    location: "Adventure Zone",
    capacity: 1000,
    price: "Free",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
    description: "Watch thrilling competitions in rock climbing, zip-lining, and obstacle courses.",
    status: "past"
  },
  {
    id: 6,
    name: "Family Fun Day",
    category: "family",
    date: "2025-05-20",
    time: "10:00 AM - 4:00 PM",
    location: "Family Fun Center",
    capacity: 2500,
    price: "Free",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
    description: "A day filled with games, activities, and entertainment for the whole family.",
    status: "past"
  }
];

const categories = [
  { key: "all", label: "All Categories", color: "bg-gray-500" },
  { key: "festival", label: "Festival", color: "bg-purple-500" },
  { key: "exhibition", label: "Exhibition", color: "bg-blue-500" },
  { key: "concert", label: "Concert", color: "bg-green-500" },
  { key: "sports", label: "Sports", color: "bg-red-500" },
  { key: "family", label: "Family", color: "bg-yellow-500" }
];

export default function EventsPage() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesStatus = event.status === activeTab;
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;

      return matchesStatus && matchesSearch && matchesCategory;
    });
  }, [activeTab, searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              {t('events.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover exciting events, performances, and celebrations happening at CityScape Oasis throughout the year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {[
                { key: 'upcoming', label: t('events.upcoming') },
                { key: 'past', label: t('events.past') }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t('events.filters.search')}
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

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex items-center space-x-2"
            >
              <span>Clear Filters</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No {activeTab} events found
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
                  {filteredEvents.length} {activeTab === 'upcoming' ? 'Upcoming' : 'Past'} Event{filteredEvents.length !== 1 ? 's' : ''} Found
                </h2>
                <div className="text-gray-600">
                  Showing results for your selected criteria
                </div>
              </div>

              <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Event Image */}
                        <div className="lg:col-span-1">
                          <div className="relative h-48 lg:h-full overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-sm font-medium text-gray-900">
                                {event.price}
                              </span>
                            </div>
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-medium">{event.rating}</span>
                            </div>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="lg:col-span-2 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {event.name}
                            </h3>
                            <Chip
                              label={event.category}
                              color={categories.find(c => c.key === event.category)?.color}
                            />
                          </div>

                          <p className="text-gray-600 mb-6 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Calendar className="w-5 h-5" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Clock className="w-5 h-5" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <MapPin className="w-5 h-5" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Users className="w-5 h-5" />
                              <span>Capacity: {event.capacity.toLocaleString()}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <Button className="group">
                              View Details
                              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                            {activeTab === 'upcoming' && (
                              <Button variant="outline">
                                Book Now
                              </Button>
                            )}
                          </div>
                        </div>
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
