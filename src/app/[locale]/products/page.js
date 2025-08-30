"use client";
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Palette, Utensils, Gift, Globe, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const productImages = [
    // Clothes & Fabric
    '/products/cloth.jpg',
    '/products/cloths.jpg',
    // Cosmetics
    '/products/cosmetic.jpg',
    '/products/cosmetics.jpg',
    // Food & Drinks
    '/products/food.jpg',
    '/products/food copy.jpg',
    '/products/food copy 2.jpg',
    '/products/food copy 3.jpg',
    '/products/drinks.jpg',
    '/products/drinks copy.jpg',
    '/products/drinks copy 2.jpg',
    // Handicrafts
    '/products/Handicraft.jpg',
    '/products/Handicraft copy.jpg',
    // General Products
    '/products/product.jpg'
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
      <section className="relative py-32 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Global Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            A vibrant tapestry of cultures under one roof
          </motion.p>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Cultural Marketplace
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
              From hand‑loomed saris, mirror‑worked kurtas, silky abayas, and kilim‑pattern jackets to saffron‑stuffed dates, fiery masala blends, Turkish delight, Himalayan pink‑salt snacks, and delicate matcha sweets, GlobalCarnival Jeddah threads a vibrant tapestry of cultures under one roof. Shoppers can pick up carved onyx bowls, mosaic‑tiled lanterns, bamboo lacquerware, terracotta sculptures, and papyrus art, then indulge in argan‑oil elixirs, Ayurvedic tonics, oud‑infused perfumes, and spa‑soft Egyptian‑cotton linens—all before exploring a dash of East‑Asian innovation with compact smart gadgets and kawaii stationery. The result is a seamless marketplace where ancient craftsmanship, gourmet flavors, timeless beauty rituals, and next‑gen trends meet, giving visitors a passport‑free world tour and exhibitors unrivalled cross‑category exposure in a single, bustling venue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover authentic products from around the world, each telling a unique story of cultural heritage and craftsmanship
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {productImages.map((image, index) => (
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
                    alt={`Product ${index + 1}`}
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

      {/* Product Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our marketplace is organized into four main categories, each representing the rich diversity of global culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: ShoppingBag,
                title: 'Clothes & Fabric',
                description: 'Traditional textiles, handwoven saris, embroidered kurtas, and cultural garments'
              },
              {
                icon: Palette,
                title: 'Cosmetics & Perfumes',
                description: 'Argan oils, Ayurvedic tonics, oud perfumes, and spa essentials'
              },
              {
                icon: Utensils,
                title: 'Food & Spices',
                description: 'Saffron dates, masala blends, Turkish delights, and global delicacies'
              },
              {
                icon: Gift,
                title: 'Souvenirs & Handicrafts',
                description: 'Onyx bowls, mosaic lanterns, terracotta sculptures, and cultural artifacts'
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
                alt="Product detail"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
       
    </div>
  );
}
