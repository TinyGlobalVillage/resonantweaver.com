import TextImageSplit from '@/src/app/_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '@/src/app/_allPageComponents/segments/Spotlight';
import { sectionsData } from '@/src/data/Landing/landing-spotlight';
import { mapTxtImgSplit } from '@/src/data/Map/map-TxtImgSplit';

export default function JustBelowFold() {
  return (
    <>
      <SpotlightSection sectionData={sectionsData[0]} />
      <TextImageSplit sectionData={mapTxtImgSplit[0]} />
      {}
    </>
  );
}
