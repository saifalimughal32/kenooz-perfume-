import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ShieldCheck, Award, BadgeCheck, MapPin } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";

const trustBadges = [
  { icon: ShieldCheck, label: "ISO 22716 GMP" },
  { icon: Award, label: "IFRA Compliant" },
  { icon: BadgeCheck, label: "Halal Certified" },
  { icon: MapPin, label: "Made in UAE" },
];

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={heroBottle}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
    <img
      src={heroBottle}
      alt="Premium luxury perfume bottle with gold cap"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />

    {/* Ambient layers */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
    <div className="absolute inset-0 ambient-grid opacity-60 pointer-events-none" />

    <div className="container-luxury relative z-10 py-24">
      <div className="max-w-2xl">
        <div className="line-mask mb-6">
          <div className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span className="block w-9 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="label-gold">UAE's Trusted Perfume Manufacturer</span>
          </div>
        </div>

        <h1 className="heading-display text-foreground mb-6">
          <span className="line-mask">
            <span className="block animate-slide-up" style={{ animationDelay: "0.35s" }}>
              Your Trusted
            </span>
          </span>
          <span className="line-mask">
            <span className="block animate-slide-up text-primary" style={{ animationDelay: "0.55s" }}>
              Perfume Manufacturing
            </span>
          </span>
          <span className="line-mask">
            <span className="block animate-slide-up italic text-primary-glow" style={{ animationDelay: "0.75s" }}>
              Partner in the UAE
            </span>
          </span>
        </h1>

        <div className="line-mask mb-8">
          <p
            className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed opacity-0 animate-fade-slide"
            style={{ animationDelay: "1.05s" }}
          >
            Bulk manufacturing, private label and custom fragrance development.
            <span className="text-primary font-medium"> MOQ from 500 units</span> ·
            Trusted by 200+ brands across <span className="text-primary font-medium">50+ countries</span>.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-4 mb-10 opacity-0 animate-fade-slide"
          style={{ animationDelay: "1.25s" }}
        >
          <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 tracking-wider text-xs font-semibold h-12 hover-lift">
            <Link to="/contact">
              REQUEST A QUOTE
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:text-foreground rounded-none px-8 tracking-wider text-xs font-semibold h-12 bg-transparent hover-lift">
            <Link to="/private-label">
              <Download className="mr-2 h-4 w-4" />
              DOWNLOAD CATALOGUE
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="opacity-0 animate-fade-slide flex flex-wrap gap-x-5 gap-y-3" style={{ animationDelay: "1.45s" }}>
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs tracking-wider text-foreground/70">
              <Icon className="h-4 w-4 text-primary" />
              <span className="uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
