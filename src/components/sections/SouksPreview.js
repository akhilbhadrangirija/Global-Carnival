'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import CTAButton from '@/components/ui/CTAButton';
import { Card } from '@/components/ui/Card';

export function SouksPreview() {
  const t = useTranslations('souks');
  const locale = useLocale();

  const souks = [
    {
      name: t('regions.indiaPakistan.name'),
      description: t('regions.indiaPakistan.description'),
      image: '/souks/shop/india-pakistan-shop-main.jpg',
      href: `/${locale}/souks`,
      tag: 'Popular',
      duration: 'Open Daily'
    },
    {
      name: t('regions.turkeyMorocco.name'),
      description: t('regions.turkeyMorocco.description'),
      image: '/souks/TURKEY-MOROCCO.jpg',
      href: `/${locale}/souks`,
      tag: 'New',
      duration: 'Open Daily'
    },
    {
      name: t('regions.eastAsia.name'),
      description: t('regions.eastAsia.description'),
      image: '/souks/EastAsia.jpg',
      href: `/${locale}/souks`,
      tag: 'Featured',
      duration: 'Open Daily'
    },
    {
      name: t('regions.gcc.name'),
      description: t('regions.gcc.description'),
      image: '/souks/GCC.jpg',
      href: `/${locale}/souks`,
      tag: 'Popular',
      duration: 'Open Daily'
    },
    // {
    //   name: t('regions.egypt.name'),
    //   description: t('regions.egypt.description'),
    //   image: '/souks/shop/egypt-shop-1.jpg',
    //   href: `/${locale}/souks`,
    //   tag: 'New',
    //   duration: 'Open Daily'
    // },
    // {
    //   name: t('regions.africa.name'),
    //   description: t('regions.africa.description'),
    //   image: '/souks/shop/egypt-shop-2.jpg',
    //   href: `/${locale}/souks`,
    //   tag: 'Featured',
    //   duration: 'Open Daily'
    // }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {souks.map((souk, index) => (
            <motion.div
              key={souk.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={souk.image}
                    alt={`${souk.name} souk`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {souk.name}
                    </h3>
                    <p className="text-white text-sm mb-4 line-clamp-2 opacity-90">
                      {souk.description}
                    </p>
                    
                    {/* Tags/Badges */}
                    <div className="flex gap-2 mb-4">
                      <div className="flex items-center gap-1 px-3 py-1 backdrop-blur-sm border border-gray-100 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-white text-xs font-medium">{souk.tag}</span>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 backdrop-blur-sm border border-gray-100 rounded-full">
                        <Clock className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-medium">{souk.duration}</span>
                      </div>
                    </div>
                    
                    {/* Call to Action Button */}
                    <Link href={souk.href} className="block">
                      <Button variant="outline"
                        className="w-full bg-transparent backdrop-blur-sm text-white hover:bg-gray-100 font-semibold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Explore Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href={`/${locale}/souks`}>
            <CTAButton>
              Explore All Souks
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CTAButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
