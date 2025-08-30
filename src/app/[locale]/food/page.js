"use client";
import { motion } from 'framer-motion';
import { Star, Utensils, Coffee, Cake, Pizza, Globe, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function FoodPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const foodImages = [
    // Food images from the food folder
    '/food/food.jpg',
    '/food/food copy.jpg',
    '/food/food copy 2.jpg',
    '/food/food copy 3.jpg',
    // Drinks images
    '/food/drinks.jpg',
    '/food/drinks copy.jpg',
    '/food/drinks copy 2.jpg'
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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
            Global Cuisine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            A passport-free feast of world flavors
          </motion.p>
        </div>
      </section>

      {/* Food Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Culinary Journey
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
              Global Carnival Jeddah serves a passport‑free feast: tandoor‑blistered naan with butter chicken, Pakistan's spice‑laced chapli kebabs, delicately layered Moroccan pastilla, and Egypt's tangy tomato‑topped koshari. Sweet teeth indulge in honey‑soaked Turkish baklava, pistachio‑rich halva, and medjool dates stuffed with saffron‑kissed almond paste. Adventurous eaters chase umami through East‑Asian sushi rolls, steaming dim sum baskets, and crispy Korean corn dogs. Drinks range from frothy mango lassi and cardamom‑fragrant Arabic qahwa to chilled hibiscus karkadé, velvety Turkish coffee, refreshing Moroccan mint tea, and matcha‑whisked bubble tea. Centuries‑old recipes meet Instagram‑ready street eats, letting every palate tour the world without ever leaving Jeddah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Menu
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover authentic flavors from around the world, each dish telling a unique story of cultural heritage and culinary excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {foodImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openImageModal(image)}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white">
                  <img
                    src={image}
                    alt={`Food ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Culinary Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse menu is organized into four main categories, each representing the rich flavors of global cuisine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Utensils,
                title: 'Main Dishes',
                description: 'Tandoor naan, chapli kebabs, Moroccan pastilla, and Egyptian koshari'
              },
              {
                icon: Cake,
                title: 'Desserts & Sweets',
                description: 'Turkish baklava, pistachio halva, and saffron-stuffed dates'
              },
              {
                icon: Pizza,
                title: 'Street Food',
                description: 'Sushi rolls, dim sum baskets, and Korean corn dogs'
              },
              {
                icon: Coffee,
                title: 'Beverages',
                description: 'Mango lassi, Arabic qahwa, Turkish coffee, and bubble tea'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Food detail"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
