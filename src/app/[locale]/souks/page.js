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
      id: 'india',
      name: t('regions.india.name'),
      description: t('regions.india.description'),
      longDescription: "Experience the vibrant culture of India through our authentic souk featuring traditional textiles, intricate handicrafts, aromatic spices, and colorful fabrics. From the bustling markets of Mumbai to the royal heritage of Rajasthan, every corner tells a story of India's rich cultural tapestry.",
      image: '/souks/india.png',
      gallery: [
        '/souks/shop/india-pak1.png',
        '/souks/shop/india-pak2.png',
        '/souks/shop/india-pak3.png',
        '/souks/shop/india-pak4.png'
      ],
      features: ['Traditional Textiles', 'Handcrafted Jewelry', 'Aromatic Spices', 'Cultural Artifacts']
    },
    {
      id: 'pakistan',
      name: t('regions.pakistan.name'),
      description: t('regions.pakistan.description'),
      longDescription: "Discover the rich heritage of Pakistan through our authentic souk showcasing traditional fabrics, handcrafted jewelry, and cultural artifacts. From the intricate embroidery of Sindh to the vibrant colors of Punjab, experience the diversity of Pakistani craftsmanship.",
      image: '/souks/pakistan.png',
      gallery: [
        '/souks/shop/india-pak1.png',
        '/souks/shop/india-pak2.png',
        '/souks/shop/india-pak3.png',
        '/souks/shop/india-pak4.png'
      ],
      features: ['Rich Fabrics', 'Traditional Jewelry', 'Cultural Artifacts', 'Handcrafted Items']
    },
    {
      id: 'turkey',
      name: t('regions.turkey.name'),
      description: t('regions.turkey.description'),
      longDescription: "Immerse yourself in the Ottoman-inspired elegance of our Turkish souk featuring traditional ceramics, handwoven textiles, and cultural artifacts. Experience the blend of Eastern and Western influences that make Turkish culture unique.",
      image: '/souks/turkey.png',
      gallery: [
        '/souks/shop/turkey1.png',
        '/souks/shop/turkey2.png',
        '/souks/shop/turkey3.png'
      ],
      features: ['Ottoman Crafts', 'Traditional Ceramics', 'Handwoven Textiles', 'Cultural Artifacts']
    },
    {
      id: 'morocco',
      name: t('regions.morocco.name'),
      description: t('regions.morocco.description'),
      longDescription: "Experience the exotic charm of Morocco through our authentic souk featuring Berber crafts, traditional leather goods, and handcrafted ceramics. From the vibrant markets of Marrakech to the coastal beauty of Casablanca.",
      image: '/souks/morocco.png',
      gallery: [
       '/souks/shop/egypt1.png',
        '/souks/shop/egypt2.png',
        '/souks/shop/egypt3.png'
      ],
      features: ['Berber Crafts', 'Leather Goods', 'Traditional Ceramics', 'Cultural Artifacts']
    },
    {
      id: 'eastAsia',
      name: t('regions.eastAsia.name'),
      description: t('regions.eastAsia.description'),
      longDescription: "Discover the refined elegance of East Asia through our authentic souk featuring silk textiles, porcelain ceramics, and traditional arts from China, Japan, and Korea. Experience the harmony and balance that defines Eastern aesthetics.",
      image: '/souks/eastAsia.png',
      gallery: [
        '/souks/shop/eastAsia1.png',
        '/souks/shop/eastAsia2.png',
        '/souks/shop/eastAsia3.png'
      ],
      features: ['Silk Textiles', 'Porcelain Ceramics', 'Traditional Arts', 'Cultural Artifacts']
    },
    {
      id: 'gcc',
      name: t('regions.gcc.name'),
      description: t('regions.gcc.description'),
      longDescription: "Experience the rich heritage of the Arabian Peninsula through our authentic GCC souk featuring traditional crafts, dates, and cultural goods. From the desert traditions to modern Gulf culture, discover the authentic Arabian experience.",
      image: '/souks/gcc.png',
      gallery: [
        '/souks/shop/gcc1.png',
        '/souks/shop/gcc2.png',
        '/souks/shop/gcc3.png'
      ],
      features: ['Arabian Heritage', 'Traditional Crafts', 'Dates & Fruits', 'Cultural Goods']
    },
    {
      id: 'egypt',
      name: t('regions.egypt.name'),
      description: t('regions.egypt.description'),
      longDescription: "Journey through ancient Egypt in our authentic souk featuring traditional artifacts, papyrus scrolls, and cultural crafts. From the pyramids to the Nile, experience the timeless legacy of one of the world's oldest civilizations.",
      image: '/souks/egypt.png',
      gallery: [
        '/souks/shop/egypt1.png',
        '/souks/shop/egypt2.png',
        '/souks/shop/egypt3.png'
      ],
      features: ['Ancient Artifacts', 'Papyrus Scrolls', 'Traditional Crafts', 'Cultural Heritage']
    },
    {
      id: 'africa',
      name: t('regions.africa.name'),
      description: t('regions.africa.description'),
      longDescription: "Explore the diverse cultures of Africa through our authentic souk featuring tribal art, traditional fabrics, and cultural artifacts. From the savannas to the rainforests, experience the rich tapestry of African heritage.",
      image: '/souks/africa.png',
      gallery: [
       '/souks/shop/egypt1.png',
        '/souks/shop/egypt2.png',
        '/souks/shop/egypt3.png'
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
