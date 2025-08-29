'use client';

import Hero from "./components/01_AboveFold";
import InteractiveCircle from "./components/04_Path";
import Offerings from "./components/05_Offerings";
import UnderConstruction from '../../_allPageComponents/animations/Construction';
import JustBelowFold from './components/02_JustBelowFold';
import TextImageSplit from "../../_allPageComponents/segments/TextImageSplit";
import { prismSections } from "@/data/Landing/prismTxtimgSplit";
import LazyMount from "../../_allPageComponents/utils/LazyMount";

interface HomePageProps {
  params: Promise<{ lang: string }>; // params is now a Promise
  // params: { lang: string }; // params is now a Promise
}

// export default async function HomePage({
export default function HomePage({
  // params
}: HomePageProps) {
  // const resolvedParams = await params;
  // const dict = await getDictionary(resolvedParams.lang);
  return (
    <>
      <Hero id="hero" />
      <LazyMount><JustBelowFold id="below-fold" /></LazyMount>
      <LazyMount><InteractiveCircle /></LazyMount>
      <LazyMount><Offerings id="offerings" /></LazyMount>
      <LazyMount><TextImageSplit sectionData={prismSections[0]} /></LazyMount>
      <LazyMount><UnderConstruction /></LazyMount>

    </>
  );
}