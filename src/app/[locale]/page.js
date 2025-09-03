import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { HomepageTeasers } from '@/components/sections/HomepageTeasers';
import { PavilionPreview } from '@/components/sections/PavilionPreview';
import { HighlightsPreview } from '@/components/sections/HighlightsPreview';
import { PartnerCTA } from '@/components/sections/PartnerCTA';
import { AboutPreview } from '@/components/sections/AboutPreview';

export const metadata = {
  title: 'Discover the World in One Place',
  description: 'Step into a world of wonder, color, and culture at Global Carnival Jeddah. Experience authentic pavilions, global cuisine, interactive activities, and cultural celebrations from around the world.',
  keywords: 'Global Carnival Jeddah, cultural festival, world cultures, pavilions, global cuisine, interactive activities, Jeddah attractions, family entertainment, cultural extravaganza, Saudi Arabia tourism',
  openGraph: {
    title: 'Discover the World in One Place | Global Carnival Jeddah',
    description: 'Step into a world of wonder, color, and culture at Global Carnival Jeddah. Experience authentic pavilions, global cuisine, interactive activities, and cultural celebrations from around the world.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Carnival Jeddah - Cultural Extravaganza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover the World in One Place | Global Carnival Jeddah',
    description: 'Step into a world of wonder, color, and culture at Global Carnival Jeddah. Experience authentic pavilions, global cuisine, interactive activities, and cultural celebrations from around the world.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <HighlightsPreview />
      <HomepageTeasers />
      <PavilionPreview />
      <PartnerCTA />
    </>
  );
}
