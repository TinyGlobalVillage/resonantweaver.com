
import Hero from "@/src/app/(public)/(home)/components/02_AboveFold";
import InteractiveCircle from "@/src/app/(public)/(home)/components/04_Path";
import Offerings from "@/src/app/(public)/(home)/components/05_Offerings";
import UnderConstruction from '@/src/app/_allPageComponents/animations/Construction';
import JustBelowFold from '@/src/app/(public)/(home)/components/03_JustBelowFold';
import TextImageSplit from "../../_allPageComponents/segments/TextImageSplit";
import { prismSections } from "../../../data/Landing/prism-TxtimgSplit";

export default function Home() {
  return (
    <>
      <Hero />
      <JustBelowFold />
      <InteractiveCircle />
      <Offerings />
      <TextImageSplit sectionData={prismSections[0]} />
      <UnderConstruction />

    </>
  );
}