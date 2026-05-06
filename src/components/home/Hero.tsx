import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";

const Hero = () => (
  <section className="relative bg-[hsl(30_10%_6%)] text-[hsl(40_30%_92%)] overflow-hidden">
    {/* Background image — subtle factory/bottles, very dark */}
    <div className="absolute inset-0">
      <img
        src={heroBottle}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_10%_4%)] via-[hsl(30_10%_4%)/0.85] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30_10%_4%)/0.4] via-transparent to-[hsl(30_10%_4%)/0.6]" />
    </div>

    <div className="container-luxury relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[88vh] py-20">
      {/* Left — copy */}
      <div className="max-w-xl">
        <p className="label-gold mb-6 animate-fade-in">PREMIUM FRAGRANCE MANUFACTURER</p>

        <h1 className="font-serif font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6">
          <span className="block text-white">BULK PERFUME</span>
          <span className="block text-white">MANUFACTURING &amp;</span>
          <span className="block text-primary">WHOLESALE SUPPLY</span>
        </h1>

        <p className="text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
          We are a trusted perfume manufacturer and wholesaler, delivering
          high-quality fragrances in bulk for brands, distributors and private
          label businesses worldwide.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-xs tracking-[0.2em] font-semibold uppercase transition-colors"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 px-8 h-12 text-xs tracking-[0.2em] font-semibold uppercase transition-colors"
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
