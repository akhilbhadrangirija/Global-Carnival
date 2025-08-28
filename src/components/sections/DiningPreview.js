'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const diningOptions = [
  {
    name: "Sakura Garden",
    cuisine: "Japanese",
    price: "$$",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    hours: "11:00 AM - 10:00 PM"
  },
  {
    name: "Mediterranean Breeze",
    cuisine: "Mediterranean",
    price: "$$$",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    hours: "12:00 PM - 11:00 PM"
  },
  {
    name: "Spice Route",
    cuisine: "Indian",
    price: "$$",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    hours: "11:30 AM - 10:30 PM"
  },
  {
    name: "Tuscany Terrace",
    cuisine: "Italian",
    price: "$$$",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    hours: "5:00 PM - 11:00 PM"
  },
  {
    name: "Golden Dragon",
    cuisine: "Chinese",
    price: "$$",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    hours: "10:00 AM - 9:30 PM"
  }
];

export function DiningPreview() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('dining.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Embark on a culinary journey around the world with our diverse selection of restaurants, cafes, and food courts.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {diningOptions.map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80"
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-900">{restaurant.price}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {restaurant.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {restaurant.cuisine} Cuisine
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(restaurant.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/dining/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-transform duration-300"
                    >
                      View Menu
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/dining"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 group"
          >
            {t('dining.viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
