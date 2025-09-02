"use client";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Globe, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero/hero_image3.jpg)'
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
            About Global Carnival Jeddah
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-8 text-lg md:text-xl"
          >
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6" />
              <span>23rd September 2025 → 9th April 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6" />
              <span>M-09, Arabilla Building, Hor Al Anz East, Dubai -UAE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Welcome to Global Carnival Jeddah
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Global Carnival Jeddah is a groundbreaking cultural extravaganza that brings the world&apos;s most vibrant traditions, flavors, and experiences to the heart of Saudi Arabia. This extraordinary event represents a fusion of global cultures, creating an immersive environment where visitors can explore, taste, and experience the richness of our diverse world.
                </p>
                <p>
                  Our carnival is more than just an event—it&apos;s a celebration of human creativity, cultural heritage, and global unity. Through meticulously crafted facades, authentic souks, cultural pavilions, and interactive experiences, we create a bridge between different cultures, fostering understanding and appreciation for the world&apos;s diversity.
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
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Special
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the unique elements that make Global Carnival Jeddah an extraordinary cultural experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
