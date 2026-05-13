import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./CinematicFooter";
import ChatBot from "./ChatBot";
import ScrollBottle from "./ScrollBottle";
import AlSyediBadge from "./AlSyediBadge";
import IntroSplash from "@/components/IntroSplash";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  const ref = useScrollReveal<HTMLDivElement>();
  const location = useLocation();

  // Re-scan reveals on route change
  useEffect(() => {
    const t = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible)")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add("is-visible");
        });
    }, 50);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col bg-background">
      <IntroSplash />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <ChatBot />
      <AlSyediBadge />
      <ScrollBottle />
    </div>
  );
};

export default SiteLayout;
