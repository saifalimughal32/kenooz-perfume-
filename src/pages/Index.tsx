import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import IntroVideo from "@/components/home/IntroVideo";
import FeatureStrip from "@/components/home/FeatureStrip";
import CapabilitiesPreview from "@/components/home/CapabilitiesPreview";
import AboutTeaser from "@/components/home/AboutTeaser";
import Process from "@/components/home/Process";
import IngredientsGlobal from "@/components/home/IngredientsGlobal";
import PartnersBar from "@/components/home/PartnersBar";
import Brands from "@/components/home/Brands";
import Ingredients from "@/components/home/Ingredients";
import WhyKenooz from "@/components/home/WhyKenooz";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import { useEffect, useState } from "react";

const Index = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("kenooz-intro-seen") !== "true";
  });

  useEffect(() => {
    document.title = "Kenooz Perfume Final | Bulk & Private Label Manufacturer UAE";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Kenooz Perfumes — UAE's trusted ISO 22716 certified perfume manufacturer. Bulk supply, private label & custom fragrance development. MOQ from 500 units. Serving 50+ countries.");
  }, []);

  const enterWebsite = () => {
    sessionStorage.setItem("kenooz-intro-seen", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroVideo onEnter={enterWebsite} />}
      <SiteLayout>
        <Hero />
        <FeatureStrip />
        <CapabilitiesPreview />
        <AboutTeaser />
        <Process />
        <PartnersBar />
        <Brands />
        <Ingredients />
        <WhyKenooz />
        <Testimonials />
        <CtaBanner />
        <IngredientsGlobal />
      </SiteLayout>
    </>
  );
};

export default Index;
