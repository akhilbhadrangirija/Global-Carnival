'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Carousel } from '@/components/ui/Carousel';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  // Hero images array
  const heroImages = [
    {
      src: "/hero/hero_image1.jpg",
      alt: "Global Carnival Jeddah - A world of wonder and culture"
    },
    {
      src: "/hero/hero_image2.jpg",
      alt: "Global Carnival Jeddah - A world of wonder and culture"
    },
    {
      src: "/hero/hero_image3.jpg",
      alt: "Global Carnival Jeddah - A world of wonder and culture"
    },
    {
      src: "/hero/hero_image4.jpg",
      alt: "Global Carnival Jeddah - A world of wonder and culture"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute z-10 inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 pointer-events-none"
        />
        <Carousel
          items={heroImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
            />
          ))}
          autoPlay={true}
          interval={6000}
          showArrows={false}
          showDots={false}
          className="w-full h-full"
        />
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
         

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-oswald"
          >
            {t('title')}
          </motion.h1>

          {/* Sub-text */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p> */}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <Link href={`/${locale}/overview`}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2  font-medium text-white backdrop-blur-3xl">
        {t('cta')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
              {/* <Button size="lg" className="group">
                {t('cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </Link>
          </motion.div>

          {/* Event Dates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className='space-y-2 backdrop-blur-sm bg-white/20 border border-white/20 rounded-xl px-4 py-3'>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-200 text-sm">Organized by</p>
              <a 
                href="https://www.barakatexhibitions.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image 
                  src="/ShamsAl.png" 
                  alt="Shams Al Logo" 
                  width={300} 
                  height={150}
                  className="object-contain"
                />
              </a>
            </div>

            <div className=" flex flex-col md:flex-row items-center gap-2 text-gray-200">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{t('dates')}</span>
              </div>
              <span className="hidden md:inline-block w-px h-6" />
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{t('location')}</span>
              </div>
            </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
