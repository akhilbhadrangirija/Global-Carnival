import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { FeaturedEvents } from '@/components/sections/FeaturedEvents';
import { AttractionsOverview } from '@/components/sections/AttractionsOverview';
import { DiningPreview } from '@/components/sections/DiningPreview';
import { DirectoryPreview } from '@/components/sections/DirectoryPreview';
import { GalleryStrip } from '@/components/sections/GalleryStrip';
import { PlanYourVisit } from '@/components/sections/PlanYourVisit';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedEvents />
      <AttractionsOverview />
      <DiningPreview />
      <DirectoryPreview />
      <GalleryStrip />
      <PlanYourVisit />
    </>
  );
}
