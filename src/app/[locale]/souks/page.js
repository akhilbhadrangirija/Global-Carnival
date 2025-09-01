'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function SouksPage() {
  const t = useTranslations('souks');
  const locale = useLocale();
  const [selectedSouk, setSelectedSouk] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const souks = [
    {
      id: 'indiaPakistan',
      name: t('regions.indiaPakistan.name'),
      description: t('regions.indiaPakistan.description'),
      longDescription: "Experience the vibrant cultures of India and Pakistan through our authentic souk featuring traditional textiles, intricate handicrafts, aromatic spices, rich fabrics, and cultural artifacts. From the bustling markets of Mumbai to the royal heritage of Rajasthan, and from the intricate embroidery of Sindh to the vibrant colors of Punjab, every corner tells a story of the subcontinent's rich cultural tapestry.",
      image: '/souks/shop/india-pakistan-shop-main.jpg',
      gallery: [
        '/souks/shop/india-pakistan-shop-1.jpg',
        '/souks/shop/india-pakistan-shop-2.jpg',
        '/souks/shop/india-pakistan-shop-3.jpg',
        '/souks/shop/india-pakistan-shop-4.jpg'
      ],
      features: ['Traditional Textiles', 'Handcrafted Jewelry', 'Aromatic Spices', 'Rich Fabrics', 'Cultural Artifacts']
    },
    {
      id: 'turkeyMorocco',
      name: t('regions.turkeyMorocco.name'),
      description: t('regions.turkeyMorocco.description'),
      longDescription: "Immerse yourself in the rich cultural heritage of Turkey and Morocco through our authentic souk featuring Ottoman-inspired crafts, traditional ceramics, handwoven textiles, Berber crafts, and leather goods. Experience the blend of Eastern and Western influences from Turkey and the exotic charm of Morocco from the vibrant markets of Marrakech to the coastal beauty of Casablanca.",
      image: '/souks/TURKEY-MOROCCO.jpg',
      gallery: [
        '/souks/shop/turkey-morocco-shop-1.jpg',
        '/souks/shop/turkey-morocco-shop-2.jpg',
        '/souks/shop/turkey-morocco-shop-3.jpg',
        '/souks/shop/turkey-morocco-shop-4.jpg'
      ],
      features: ['Ottoman Crafts', 'Traditional Ceramics', 'Handwoven Textiles', 'Berber Crafts', 'Leather Goods', 'Cultural Artifacts']
    },
    {
      id: 'eastAsia',
      name: t('regions.eastAsia.name'),
      description: t('regions.eastAsia.description'),
      longDescription: "Discover the refined elegance of East Asia through our authentic souk featuring silk textiles, porcelain ceramics, and traditional arts from China, Japan, and Korea. Experience the harmony and balance that defines Eastern aesthetics.",
      image: '/souks/EastAsia.jpg',
      gallery: [
        '/souks/shop/east-asia-shop-1.jpg',
        '/souks/shop/east-asia-shop-2.jpg',
        '/souks/shop/east-asia-shop-3.jpg',
        '/souks/shop/east-asia-shop-4.jpg'
      ],
      features: ['Silk Textiles', 'Porcelain Ceramics', 'Traditional Arts', 'Cultural Artifacts']
    },
    {
      id: 'gcc',
      name: t('regions.gcc.name'),
      description: t('regions.gcc.description'),
      longDescription: "Experience the rich heritage of the Arabian Peninsula through our authentic GCC souk featuring traditional crafts, dates, and cultural goods. From the desert traditions to modern Gulf culture, discover the authentic Arabian experience.",
      image: '/souks/GCC.jpg',
      gallery: [
        '/souks/shop/gcc-shop-1.jpg',
        '/souks/shop/gcc-shop-2.jpg',
        '/souks/shop/gcc-shop-3.jpg',
        '/souks/shop/gcc-shop-4.jpg'
      ],
      features: ['Arabian Heritage', 'Traditional Crafts', 'Dates & Fruits', 'Cultural Goods']
    },
    {
      id: 'egypt',
      name: t('regions.egypt.name'),
      description: t('regions.egypt.description'),
      longDescription: "Journey through ancient Egypt in our authentic souk featuring traditional artifacts, papyrus scrolls, and cultural crafts. From the pyramids to the Nile, experience the timeless legacy of one of the world&apos;s oldest civilizations.",
      image: '/souks/shop/egypt-shop-1.jpg',
      gallery: [
        '/souks/shop/egypt-shop-1.jpg',
        '/souks/shop/egypt-shop-2.jpg',
        '/souks/shop/egypt-shop-3.jpg',
        '/souks/shop/egypt-shop-4.jpg'
      ],
      features: ['Ancient Artifacts', 'Papyrus Scrolls', 'Traditional Crafts', 'Cultural Heritage']
    },
    {
      id: 'africa',
      name: t('regions.africa.name'),
      description: t('regions.africa.description'),
      longDescription: "Explore the diverse cultures of Africa through our authentic souk featuring tribal art, traditional fabrics, and cultural artifacts. From the savannas to the rainforests, experience the rich tapestry of African heritage.",
      image: '/souks/shop/egypt-shop-2.jpg',
      gallery: [
       '/souks/shop/egypt-shop-1.jpg',
        '/souks/shop/egypt-shop-2.jpg',
        '/souks/shop/egypt-shop-3.jpg'
      ],
      features: ['Tribal Art', 'Traditional Fabrics', 'Cultural Artifacts', 'African Heritage']
    }
  ];

  const openGallery = (souk) => {
    setSelectedSouk(souk);
    setGalleryIndex(0);
  };

  const closeGallery = () => {
    setSelectedSouk(null);
    setGalleryIndex(0);
  };

  const nextImage = () => {
    setGalleryIndex((prev) => 
      prev === selectedSouk.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setGalleryIndex((prev) => 
      prev === 0 ? selectedSouk.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            {t('description')}
          </motion.p>
        </div>
      </section>

      {/* Souks Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {souks.map((souk, index) => (
              <motion.div
                key={souk.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => openGallery(souk)}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={souk.image}
                      alt={`${souk.name} souk`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {souk.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {souk.description}
                    </p>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {t('viewGallery')}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedSouk && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden">
                <img
                  src={selectedSouk.gallery[galleryIndex]}
                  alt={`${selectedSouk.name} gallery`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  {galleryIndex + 1} / {selectedSouk.gallery.length}
                </div>
              </div>

              {/* Souk Information */}
              <div className="bg-white rounded-2xl mt-6 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedSouk.name}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedSouk.longDescription}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedSouk.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
