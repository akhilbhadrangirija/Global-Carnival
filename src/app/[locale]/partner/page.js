"use client";

import { motion } from 'framer-motion';
import { Star, Users, Globe, Award, Zap, Shield, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PartnerPage() {
  const partnershipBenefits = [
    {
      id: 'tailoredFestival',
      title: 'Tailored Festival Creation',
      description: 'Custom festival experiences tailored to your brand and audience',
      longDescription: 'We work closely with our partners to create customized festival experiences that align with your brand values and target audience. From concept development to execution, every aspect is tailored to meet your specific requirements and objectives.',
      icon: Target,
      features: ['Custom Concept Development', 'Brand Integration', 'Audience Targeting', 'Personalized Experiences']
    },
    {
      id: 'culturalExperience',
      title: 'Extensive Cultural Experience',
      description: 'Access to diverse cultural experiences and global markets',
      longDescription: 'Partner with us to gain access to our extensive network of cultural ambassadors, artisans, and performers from around the world. Leverage our deep understanding of global cultures to create authentic and engaging experiences for your audience.',
      icon: Globe,
      features: ['Global Cultural Network', 'Authentic Experiences', 'Cultural Expertise', 'Market Access']
    },
    {
      id: 'uniqueVision',
      title: 'Unique Vision',
      description: 'Be part of a unique vision that brings the world to Saudi Arabia',
      longDescription: 'Join us in our mission to create the most spectacular carnival experience in the region. Our unique vision combines global cultural diversity with local authenticity, creating an unparalleled platform for cultural exchange and entertainment.',
      icon: Star,
      features: ['Innovative Concept', 'Regional Leadership', 'Cultural Innovation', 'Visionary Approach']
    },
    {
      id: 'endToEnd',
      title: 'End-to-End Services',
      description: 'Comprehensive services from planning to execution',
      longDescription: 'We provide complete end-to-end services covering every aspect of festival creation and management. From initial planning and design to final execution and post-event support, we handle everything to ensure your success.',
      icon: Zap,
      features: ['Complete Planning', 'Design & Development', 'Execution Support', 'Post-Event Services']
    },
    {
      id: 'expertOperations',
      title: 'Expert On-Site Operations',
      description: 'Professional on-site operations and management',
      longDescription: 'Our team of experienced professionals manages all on-site operations with precision and expertise. From logistics and coordination to quality control and guest experience, we ensure smooth operations throughout your event.',
      icon: Users,
      features: ['Professional Team', 'Expert Management', 'Quality Control', 'Guest Experience']
    },
    {
      id: 'strongNetwork',
      title: 'Strong Network',
      description: 'Access to our extensive network of cultural partners',
      longDescription: 'Benefit from our established network of cultural organizations, artists, vendors, and service providers from around the world. Our strong relationships ensure access to the best resources and talent for your event.',
      icon: Users,
      features: ['Cultural Organizations', 'Artist Network', 'Vendor Relationships', 'Service Providers']
    },
    {
      id: 'seamlessExecution',
      title: 'Seamless Execution',
      description: 'Smooth and professional event execution',
      longDescription: 'We pride ourselves on delivering seamless event execution with attention to every detail. Our proven processes and experienced team ensure that your event runs smoothly from start to finish.',
      icon: CheckCircle,
      features: ['Proven Processes', 'Attention to Detail', 'Professional Execution', 'Quality Assurance']
    },
    {
      id: 'guaranteedSuccess',
      title: 'Guaranteed Success',
      description: 'Proven track record and success guarantees',
      longDescription: 'Our track record of successful events and satisfied partners speaks for itself. We provide guarantees and commitments that ensure your partnership with us leads to measurable success and positive outcomes.',
      icon: Award,
      features: ['Proven Track Record', 'Success Guarantees', 'Measurable Outcomes', 'Partner Satisfaction']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Why Partner With Global Carnival Jeddah
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Join us in creating the most spectacular carnival experience in the region with our comprehensive partnership program
          </motion.p>
        </div>
      </section>

      {/* Partnership Benefits */}
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
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with Global Carnival Jeddah and how we can help you achieve your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {benefit.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partnership Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined partnership process ensures a smooth and efficient collaboration
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We begin with a comprehensive consultation to understand your goals and requirements'
                },
                {
                  step: '02',
                  title: 'Proposal Development',
                  description: 'Our team creates a customized proposal tailored to your specific needs'
                },
                {
                  step: '03',
                  title: 'Partnership Agreement',
                  description: 'We finalize the partnership terms and establish our collaborative framework'
                },
                {
                  step: '04',
                  title: 'Execution & Support',
                  description: 'We execute your project with ongoing support and communication throughout'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
