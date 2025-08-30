"use client";
import { motion } from 'framer-motion';
import { Calendar, MapPin, Globe, Users, Star, Zap } from 'lucide-react';

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Project Overview
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            A comprehensive carnival experience featuring facades, shops, pavilions, and kiosks from around the world
          </motion.p>
        </div>
      </section>

      {/* Project Overview Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Global Carnival Jeddah: A World of Possibilities
              </h2>
              
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <p>
                  Global Carnival Jeddah represents a revolutionary approach to cultural tourism and entertainment, creating an immersive environment where visitors can experience the world&apos;s most vibrant cultures, traditions, and flavors in one extraordinary destination. This ambitious project goes beyond traditional theme parks or cultural centers—it&apos;s a living, breathing celebration of global diversity.
                </p>
                
                <p>
                  Our carnival concept is built around the principle of authentic cultural representation. Each region, country, and culture featured in our carnival is represented through carefully crafted facades that replicate iconic architectural styles, authentic souks that showcase traditional crafts and products, cultural pavilions that tell the stories of different societies, and interactive kiosks that offer hands-on experiences.
                </p>
                
                <p>
                  The project encompasses six distinct cultural regions: India & Pakistan, Turkey & Morocco, East Asia (China, Japan, Korea), GCC countries, Egypt, and Africa. Each region is designed to provide visitors with an authentic experience that goes beyond surface-level representation, offering deep cultural immersion through food, music, art, crafts, and interactive experiences.
                </p>
                
                <p>
                  What sets Global Carnival Jeddah apart is our commitment to cultural authenticity. We work directly with cultural ambassadors, artisans, and experts from each region to ensure that every aspect of our carnival—from the architecture and decor to the food and entertainment—accurately represents the rich heritage and traditions of these diverse cultures.
                </p>
                
                <p>
                  The carnival is designed to be accessible to visitors of all ages and backgrounds, offering educational experiences for students, entertainment for families, cultural enrichment for adults, and exciting adventures for thrill-seekers. Our facilities include adventure parks, balloon displays, sports courts, diverse dining options, and ample parking to accommodate visitors from around the world.
                </p>
                
                <p>
                  Beyond entertainment, Global Carnival Jeddah serves as a platform for cultural exchange, business opportunities, and international collaboration. We welcome partnerships with cultural organizations, businesses, and individuals who share our vision of bringing the world together through celebration and understanding.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
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
              Project Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the key elements that make Global Carnival Jeddah a unique cultural destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Cultural Authenticity",
                description: "Each region is authentically represented through direct collaboration with cultural experts and artisans."
              },
              {
                icon: Users,
                title: "Interactive Experiences",
                description: "Visitors engage directly with cultural traditions through hands-on activities and demonstrations."
              },
              {
                icon: Star,
                title: "World-Class Entertainment",
                description: "Live performances, cultural shows, and entertainment from around the globe."
              },
              {
                icon: Zap,
                title: "Modern Infrastructure",
                description: "State-of-the-art facilities designed for comfort, accessibility, and sustainability."
              },
              {
                icon: MapPin,
                title: "Strategic Location",
                description: "Located in Jeddah, a gateway city accessible to visitors from multiple continents."
              },
              {
                icon: Calendar,
                title: "Extended Season",
                description: "Seven-month carnival season from September 2025 to April 2026."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
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

      {/* Supporting Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Carnival Atmosphere
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the festive atmosphere and cultural diversity that awaits you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
                title: "Festive Atmosphere",
                description: "Vibrant celebrations and cultural performances"
              },
              {
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
                title: "Cultural Diversity",
                description: "Representation of cultures from around the world"
              },
              {
                image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop",
                title: "Live Entertainment",
                description: "Dynamic performances and cultural shows"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
