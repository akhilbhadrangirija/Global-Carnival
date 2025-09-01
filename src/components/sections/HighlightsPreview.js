'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, MapPin, Carousel } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useState } from 'react';

export function HighlightsPreview() {
  const t = useTranslations('highlights');
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);

  const highlights = [
    {
      title: t('attractions.adventurePark'),
      image: '/attractions/adventurePark.jpg',
      description: 'Thrilling rides and adventures for all ages'
    },
    {
      title: t('attractions.balloonPark'),
      image: '/attractions/ballonPark.jpg',
      description: 'Colorful balloon displays and hot air balloon experiences'
    },
    {
      title: t('attractions.sportsCourt'),
      image: '/attractions/sportsCourt.jpg',
      description: 'Multi-sport facilities for active visitors'
    },
    {
      title: t('attractions.foodKiosks'),
      image: '/attractions/foodKiosks.jpg',
      description: 'Diverse street food from around the world'
    },
    {
      title: t('attractions.restaurants'),
      image: '/attractions/restaurant1.jpg',
      description: 'Fine dining experiences in cultural settings'
    },
    {
      title: t('attractions.parking'),
      image: '/attractions/parking.jpg',
      description: 'Convenient parking facilities for all visitors'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === highlights.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? highlights.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br" style={{ backgroundImage: 'linear-gradient(to right, #000428, #004e92)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-lg text-gray-200 mb-4">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous highlight"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next highlight"
          >
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to highlight ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href={`/${locale}/highlights`}>
            <Button size="lg" className="group">
              Explore All Highlights
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
