'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function AboutPreview() {
  const t = useTranslations();
  const locale = useLocale();

  const features = [
    {
      icon: Globe,
      title: "Global Cultural Diversity",
      description: "Experience authentic representations of cultures from every continent, each carefully curated to preserve their unique traditions and heritage."
    },
    {
      icon: Users,
      title: "Interactive Experiences",
      description: "Engage with cultural ambassadors, participate in traditional activities, and create lasting memories through hands-on experiences."
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Located in the vibrant city of Jeddah, a gateway to the Middle East, making it accessible to visitors from around the world."
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
            About Global Carnival Jeddah
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A groundbreaking cultural extravaganza that brings the world&apos;s most vibrant traditions, flavors, and experiences to the heart of Saudi Arabia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Global Carnival Jeddah is more than just an event—it&apos;s a celebration of human creativity, cultural heritage, and global unity. Through meticulously crafted facades, authentic souks, cultural pavilions, and interactive experiences, we create a bridge between different cultures.
              </p>
              <p>
                From the bustling markets of Marrakech to the serene gardens of Kyoto, from the vibrant streets of Mumbai to the elegant boulevards of Paris, Global Carnival Jeddah offers an unparalleled journey around the world without leaving the Arabian Peninsula.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-jeddah.jpg"
                alt="Global Carnival Jeddah cultural celebration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 text-center hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href={`/${locale}/about`}>
            <Button size="lg" className="group bg-primary text-white hover:bg-primary/90">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
