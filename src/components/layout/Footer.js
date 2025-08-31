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
      { name: 'Souks', href: `/${locale}/souks` },
      { name: 'Highlights', href: `/${locale}/highlights` },
      { name: 'Products', href: `/${locale}/products` },
      { name: 'Food & Beverages', href: `/${locale}/food` },
      { name: 'Activities', href: `/${locale}/activities` },
    ],
    support: [
      { name: 'Contact Us', href: `/${locale}/contact` },
      // { name: 'FAQ', href: `/${locale}/faq` },
      // { name: 'Accessibility', href: `/${locale}/accessibility` },
      // { name: 'Safety', href: `/${locale}/safety` },
    ],
    business: [
      { name: 'Partner With Us', href: `/${locale}/partner` },
      { name: 'Vendor Information', href: `/${locale}/vendors` },
      { name: 'Business Opportunities', href: `/${locale}/business` },
      { name: 'Press Kit', href: `/${locale}/press` },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ];

  return (
    <footer 
      className="bg-gray-900 text-white"
      dir={getDirection(locale)}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
          <Link href={`/${locale}`} className="flex items-center space-x-2 bg-white rounded-lg p-2 w-fit">
            <Image
              src="/logo.png"
              alt="Global Carnival Jeddah Logo"
              width={64}
              height={48}
              className="w-32 h-8 lg:w-32 lg:h-10 object-contain"
              priority
            />
          </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Facades, Shops, Pavilions, and Kiosks for Carnivals. Experience the world&apos;s cultures in one extraordinary destination.
            </p>
            
            {/* Event Information */}
            <div className="mb-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-white">Event Dates</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                {t('eventInfo.dates')}
              </p>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-300 text-sm">
                  {t('eventInfo.location')}
                </span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">{t('newsletter.title')}</h3>
              <p className="text-gray-300 mb-4 text-sm">
                {t('newsletter.description')}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button type="submit" size="sm">
                  {t('newsletter.subscribe')}
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
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
          </div>

          {/* Support & Business */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
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
            
            {/* <h3 className="text-lg font-semibold mb-4">Business</h3>
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
            </ul> */}
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-300 text-sm">
                    {t('eventInfo.location')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-300 text-sm">
                    +966 11 234 5678
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-300 text-sm">
                    info@globalcarnivaljeddah.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-300 text-sm">
                    Open Daily: 9:00 AM - 11:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('social')}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white transition-colors">
                {t('links.privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-white transition-colors">
                {t('links.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
