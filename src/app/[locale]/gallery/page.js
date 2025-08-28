'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

// Mock gallery data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    alt: "CityScape Oasis aerial view at sunset",
    category: "Architecture",
    description: "A breathtaking aerial view of CityScape Oasis showcasing the stunning architecture and beautiful sunset colors."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=800&fit=crop",
    alt: "Family enjoying attractions together",
    category: "Family",
    description: "Families creating lasting memories while exploring the various attractions and activities."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&h=700&fit=crop",
    alt: "Cultural performance on stage",
    category: "Culture",
    description: "Vibrant cultural performances that bring the traditions of the world to life on our main stage."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop",
    alt: "Adventure activities and outdoor fun",
    category: "Adventure",
    description: "Thrilling outdoor adventures and activities that challenge and excite visitors of all ages."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
    alt: "Entertainment venue with live music",
    category: "Entertainment",
    description: "Live entertainment venues where music, dance, and performance art come together."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&h=600&fit=crop",
    alt: "Shopping district bustling with activity",
    category: "Shopping",
    description: "The vibrant shopping district offering unique finds and international brands."
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop",
    alt: "Fine dining experience",
    category: "Dining",
    description: "Elegant dining experiences that showcase culinary excellence from around the world."
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop",
    alt: "Night illumination and lights",
    category: "Nightlife",
    description: "The magical transformation of CityScape Oasis as the sun sets and lights come alive."
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=700&h=700&fit=crop",
    alt: "Festival celebrations and events",
    category: "Events",
    description: "Colorful festivals and celebrations that bring communities together in joy and harmony."
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop",
    alt: "Mediterranean dining terrace",
    category: "Dining",
    description: "Al fresco dining experiences that combine great food with beautiful outdoor settings."
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=800&fit=crop",
    alt: "Spice market and culinary delights",
    category: "Culture",
    description: "Exploring the rich aromas and flavors of international spice markets and culinary traditions."
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&h=600&fit=crop",
    alt: "Artisan crafts and handmade goods",
    category: "Shopping",
    description: "Discovering unique handmade crafts and artisanal products from skilled craftsmen."
  }
];

const categories = [
  { key: "all", label: "All Photos", count: galleryImages.length },
  { key: "architecture", label: "Architecture", count: galleryImages.filter(img => img.category.toLowerCase() === "architecture").length },
  { key: "family", label: "Family", count: galleryImages.filter(img => img.category.toLowerCase() === "family").length },
  { key: "culture", label: "Culture", count: galleryImages.filter(img => img.category.toLowerCase() === "culture").length },
  { key: "adventure", label: "Adventure", count: galleryImages.filter(img => img.category.toLowerCase() === "adventure").length },
  { key: "entertainment", label: "Entertainment", count: galleryImages.filter(img => img.category.toLowerCase() === "entertainment").length },
  { key: "shopping", label: "Shopping", count: galleryImages.filter(img => img.category.toLowerCase() === "shopping").length },
  { key: "dining", label: "Dining", count: galleryImages.filter(img => img.category.toLowerCase() === "dining").length },
  { key: "nightlife", label: "Nightlife", count: galleryImages.filter(img => img.category.toLowerCase() === "nightlife").length },
  { key: "events", label: "Events", count: galleryImages.filter(img => img.category.toLowerCase() === "events").length }
];

export default function GalleryPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category.toLowerCase() === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {t('gallery.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Take a visual journey through CityScape Oasis and discover the beauty, excitement, and wonder that awaits you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredImages.length} Photo{filteredImages.length !== 1 ? 's' : ''} in {categories.find(c => c.key === selectedCategory)?.label}
            </h2>
            <div className="text-gray-600">
              Click any image to view in full size
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => openLightbox(image, filteredImages.indexOf(image))}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold mb-1">{image.category}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-gray-900">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No photos found in this category
              </h3>
              <p className="text-gray-600">
                Try selecting a different category or browse all photos.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-6xl max-h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Action Buttons */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Download functionality would go here
                  }}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="Download image"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Share functionality would go here
                  }}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="Share image"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{selectedImage.category}</h3>
                <p className="text-sm opacity-90">{selectedImage.description}</p>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
