'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Mail, Calendar, Star, Users, Car } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import CTAButton from '@/components/ui/CTAButton';

const planningTips = [
  {
    icon: Clock,
    title: "Best Time to Visit",
    description: "Weekdays are less crowded. Peak hours are 2-6 PM on weekends.",
    color: "bg-blue-500"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Most attractions are suitable for all ages. Check height requirements for rides.",
    color: "bg-green-500"
  },
  {
    icon: Car,
    title: "Getting Here",
    description: "Free parking available. Public transport stops within 5 minutes walking distance.",
    color: "bg-purple-500"
  },
  {
    icon: Star,
    title: "Must-See Attractions",
    description: "Don&apos;t miss the Cultural Pavilion and the main fountain show at sunset.",
    color: "bg-yellow-500"
  }
];

const visitorInfo = [
  {
    icon: Clock,
    title: "Opening Hours",
    details: "Daily: 9:00 AM - 11:00 PM",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "M-09, Arabilla Building, Hor Al Anz East, Dubai -UAE",
    color: "text-green-600"
  },
  {
    icon: Phone,
    title: "Contact",
    details: "+971 50 354 5972",
    color: "text-purple-600"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@globalcarnivaljeddah.com",
    color: "text-orange-600"
  }
];

export function PlanYourVisit() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plan Your Visit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to make the most of your Global carnival Jeddah experience. From opening hours to insider tips, we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Planning Tips */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Planning Tips
            </h3>
            <div className="space-y-6">
              {planningTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`${tip.color} p-3 rounded-lg text-white flex-shrink-0`}>
                    <tip.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h4>
                    <p className="text-gray-600">
                      {tip.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visitor Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Essential Information
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {visitorInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`${info.color} p-3 rounded-lg bg-gray-50`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">
                        {info.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Visit?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your tickets online to skip the queues, or contact us for group bookings and special arrangements.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CTAButton>
              <Calendar className="mr-2 w-5 h-5" />
              Book Tickets
              <span className="ml-2 text-sm opacity-80">(Coming Soon)</span>
            </CTAButton>
            
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            More Resources
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/attractions"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300"
            >
              Browse Attractions
            </Link>
            <Link
              href="/events"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300"
            >
              View Events
            </Link>
            <Link
              href="/dining"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300"
            >
              Dining Guide
            </Link>
            <Link
              href="/gallery"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300"
            >
              Photo Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
