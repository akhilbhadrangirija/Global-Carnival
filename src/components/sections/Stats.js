'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Star } from 'lucide-react';

export function Stats() {
  const t = useTranslations('stats');

  const stats = [
    {
      icon: MapPin,
      value: '25+',
      label: t('attractions'),
      description: 'Unique experiences to discover'
    },
    {
      icon: Calendar,
      value: '12',
      label: t('eventsThisMonth'),
      description: 'Upcoming events this month'
    },
    {
      icon: Star,
      value: '50+',
      label: t('diningSpots'),
      description: 'Global cuisine options'
    },
    {
      icon: Users,
      value: '100K+',
      label: t('visitors'),
      description: 'Monthly visitors'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            What Makes Us Special
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the numbers behind our extraordinary destination and see why millions choose to visit us every year.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Magic?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of visitors who have already discovered the wonders of Global carnival Jeddah. 
              Plan your visit today and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Plan Your Visit
              </button>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                View Virtual Tour →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
