'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Facebook, Twitter, Instagram, Youtube, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn, getDirection } from '@/lib/utils';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerLinks = {
    explore: [
      { name: t('footerLinks.souks'), href: `/${locale}/souks` },
      { name: t('footerLinks.highlights'), href: `/${locale}/highlights` },
      { name: t('footerLinks.products'), href: `/${locale}/products` },
      { name: t('footerLinks.foodBeverages'), href: `/${locale}/food` },
      { name: t('footerLinks.activities'), href: `/${locale}/activities` },
    ],
    support: [
      { name: t('footerLinks.contactUs'), href: `/${locale}/contact` },
      // { name: t('footerLinks.faq'), href: `/${locale}/faq` },
      // { name: t('footerLinks.accessibility'), href: `/${locale}/accessibility` },
      // { name: t('footerLinks.safety'), href: `/${locale}/safety` },
    ],
    business: [
      { name: t('footerLinks.partnerWithUs'), href: `/${locale}/partner` },
      { name: t('footerLinks.vendorInformation'), href: `/${locale}/vendors` },
      { name: t('footerLinks.businessOpportunities'), href: `/${locale}/business` },
      { name: t('footerLinks.pressKit'), href: `/${locale}/press` },
    ],
  };

  const socialLinks = [
    { name: t('social.facebook'), icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579708906500' },
    // { name: t('social.twitter'), icon: Twitter, href: 'https://twitter.com' },
    { name: t('social.instagram'), icon: Instagram, href: 'https://www.instagram.com/global_carnival_jeddah/' },
    { name: t('social.youtube'), icon: Youtube, href: 'https://www.youtube.com/channel/UCqpbvpvH_b-9-gHRSvEvdqg' },
  ];

  return (
    <footer 
      className="bg-gray-50 text-gray-900"
      dir={getDirection(locale)}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
          <Link href={`/${locale}`} className='mb-4'>
            <Image
              src="/logo.png"
              alt="Global Carnival Jeddah Logo"
              width={150}
              height={100}
              className="object-contain mb-4"
              priority
            />
          </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              {t('brandDescription')}
            </p>
            
            {/* Event Information */}
            <div className="mb-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-gray-900">{t('eventDates')}</span>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                {t('eventInfo.dates')}
              </p>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-700 text-sm">
                  {t('eventInfo.location')}
                </span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">{t('newsletter.title')}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                {t('newsletter.description')}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  required
                />
                <Button type="submit" size="sm">
                  {t('newsletter.subscribe')}
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">{t('explore')}</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Support & Business */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">{t('support')}</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Business</h3>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('contactInformation')}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 text-sm">
                    {t('eventInfo.location')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 text-sm">
                    {t('contact.phone')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 text-sm">
                    {t('contact.email')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 text-sm">
                    {t('contact.hours')}
                  </span>
                </div>
                
                {/* Additional Contact Numbers */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Team</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-gray-700 text-sm">
                        Anil: +971 50 354 5972
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-gray-700 text-sm">
                        +966 53 857 8872
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-gray-700 text-sm">
                        Rinu: +971 50 275 5860
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-gray-700 text-sm">
                        Himanshu: +971 55 413 7686
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('socialHeader')}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-end space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              {t('copyright')}
            </p>
            
            {/* Organized by Section */}
            <div className="flex flex-col items-end">
              <p className="text-gray-600 text-sm">Organized by</p>
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
                  height={100}
                  className="object-contain"
                />
              </a>
            </div>
            
            {/* <div className="flex space-x-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white transition-colors">
                {t('links.privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-white transition-colors">
                {t('links.terms')}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
