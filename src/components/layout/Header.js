'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn, getDirection, getOppositeLocale } from '@/lib/utils';
import Image from 'next/image';

export function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const navigation = [
    // { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('overview'), href: `/${locale}/overview` },
    { name: t('souks'), href: `/${locale}/souks` },
    // { name: t('highlights'), href: `/${locale}/highlights` },
    // { name: t('products'), href: `/${locale}/products` },
    // { name: t('food'), href: `/${locale}/food` },
    // { name: t('activities'), href: `/${locale}/activities` },
    // { name: t('partner'), href: `/${locale}/partner` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const isActive = (href) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname === href;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ',
        isScrolled ? 'bg-white/40 backdrop-blur-md shadow-lg' : 'bg-white backdrop-blur-md'
      )}
      dir={getDirection(locale)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Global Carnival Jeddah Logo"
              width={64}
              height={48}
              className="w-40 h-8 lg:w-52 lg:h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-base font-medium transition-colors hover:text-primary',
                  isActive(item.href) ? 'text-primary' : 'text-black'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Language toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative text-black">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle language menu"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {locale === 'en' ? 'EN' : 'AR'}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-1"
                  >
                    <Link
                      href={pathname.replace(`/${locale}`, '/en')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsLanguageMenuOpen(false)}
                    >
                      English
                    </Link>
                    <Link
                      href={pathname.replace(`/${locale}`, '/ar')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsLanguageMenuOpen(false)}
                    >
                      العربية
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Button className="hidden sm:inline-flex">
              {t('planVisit')}
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block px-4 py-2 text-base font-medium transition-colors hover:bg-gray-50',
                      isActive(item.href) ? 'text-primary bg-primary/10' : 'text-gray-700'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Button className="w-full">
                    {t('planVisit')}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
