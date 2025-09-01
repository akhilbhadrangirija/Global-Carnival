'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Globe, Award, Zap, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function PartnerCTA() {
  const t = useTranslations('partner');
  const locale = useLocale();

  const benefits = [
    {
      title: t('benefits.tailoredFestival'),
      icon: Star,
      description: 'Custom festival experiences tailored to your brand and audience'
    },
    {
      title: t('benefits.culturalExperience'),
      icon: Globe,
      description: 'Access to diverse cultural experiences and global markets'
    },
    {
      title: t('benefits.uniqueVision'),
      icon: Target,
      description: 'Be part of a unique vision that brings the world to Saudi Arabia'
    },
    {
      title: t('benefits.endToEnd'),
      icon: Zap,
      description: 'Comprehensive services from planning to execution'
    },
    {
      title: t('benefits.expertOperations'),
      icon: Users,
      description: 'Professional on-site operations and management'
    },
    {
      title: t('benefits.strongNetwork'),
      icon: Users,
      description: 'Access to our extensive network of cultural partners'
    },
    {
      title: t('benefits.seamlessExecution'),
      icon: Zap,
      description: 'Smooth and professional event execution'
    },
    {
      title: t('benefits.guaranteedSuccess'),
      icon: Award,
      description: 'Proven track record and success guarantees'
    }
  ];

  return (
    <section className="py-20 relative text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero/hero_image1.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-white/80 text-sm">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href={`/${locale}/partner`}>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white group">
              {t('title')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
