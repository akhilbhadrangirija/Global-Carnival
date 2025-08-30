'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Store, Utensils, Palette, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function HomepageTeasers() {
  const t = useTranslations('homepage');
  const locale = useLocale();

  const teasers = [
    // {
    //   title: t('introduction.title'),
    //   description: t('introduction.description'),
    //   cta: t('introduction.cta'),
    //   href: `/${locale}/about`,
    //   icon: Globe,
    //   color: 'from-blue-500 to-purple-600'
    // },
    // {
    //   title: t('overview.title'),
    //   description: t('overview.description'),
    //   cta: t('overview.cta'),
    //   href: `/${locale}/overview`,
    //   icon: Store,
    //   color: 'from-green-500 to-teal-600'
    // },
    {
      title: t('products.title'),
      description: t('products.description'),
      cta: t('products.cta'),
      href: `/${locale}/products`,
      icon: Store,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: t('food.title'),
      description: t('food.description'),
      cta: t('food.cta'),
      href: `/${locale}/food`,
      icon: Utensils,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: t('activities.title'),
      description: t('activities.description'),
      cta: t('activities.cta'),
      href: `/${locale}/activities`,
      icon: Palette,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Global Carnival Jeddah
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the world's cultures, flavors, and traditions in one extraordinary destination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teasers.map((teaser, index) => (
            <motion.div
              key={teaser.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${teaser.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <teaser.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {teaser.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {teaser.description}
                </p>
                
                <Link href={teaser.href}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {teaser.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
