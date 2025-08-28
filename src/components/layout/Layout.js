import { useLocale } from 'next-intl';
import { Header } from './Header';
import { Footer } from './Footer';
import { getDirection } from '@/lib/utils';

export function Layout({ children }) {
  const locale = useLocale();
  
  return (
    <div dir={getDirection(locale)}>
      <Header />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
