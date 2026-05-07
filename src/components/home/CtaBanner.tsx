import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBottle from "@/assets/hero-bottle.jpg";

const CtaBanner = () => (
  <section data-bottle="center" className="relative py-20 overflow-hidden">
    <img src={heroBottle} loading="lazy" width={1920} height={600} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/85" />
    {/* Expanding rings */}
    <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-ring-expand" />
    <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-ring-expand" style={{ animationDelay: "-3.5s" }} />
    <div className="container-luxury relative text-center reveal">
      <h2 className="heading-section mb-4">
        <span className="text-primary">Looking for a Reliable</span> Perfume Supplier?
      </h2>
      <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
        Partner with Kenooz to build and scale your fragrance business with confidence.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 tracking-wider text-xs font-semibold h-12 hover-lift">
        <Link to="/contact">REQUEST A QUOTE NOW</Link>
      </Button>
    </div>
  </section>
);

export default CtaBanner;
