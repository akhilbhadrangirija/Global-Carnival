'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    alt: "Global carnival Jeddah aerial view",
    category: "Architecture"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=600&fit=crop",
    alt: "Family enjoying attractions",
    category: "Family"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop",
    alt: "Cultural performance",
    category: "Culture"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop",
    alt: "Adventure activities",
    category: "Adventure"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
    alt: "Entertainment venue",
    category: "Entertainment"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop",
    alt: "Shopping district",
    category: "Shopping"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=600&fit=crop",
    alt: "Dining experience",
    category: "Dining"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
    alt: "Night illumination",
    category: "Nightlife"
  }
];

export function GalleryStrip() {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through Global carnival Jeddah and discover the beauty, excitement, and wonder that awaits you.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  onClick={() => openLightbox(image, index)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl max-h-full">
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

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                  <p className="font-medium">{selectedImage.alt}</p>
                  <p className="text-sm opacity-80">{selectedImage.category}</p>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
