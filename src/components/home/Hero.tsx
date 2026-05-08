import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBottle from "@/assets/hero-kenooz-bottle.png";

const Hero = () => (
  <section className="relative bg-black text-foreground overflow-hidden">
    {/* Full-bleed background image */}
    <div className="absolute inset-0">
      <img
        src={heroBottle}
        alt="Kenooz Extrait de Parfum luxury perfume bottle"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>

    <div className="container-luxury relative z-10 min-h-[88vh] pt-28 pb-16 md:py-20 flex items-center">
      <div className="max-w-xl">
        <p className="label-gold mb-4 md:mb-6 animate-fade-in text-[10px] sm:text-xs">
          PREMIUM FRAGRANCE MANUFACTURER
        </p>

        <h1 className="font-serif font-bold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 md:mb-6">
          <span className="block text-white">BULK PERFUME</span>
          <span className="block text-white">MANUFACTURING &amp;</span>
          <span className="block text-primary">WHOLESALE SUPPLY</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10 max-w-lg">
          We are a trusted perfume manufacturer and wholesaler, delivering
          high-quality fragrances in bulk for brands, distributors and private
          label businesses worldwide.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 h-11 sm:h-12 text-[11px] sm:text-xs tracking-[0.2em] font-semibold uppercase transition-colors"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 px-6 sm:px-8 h-11 sm:h-12 text-[11px] sm:text-xs tracking-[0.2em] font-semibold uppercase transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
