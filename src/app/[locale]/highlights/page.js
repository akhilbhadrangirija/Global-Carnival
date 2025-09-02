"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { MapPin, Star, Users, Zap, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function HighlightsPage() {
  const locale = useLocale();
  const t = useTranslations('navigation');
  const highlights = [
    {
      id: 'adventurePark',
      title: 'Adventure Park',
      description: 'Thrilling rides and adventures for all ages',
      longDescription: 'Experience the excitement of our Adventure Park featuring state-of-the-art rides, thrilling attractions, and family-friendly adventures. From gentle carousels for the little ones to adrenaline-pumping roller coasters for thrill-seekers, our Adventure Park offers something for everyone.',
      image: '/attractions/adventurePark.jpg',
      features: ['Family Rides', 'Thrill Rides', 'Interactive Games', 'Safety First'],
      icon: Zap
    },
    {
      id: 'balloonPark',
      title: 'Balloon Park',
      description: 'Children\'s park with fun inflated rides and bouncy attractions',
      longDescription: 'Let your little ones bounce, slide, and play in our exciting Balloon Park featuring colorful inflated rides, bouncy castles, and interactive play structures. This safe and supervised children\'s area provides endless fun with age-appropriate attractions designed to keep kids entertained while parents can relax nearby.',
      image: '/attractions/ballonPark.jpg',
      features: ['Bouncy Castles', 'Inflated Slides', 'Safe Play Areas', 'Supervised Activities'],
      icon: Heart
    },
    {
      id: 'sportsCourt',
      title: 'Sports Court',
      description: 'Multi-sport facilities for active visitors',
      longDescription: 'Stay active and energized at our Sports Court featuring multiple sports facilities including basketball courts, football fields, tennis courts, and fitness areas. Whether you want to play a game with friends or just stay active during your visit, our Sports Court has you covered.',
      image: '/attractions/sportsCourt.jpg',
      features: ['Basketball Courts', 'Football Fields', 'Tennis Courts', 'Fitness Areas'],
      icon: Users
    },
    {
      id: 'foodKiosks',
      title: 'Food Kiosks',
      description: 'Diverse street food from around the world',
      longDescription: 'Savor authentic flavors from around the world at our diverse Food Kiosks. From traditional street food to modern culinary innovations, each kiosk offers a unique taste of different cultures. Experience the world through your taste buds in one convenient location.',
      image: '/attractions/foodKiosks.jpg',
      features: ['Global Cuisine', 'Street Food', 'Quick Service', 'Cultural Flavors'],
      icon: Star
    },
    {
      id: 'restaurants',
      title: 'Restaurants',
      description: 'Fine dining experiences in cultural settings',
      longDescription: 'Indulge in world-class dining at our themed restaurants, each offering authentic cuisine in beautifully designed cultural settings. From elegant fine dining to casual family restaurants, enjoy exceptional meals while immersing yourself in the atmosphere of different cultures.',
      image: '/attractions/restaurant1.jpg',
      features: ['Fine Dining', 'Cultural Themes', 'Authentic Cuisine', 'Family Friendly'],
      icon: Award
    },
    {
      id: 'parking',
      title: 'Parking',
      description: 'Convenient parking facilities for all visitors',
      longDescription: 'Enjoy hassle-free parking with our comprehensive parking facilities designed to accommodate all visitors. With multiple parking areas, shuttle services, and easy access to all carnival attractions, your visit starts with convenience and ends with unforgettable memories.',
      image: '/attractions/parking.jpg',
      features: ['Multiple Areas', 'Shuttle Service', 'Easy Access', 'Security Monitored'],
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
            Highlights of the Carnival
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Discover the main attractions and activities that make Global Carnival Jeddah an unforgettable experience
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
              Ready to Experience the Magic?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {/* Keeping copy simple; button is translated */}
              Have questions or need more info? Get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href={`/${locale}/contact`} className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold inline-flex items-center justify-center rounded-md">
                {t('contactUs')}
              </Link>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold">
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
