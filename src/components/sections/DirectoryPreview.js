'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Store, Wrench, Music, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const businessCategories = [
  { icon: Store, name: 'directory.categories.shops', count: 45, color: 'bg-blue-500' },
  { icon: Wrench, name: 'directory.categories.services', count: 32, color: 'bg-green-500' },
  { icon: Music, name: 'directory.categories.entertainment', count: 28, color: 'bg-purple-500' },
  { icon: Heart, name: 'directory.categories.wellness', count: 18, color: 'bg-pink-500' },
];

export function DirectoryPreview() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('directory.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find everything you need in one place - from unique shops and essential services to entertainment venues and wellness centers.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder={t('directory.search')}
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2">
              Search
            </Button>
          </div>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {businessCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/directory?category=${t(category.name).toLowerCase().replace(/\s+/g, '-')}`}
                className="block group"
              >
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(category.name)}
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-2">
                    {category.count}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Businesses
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Businesses Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Featured Businesses
            </h3>
            <p className="text-gray-600">
              Discover some of our most popular and highly-rated establishments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Artisan Crafts Co.", type: "Handmade Goods", rating: 4.9 },
              { name: "Tech Solutions Hub", type: "IT Services", rating: 4.8 },
              { name: "Cultural Center", type: "Entertainment", rating: 4.7 }
            ].map((business, index) => (
              <div key={business.name} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <h4 className="font-semibold text-gray-900 mb-1">{business.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{business.type}</p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < Math.floor(business.rating)
                          ? 'bg-yellow-400'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{business.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/directory"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 group"
          >
            Browse Full Directory
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
