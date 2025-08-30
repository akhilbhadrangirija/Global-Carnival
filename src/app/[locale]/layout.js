import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default async function LocaleLayout({ children, params: { locale } }) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      {/* <main> */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
