import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import CapabilitiesPreview from "@/components/home/CapabilitiesPreview";
import AboutTeaser from "@/components/home/AboutTeaser";
import Process from "@/components/home/Process";
import CertificationsWall from "@/components/home/CertificationsWall";
import PartnersBar from "@/components/home/PartnersBar";
import Brands from "@/components/home/Brands";
import Ingredients from "@/components/home/Ingredients";
import WhyKenooz from "@/components/home/WhyKenooz";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Perfume Manufacturer UAE | Bulk & Private Label | Kenooz Perfumes";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Kenooz Perfumes — UAE's trusted ISO 22716 certified perfume manufacturer. Bulk supply, private label & custom fragrance development. MOQ from 500 units. Serving 50+ countries.");
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <CapabilitiesPreview />
      <AboutTeaser />
      <Process />
      <CertificationsWall />
      <PartnersBar />
      <Brands />
      <Ingredients />
      <WhyKenooz />
      <Testimonials />
      <CtaBanner />
    </SiteLayout>
  );
};

export default Index;
