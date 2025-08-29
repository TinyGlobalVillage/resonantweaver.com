import TextImageSplit from '../../../_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '../../../_allPageComponents/segments/Spotlight';
import { sectionsData } from '@/data/Landing/landingSpotlight';
import { textContent } from '@/data/Mirror/mirrorTxtImgSplit';

type JustBelowFoldProps = React.ComponentPropsWithoutRef<'div'>;

export default function JustBelowFold({ className, ...rest }: JustBelowFoldProps) {
  return (
    <div className={className} {...rest}>
      <SpotlightSection sectionData={sectionsData[0]} />
      <TextImageSplit sectionData={textContent[0]} />
    </div>
  );
}