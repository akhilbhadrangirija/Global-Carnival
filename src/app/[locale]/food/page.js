"use client";
import { motion } from 'framer-motion';
import { Star, Utensils, Coffee, Cake, Pizza } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function FoodPage() {
  const foodCategories = [
    {
      id: 'classics',
      title: 'Classics',
      description: 'Traditional dishes from around the world',
      longDescription: 'Experience the timeless classics that have defined global cuisine for generations. From Italian pasta and French coq au vin to Indian curry and Chinese dim sum, our Classics section brings you the most beloved and authentic dishes from every corner of the world.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Traditional Recipes', 'Authentic Flavors', 'Cultural Heritage', 'Time-Tested Dishes'],
      icon: Utensils,
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 'streetSnacks',
      title: 'Street Snacks',
      description: 'Quick bites and street food favorites',
      longDescription: 'Discover the vibrant world of street food that brings cities to life. From Turkish kebabs and Mexican tacos to Indian chaat and Thai pad thai, our Street Snacks section captures the energy and authenticity of global street food culture.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Quick Service', 'Authentic Street Food', 'Global Flavors', 'Casual Dining'],
      icon: Pizza,
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      description: 'Sweet treats and confections from global traditions',
      longDescription: 'Indulge your sweet tooth with our collection of desserts from around the world. From French pastries and Italian gelato to Turkish baklava and Indian gulab jamun, our Desserts section offers a sweet journey through global culinary traditions.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Sweet Treats', 'Cultural Desserts', 'Artisanal Pastries', 'Global Confections'],
      icon: Cake,
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 'drinks',
      title: 'Drinks',
      description: 'Beverages and refreshments from global cultures',
      longDescription: 'Quench your thirst with our diverse selection of beverages from around the world. From traditional teas and coffees to fresh fruit juices and cultural drinks, our Drinks section offers refreshing options that reflect global beverage traditions.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Traditional Teas', 'Cultural Coffees', 'Fresh Juices', 'Global Beverages'],
      icon: Coffee,
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-pink-600 to-rose-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Food & Beverages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Savor authentic flavors from around the world, from traditional street food to fine dining experiences that showcase the diversity of global cuisine
          </motion.p>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {foodCategories.map((category, index) => (
            <motion.div
              key={category.id}
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
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {category.longDescription}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 font-semibold">
                    Explore {category.title}
                  </Button>
                </div>
                
                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* Gallery Strip */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.gallery.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="relative h-32 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={image}
                          alt={`${category.title} gallery`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Taste the World
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the incredible diversity of global cuisine in one extraordinary destination
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold">
              View Menu
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
