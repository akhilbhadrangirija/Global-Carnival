import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { HomepageTeasers } from '@/components/sections/HomepageTeasers';
import { PavilionPreview } from '@/components/sections/PavilionPreview';
import { HighlightsPreview } from '@/components/sections/HighlightsPreview';
import { PartnerCTA } from '@/components/sections/PartnerCTA';
import { AboutPreview } from '@/components/sections/AboutPreview';

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
