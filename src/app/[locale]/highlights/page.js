"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { MapPin, Star, Users, Zap, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function HighlightsPage() {
  const locale = useLocale();
  const t = useTranslations('highlights.page');
  
  // Helper function to get features for each attraction
  const getFeatures = (attractionId) => {
    const featureKeys = {
      adventurePark: ['familyRides', 'thrillRides', 'interactiveGames', 'safetyFirst'],
      balloonPark: ['bouncyCastles', 'inflatedSlides', 'safePlayAreas', 'supervisedActivities'],
      sportsCourt: ['basketballCourts', 'footballFields', 'tennisCourts', 'fitnessAreas'],
      foodKiosks: ['globalCuisine', 'streetFood', 'quickService', 'culturalFlavors'],
      restaurants: ['fineDining', 'culturalThemes', 'authenticCuisine', 'familyFriendly'],
      parking: ['multipleAreas', 'shuttleService', 'easyAccess', 'securityMonitored']
    };
    
    return featureKeys[attractionId].map(key => 
      t(`attractions.${attractionId}.features.${key}`)
    );
  };

  const highlights = [
    {
      id: 'adventurePark',
      title: t('attractions.adventurePark.title'),
      description: t('attractions.adventurePark.description'),
      longDescription: t('attractions.adventurePark.longDescription'),
      image: '/attractions/adventurePark.jpg',
      features: getFeatures('adventurePark'),
      icon: Zap
    },
    {
      id: 'balloonPark',
      title: t('attractions.balloonPark.title'),
      description: t('attractions.balloonPark.description'),
      longDescription: t('attractions.balloonPark.longDescription'),
      image: '/attractions/ballonPark.jpg',
      features: getFeatures('balloonPark'),
      icon: Heart
    },
    {
      id: 'sportsCourt',
      title: t('attractions.sportsCourt.title'),
      description: t('attractions.sportsCourt.description'),
      longDescription: t('attractions.sportsCourt.longDescription'),
      image: '/attractions/sportsCourt.jpg',
      features: getFeatures('sportsCourt'),
      icon: Users
    },
    {
      id: 'foodKiosks',
      title: t('attractions.foodKiosks.title'),
      description: t('attractions.foodKiosks.description'),
      longDescription: t('attractions.foodKiosks.longDescription'),
      image: '/attractions/foodKiosks.jpg',
      features: getFeatures('foodKiosks'),
      icon: Star
    },
    {
      id: 'restaurants',
      title: t('attractions.restaurants.title'),
      description: t('attractions.restaurants.description'),
      longDescription: t('attractions.restaurants.longDescription'),
      image: '/attractions/restaurant1.jpg',
      features: getFeatures('restaurants'),
      icon: Award
    },
    {
      id: 'parking',
      title: t('attractions.parking.title'),
      description: t('attractions.parking.description'),
      longDescription: t('attractions.parking.longDescription'),
      image: '/attractions/parking.jpg',
      features: getFeatures('parking'),
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero/hero_image2.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {highlight.longDescription}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {highlight.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href={`/${locale}/contact`} className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold inline-flex items-center justify-center rounded-md">
                {t('cta.contactUs')}
              </Link>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold">
                {t('cta.viewSchedule')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
