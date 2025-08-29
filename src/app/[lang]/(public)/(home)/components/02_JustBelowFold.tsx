import TextImageSplit from '../../../_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '../../../_allPageComponents/segments/Spotlight';
import { sectionsData } from '@/data/Landing/landingSpotlight';
import { mapTxtImgSplit } from '../../../../../data/mirror/mirrorTxtImgSplit';

type JustBelowFoldProps = React.ComponentPropsWithoutRef<'div'>;

export default function JustBelowFold({ className, ...rest }: JustBelowFoldProps) {
  return (
    <div className={className} {...rest}>
      <SpotlightSection sectionData={sectionsData[0]} />
      <TextImageSplit sectionData={mapTxtImgSplit[0]} />
    </div>
  );
}