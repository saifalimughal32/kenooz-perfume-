import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";

const Hero = () => (
  <section className="relative bg-background text-foreground overflow-hidden">
    {/* Background image — subtle factory/bottles */}
    <div className="absolute inset-0">
      <img
        src={heroBottle}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover opacity-30 dark:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
    </div>

    <div className="container-luxury relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center min-h-[88vh] pt-28 pb-16 md:py-20">
      {/* Left — copy */}
      <div className="max-w-xl">
        <p className="label-gold mb-4 md:mb-6 animate-fade-in text-[10px] sm:text-xs">PREMIUM FRAGRANCE MANUFACTURER</p>

        <h1 className="font-serif font-bold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 md:mb-6">
          <span className="block text-foreground">BULK PERFUME</span>
          <span className="block text-foreground">MANUFACTURING &amp;</span>
          <span className="block text-primary">WHOLESALE SUPPLY</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed mb-8 md:mb-10 max-w-lg">
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
            className="inline-flex items-center justify-center border border-foreground/40 text-foreground hover:bg-foreground/10 px-6 sm:px-8 h-11 sm:h-12 text-[11px] sm:text-xs tracking-[0.2em] font-semibold uppercase transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>

      {/* Right — bottle image */}
      <div className="relative hidden lg:block">
        <img
          src={heroBottle}
          alt="Premium luxury Kenooz perfume bottle with gold cap"
          className="w-full h-auto max-h-[640px] object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
