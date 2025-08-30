import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware({
  // A list of all locales that are supported
  locales: routing.locales,

  // Used when no locale matches
  defaultLocale: routing.defaultLocale,

  // Always use the default locale for the root path
  localePrefix: routing.localePrefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
}; 
