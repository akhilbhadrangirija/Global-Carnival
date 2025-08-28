'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Globe, Mountain, Music, ShoppingBag, Utensils } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const attractionCategories = [
  { icon: Users, name: 'attractions.categories.family', color: 'bg-blue-500', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop' },
  { icon: Globe, name: 'attractions.categories.culture', color: 'bg-purple-500', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop' },
  { icon: Mountain, name: 'attractions.categories.adventure', color: 'bg-green-500', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop' },
  { icon: Music, name: 'attractions.categories.entertainment', color: 'bg-red-500', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop' },
  { icon: ShoppingBag, name: 'attractions.categories.shopping', color: 'bg-yellow-500', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { icon: Utensils, name: 'attractions.categories.dining', color: 'bg-orange-500', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop' },
];

export function AttractionsOverview() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('attractions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover amazing attractions across six unique categories, each offering unforgettable experiences for visitors of all ages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {attractionCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={t(category.name)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className={`absolute top-4 right-4 ${category.color} p-3 rounded-full text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(category.name)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience the best of {t(category.name).toLowerCase()} with our curated selection of attractions and activities.
                  </p>
                  <Link
                    href={`/attractions?category=${t(category.name).toLowerCase()}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Explore {t(category.name)}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/attractions"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 group"
          >
            {t('attractions.viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
