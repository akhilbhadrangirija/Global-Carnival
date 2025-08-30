"use client";
import { motion } from 'framer-motion';
import { Star, Palette, Users, Music, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ActivitiesPage() {
  const activitySections = [
    {
      id: 'creativeCorners',
      title: 'Creative Corners',
      description: 'Interactive art and craft workshops',
      longDescription: 'Unleash your creativity in our Creative Corners where visitors of all ages can participate in hands-on art and craft workshops. From traditional pottery making to modern digital art, from textile weaving to jewelry crafting, discover your artistic talents while learning about global artistic traditions.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Art Workshops', 'Craft Sessions', 'Interactive Learning', 'Cultural Art Forms'],
      icon: Palette,
      activities: [
        'Traditional Pottery Making',
        'Textile Weaving Workshops',
        'Jewelry Crafting Sessions',
        'Digital Art Creation',
        'Painting & Drawing Classes',
        'Sculpture Workshops'
      ]
    },
    {
      id: 'culturalCrafts',
      title: 'Cultural Crafts',
      description: 'Traditional craft demonstrations and learning',
      longDescription: 'Immerse yourself in the rich traditions of global craftsmanship through our Cultural Crafts section. Watch master artisans demonstrate traditional techniques, learn about cultural significance, and even try your hand at creating authentic crafts from different regions of the world.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Master Artisans', 'Traditional Techniques', 'Cultural Significance', 'Hands-on Learning'],
      icon: Users,
      activities: [
        'Silk Weaving Demonstrations',
        'Wood Carving Workshops',
        'Metalwork Crafting',
        'Ceramic Art Sessions',
        'Textile Dyeing Classes',
        'Traditional Embroidery'
      ]
    },
    {
      id: 'stageShows',
      title: 'Stage Shows',
      description: 'Live performances and cultural entertainment',
      longDescription: 'Experience the magic of live performance through our diverse Stage Shows featuring traditional dances, musical performances, theatrical productions, and cultural presentations from around the world. Each show tells a story of cultural heritage and artistic excellence.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Live Performances', 'Cultural Dances', 'Musical Shows', 'Theatrical Productions'],
      icon: Music,
      activities: [
        'Traditional Dance Performances',
        'Cultural Music Concerts',
        'Theatrical Productions',
        'Puppet Shows',
        'Storytelling Sessions',
        'Interactive Performances'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Activities & Entertainment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Engage in cultural activities, creative workshops, and live performances that bring the world's traditions to life
          </motion.p>
        </div>
      </section>

      {/* Activity Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {activitySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {section.longDescription}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 font-semibold">
                    Explore {section.title}
                  </Button>
                </div>
                
                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* Activities List */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.activities.map((activity, activityIndex) => (
                    <motion.div
                      key={activityIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: activityIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
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
              Activity Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Check out our daily schedule of activities and performances to plan your perfect carnival experience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    time: '10:00 AM - 12:00 PM',
                    title: 'Morning Workshops',
                    description: 'Creative corners and cultural craft sessions'
                  },
                  {
                    time: '2:00 PM - 4:00 PM',
                    title: 'Afternoon Activities',
                    description: 'Interactive workshops and demonstrations'
                  },
                  {
                    time: '6:00 PM - 8:00 PM',
                    title: 'Evening Entertainment',
                    description: 'Stage shows and cultural performances'
                  }
                ].map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {session.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {session.time}
                    </p>
                    <p className="text-gray-700">
                      {session.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Involved Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our interactive activities and create unforgettable memories at Global Carnival Jeddah
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                View Full Schedule
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                Book Activities
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
