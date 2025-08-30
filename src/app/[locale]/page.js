import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { HomepageTeasers } from '@/components/sections/HomepageTeasers';
import { SouksPreview } from '@/components/sections/SouksPreview';
import { HighlightsPreview } from '@/components/sections/HighlightsPreview';
import { PartnerCTA } from '@/components/sections/PartnerCTA';
import { AboutPreview } from '@/components/sections/AboutPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      {/* <Stats /> */}
      <HomepageTeasers />
      <SouksPreview />
      <HighlightsPreview />
      <PartnerCTA />
    </>
  );
}
