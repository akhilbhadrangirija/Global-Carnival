'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function SouksPreview() {
  const t = useTranslations('souks');
  const locale = useLocale();

  const souks = [
    {
      name: t('regions.india.name'),
      description: t('regions.india.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    },
    {
      name: t('regions.pakistan.name'),
      description: t('regions.pakistan.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    },
    {
      name: t('regions.turkey.name'),
      description: t('regions.turkey.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    },
    {
      name: t('regions.morocco.name'),
      description: t('regions.morocco.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    },
    {
      name: t('regions.eastAsia.name'),
      description: t('regions.eastAsia.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    },
    {
      name: t('regions.gcc.name'),
      description: t('regions.gcc.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    },
    {
      name: t('regions.egypt.name'),
      description: t('regions.egypt.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    },
    {
      name: t('regions.africa.name'),
      description: t('regions.africa.description'),
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      href: `/${locale}/souks`
    }
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
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={souk.image}
                    alt={`${souk.name} souk`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {souk.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {souk.description}
                  </p>
                  
                  <Link href={souk.href}>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {t('viewGallery')}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
            <Button size="lg" className="group">
              Explore All Souks
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
