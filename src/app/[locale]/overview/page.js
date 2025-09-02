"use client";
import { motion } from 'framer-motion';
import { Calendar, MapPin, Globe, Users, Star, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function OverviewPage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero/hero_image1.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {t('overview.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            {t('overview.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('overview.carnivalAtmosphere.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('overview.carnivalAtmosphere.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('overview.carnivalAtmosphere.items.festiveAtmosphere.title'),
                image: "/global-carnival.jpg",
                description: t('overview.carnivalAtmosphere.items.festiveAtmosphere.description')
              },
              {
                title: t('overview.carnivalAtmosphere.items.culturalDiversity.title'),
                image: "/diversity.jpg",
                description: t('overview.carnivalAtmosphere.items.culturalDiversity.description')
              },
              {
                title: t('overview.carnivalAtmosphere.items.liveEntertainment.title'),
                image: "/live_event.jpg",
                description: t('overview.carnivalAtmosphere.items.liveEntertainment.description')
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {t('overview.projectOverview.title')}
              </h2>
              
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t('overview.projectOverview.content.paragraph1')}
                </p>
                
                <p>
                  {t('overview.projectOverview.content.paragraph2')}
                </p>
                
                <p>
                  {t('overview.projectOverview.content.paragraph3')}
                </p>
                
                <p>
                  {t('overview.projectOverview.content.paragraph4')}
                </p>
                
                <p>
                  {t('overview.projectOverview.content.paragraph5')}
                </p>
                
                <p>
                  {t('overview.projectOverview.content.paragraph6')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* Key Features Grid */}
      <section className="py-20 bg-gradient-to-br" style={{ backgroundImage: 'linear-gradient(to right, #000428, #004e92)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('overview.projectHighlights.title')}
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              {t('overview.projectHighlights.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: t('overview.projectHighlights.features.culturalAuthenticity.title'),
                description: t('overview.projectHighlights.features.culturalAuthenticity.description')
              },
              {
                icon: Users,
                title: t('overview.projectHighlights.features.interactiveExperiences.title'),
                description: t('overview.projectHighlights.features.interactiveExperiences.description')
              },
              {
                icon: Star,
                title: t('overview.projectHighlights.features.worldClassEntertainment.title'),
                description: t('overview.projectHighlights.features.worldClassEntertainment.description')
              },
              {
                icon: Zap,
                title: t('overview.projectHighlights.features.modernInfrastructure.title'),
                description: t('overview.projectHighlights.features.modernInfrastructure.description')
              },
              {
                icon: MapPin,
                title: t('overview.projectHighlights.features.strategicLocation.title'),
                description: t('overview.projectHighlights.features.strategicLocation.description')
              },
              {
                icon: Calendar,
                title: t('overview.projectHighlights.features.extendedSeason.title'),
                description: t('overview.projectHighlights.features.extendedSeason.description')
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Images */}
      
    </div>
  );
}
