import TextImageSplit from '@/src/app/[lang]/_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '@/src/app/[lang]/_allPageComponents/segments/Spotlight';
import { sectionsData } from '@/src/data/landing/landingSpotlight';
import { mapTxtImgSplit } from '@/src/data/mirror/mirrorTxtImgSplit';

export default function JustBelowFold() {
  return (
    <>
      <SpotlightSection sectionData={sectionsData[0]} />
      <TextImageSplit sectionData={mapTxtImgSplit[0]} />
      {}
    </>
  );
}
