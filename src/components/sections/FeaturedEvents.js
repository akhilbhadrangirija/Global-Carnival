'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Ticket } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

export function FeaturedEvents() {
  const t = useTranslations('events');
  const locale = useLocale();

  // Sample featured events - in a real app, this would come from an API
  const featuredEvents = [
    {
      id: 'winter-festival',
      title: 'Winter Festival of Lights',
      titleAr: 'مهرجان الشتاء للأضواء',
      summary: 'A magical celebration of winter with millions of twinkling lights and festive performances',
      summaryAr: 'احتفال سحري بالشتاء مع ملايين الأضواء المتلألئة والعروض الاحتفالية',
      startDate: '2025-12-01',
      endDate: '2025-12-31',
      time: '6:00 PM - 11:00 PM',
      location: 'Main Plaza & Gardens',
      image: 'https://images.unsplash.com/photo-1543589923-d58f523da226?w=800&h=600&fit=crop',
      ticketPrice: 'Free',
      category: 'festival'
    },
    {
      id: 'cultural-exchange',
      title: 'Global Cultural Exchange',
      titleAr: 'التبادل الثقافي العالمي',
      summary: 'Experience cultures from around the world through music, dance, and traditional arts',
      summaryAr: 'عش الثقافات من جميع أنحاء العالم من خلال الموسيقى والرقص والفنون التقليدية',
      startDate: '2026-01-15',
      endDate: '2026-02-15',
      time: 'Various times',
      location: 'Cultural Pavilion & Outdoor Stages',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      ticketPrice: 'Free - $25',
      category: 'cultural'
    },
    {
      id: 'food-festival',
      title: 'International Food Festival',
      titleAr: 'مهرجان الطعام الدولي',
      summary: 'Savor flavors from around the world with top chefs and authentic cuisines',
      summaryAr: 'تذوق النكهات من جميع أنحاء العالم مع أفضل الطهاة والمأكولات الأصيلة',
      startDate: '2026-02-20',
      endDate: '2026-02-28',
      time: '11:00 AM - 10:00 PM',
      location: 'Food Court & Outdoor Dining Areas',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      ticketPrice: '$15 - $45',
      category: 'food'
    }
  ];

  const carouselItems = featuredEvents.map((event) => (
    <div key={event.id} className="relative h-full">
      <div className="absolute inset-0">
        <img
          src={event.image}
          alt={locale === 'ar' ? event.titleAr : event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="flex items-center space-x-2 mb-3">
          <div className="bg-primary px-3 py-1 rounded-full text-xs font-medium">
            {event.category}
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
            {event.ticketPrice}
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          {locale === 'ar' ? event.titleAr : event.title}
        </h3>
        
        <p className="text-gray-200 mb-4 max-w-md">
          {locale === 'ar' ? event.summaryAr : event.summary}
        </p>
        
        <div className="flex items-center space-x-4 mb-6 text-sm text-gray-300">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(event.startDate, locale)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Ticket className="w-4 h-4 mr-2" />
            Book Now
          </Button>
          <Link
            href={`/${locale}/events/${event.id}`}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t miss out on our upcoming events and experiences. From cultural celebrations to thrilling adventures, 
            there&apos;s always something exciting happening at Global carnival Jeddah.
          </p>
        </motion.div>

        {/* Events Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Carousel
            items={carouselItems}
            autoPlay={true}
            interval={6000}
            showArrows={true}
            showDots={true}
            className="rounded-2xl overflow-hidden shadow-2xl"
          />
        </motion.div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href={`/${locale}/events`}>
            <Button variant="outline" size="lg" className="group">
              {t('viewAll')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
