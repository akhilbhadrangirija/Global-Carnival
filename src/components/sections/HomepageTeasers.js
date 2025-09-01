'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Store, Utensils, Palette, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function HomepageTeasers() {
  const t = useTranslations('homepage');
  const locale = useLocale();

  const teasers = [
    {
      title: t('products.title'),
      description: t('products.description'),
      cta: t('products.cta'),
      href: `/${locale}/products`,
      icon: Store,
      color: 'from-orange-500 to-red-600',
      images: [
        { src: '/products/product.jpg', alt: 'Traditional crafts' },
        { src: '/products/cloth.jpg', alt: 'Textiles and fabrics' },
        { src: '/products/cosmetic.jpg', alt: 'Cosmetics and beauty' },
        { src: '/products/Handicraft.jpg', alt: 'Handicrafts and art' }
      ]
    },
    {
      title: t('food.title'),
      description: t('food.description'),
      cta: t('food.cta'),
      href: `/${locale}/food`,
      icon: Utensils,
      color: 'from-pink-500 to-rose-600',
      images: [
        { src: '/food/food.jpg', alt: 'Main dishes' },
        { src: '/food/food copy.jpg', alt: 'Traditional cuisine' },
        { src: '/food/drinks.jpg', alt: 'Beverages and drinks' },
        { src: '/food/food copy 2.jpg', alt: 'Street food' }
      ]
    },
    {
      title: t('activities.title'),
      description: t('activities.description'),
      cta: t('activities.cta'),
      href: `/${locale}/activities`,
      icon: Palette,
      color: 'from-indigo-500 to-blue-600',
      images: [
        { src: '/activities/activity.jpg', alt: 'Creative workshops' },
        { src: '/activities/activity copy.jpg', alt: 'Cultural activities' },
        { src: '/activities/activity copy 2.jpg', alt: 'Stage entertainment' },
        { src: '/activities/activity copy 3.jpg', alt: 'Interactive fun' }
      ]
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
            Experience the world&apos;s cultures, flavors, and traditions in one extraordinary destination
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
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Link href={teaser.href} className="block h-full">
                  {/* Image Grid Section */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="grid grid-cols-2 grid-rows-2 h-full">
                      {teaser.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-r ${teaser.color} flex items-center justify-center shadow-lg`}>
                      <teaser.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {teaser.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {teaser.description}
                    </p>
                   
                    {/* //TODO: Add More Details Button */}
                    {/* <div className="space-y-3 z-10">
                      <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors duration-300">
                        <span>{teaser.cta}</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-sm border-2 border-gray-300 text-gray-700 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(teaser.href, '_blank');
                        }}
                      >
                        More Details
                      </Button>
                    </div> */}
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
