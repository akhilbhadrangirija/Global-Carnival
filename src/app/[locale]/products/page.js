"use client";
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Palette, Utensils, Gift } from 'lucide-react';

export default function ProductsPage() {
  const productCategories = [
    {
      id: 'clothes',
      title: 'Clothes & Fabric',
      description: 'Traditional and modern textiles from around the world',
      longDescription: 'Discover a world of textiles and clothing from every corner of the globe. From handwoven silk from China to traditional embroidered fabrics from India, from elegant Turkish textiles to vibrant African prints, our Clothes & Fabric section showcases the incredible diversity of global textile traditions.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Handwoven Textiles', 'Traditional Embroidery', 'Modern Fashion', 'Cultural Designs'],
      icon: ShoppingBag,
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 'cosmetics',
      title: 'Cosmetics & Perfumes',
      description: 'Beauty products and fragrances from global traditions',
      longDescription: 'Experience the art of beauty through our collection of cosmetics and perfumes from around the world. From traditional Arabian oud and rose water to French luxury cosmetics, from Indian ayurvedic beauty products to Moroccan argan oil, discover beauty secrets that have been passed down through generations.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Traditional Oils', 'Luxury Cosmetics', 'Natural Products', 'Cultural Beauty'],
      icon: Palette,
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 'food',
      title: 'Food & Spices',
      description: 'Culinary treasures and aromatic spices from global cuisines',
      longDescription: 'Embark on a culinary journey through our Food & Spices section featuring authentic ingredients from around the world. From the aromatic spices of India to the rich flavors of the Middle East, from exotic Asian ingredients to traditional European delicacies, discover the building blocks of global cuisine.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Aromatic Spices', 'Traditional Ingredients', 'Exotic Flavors', 'Cultural Cuisine'],
      icon: Utensils,
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 'souvenirs',
      title: 'Souvenirs & Handicraft',
      description: 'Unique cultural artifacts and handcrafted treasures',
      longDescription: 'Take home a piece of global culture with our collection of souvenirs and handicrafts. From hand-carved wooden artifacts to intricate metalwork, from traditional pottery to modern artistic creations, each piece tells a story of cultural heritage and artistic excellence.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
      features: ['Handcrafted Items', 'Cultural Artifacts', 'Artistic Creations', 'Unique Souvenirs'],
      icon: Gift,
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
      <section className="relative py-32 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Product Diversity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Explore a world of products from every corner of the globe, each representing the unique culture and craftsmanship of its region
          </motion.p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {productCategories.map((category, index) => (
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
                  
                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                    Explore {category.title}
                  </button>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover Global Treasures
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take home authentic products and cultural treasures from around the world
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Shopping
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
