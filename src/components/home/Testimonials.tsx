"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { SparklesCore as Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const testimonials = [
  {
    text: "Kenooz transformed our private label idea into a fully realized luxury brand. Their R&D team nailed our oud blend on the second iteration — exceptional quality and turnaround.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    name: "Ahmed Al-Mansoori",
    role: "Founder, Noor Fragrances",
  },
  {
    text: "We've worked with several manufacturers across Europe and the Middle East. Kenooz consistently delivers unmatched consistency, batch after batch, on time, every time.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    name: "Sophia Laurent",
    role: "Head of Procurement, Maison Élise",
  },
  {
    text: "From bottle design to global shipping, the entire process was seamless. Their MOQ flexibility helped us launch in three markets simultaneously.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    name: "Rajesh Kapoor",
    role: "CEO, Aroma Distributors",
  },
  {
    text: "The R&D lab understood our brief perfectly. The final fragrance captured exactly the emotion we wanted to convey to our customers.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    name: "Layla Hassan",
    role: "Creative Director, Velvet",
    },
  {
    text: "Their packaging team delivered bottles that look like art objects. Our retail partners noticed the quality immediately.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    name: "Marco Bianchi",
    role: "Brand Manager, Aurélie",
  },
  {
    text: "Reliable, transparent, and genuinely passionate about perfumery. Kenooz feels like an extension of our own team.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces",
    name: "Khalid Al-Sabah",
    role: "Founder, Royal Attar",
  },
  {
    text: "From sample to scale-up, every milestone was met ahead of schedule. We've expanded our SKU range with full confidence.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    name: "Isabella Romano",
    role: "Operations Lead, Essence Lab",
  },
  {
    text: "Their global logistics network simplified what could have been a nightmare. We launched across 5 markets without a hitch.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop&crop=faces",
    name: "Daniel Park",
    role: "Export Manager, Mirage",
  },
  {
    text: "Beautiful blends, fair pricing, and an obsession with detail. Kenooz raised the bar for our entire fragrance category.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    name: "Amira Saleh",
    role: "Buyer, Oasis Dubai",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const brands: { name: string; tagline: string; style: string }[] = [
  { name: "NOOR", tagline: "PARIS · DUBAI", style: "font-serif tracking-[0.4em]" },
  { name: "Maison Élise", tagline: "EST. 2014", style: "font-serif italic tracking-wide text-2xl" },
  { name: "AROMA", tagline: "FRAGRANCE HOUSE", style: "font-sans font-bold tracking-[0.5em]" },
  { name: "Aurélie", tagline: "PARFUMS DE LUXE", style: "font-serif italic text-2xl" },
  { name: "OASIS", tagline: "DUBAI · 1998", style: "font-serif tracking-[0.45em]" },
  { name: "LUNA & CO.", tagline: "MILANO", style: "font-sans tracking-[0.35em]" },
  { name: "ROYAL ATTAR", tagline: "ARABIA", style: "font-serif tracking-[0.3em]" },
  { name: "VELVET", tagline: "NEW YORK", style: "font-sans font-light tracking-[0.55em]" },
  { name: "Essence Lab", tagline: "MAISON DE PARFUM", style: "font-serif italic text-2xl" },
  { name: "MIRAGE", tagline: "MARRAKECH", style: "font-sans font-bold tracking-[0.5em]" },
  { name: "Sahara Bloom", tagline: "ATTAR ARTISANS", style: "font-serif italic text-2xl" },
  { name: "AMBRÉ", tagline: "PARIS", style: "font-serif tracking-[0.5em]" },
];

const Testimonials = () => (
  <section className="py-20 bg-background relative">
    <div className="container-luxury z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-14"
      >
        <p className="label-gold mb-3">Trusted by Brands Worldwide</p>
        <h2 className="heading-section text-foreground">What Our Clients Say</h2>
        <div className="gold-divider mt-6" />
      </motion.div>

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden mb-20">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>

      {/* Brand logo marquee with sparkles backdrop */}
      <div className="relative mt-20">
        <p className="label-gold text-center mb-10">Brands We've Manufactured For</p>

        <div className="relative h-44 w-full overflow-hidden">
          {/* sparkles backdrop */}
          <Sparkles
           
           
           
            className="absolute inset-0 h-full w-full [mask-image:radial-gradient(60%_60%,white,transparent)]"
           
          />
          {/* glow ring */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* scrolling logos */}
          <div className="absolute inset-y-0 inset-x-0 flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <InfiniteSlider gap={32} duration={45} className="w-full">
              {brands.map((b) => (
                <div
                  key={b.name}
                  className="flex flex-col h-20 min-w-[220px] items-center justify-center px-8 border border-border bg-card/80 backdrop-blur-sm hover:border-primary/70 hover:bg-card transition-colors group"
                >
                  <span className={`${b.style} text-foreground group-hover:text-primary transition-colors whitespace-nowrap leading-none`}>
                    {b.name}
                  </span>
                  <span className="mt-2 text-[9px] tracking-[0.3em] text-muted-foreground whitespace-nowrap">
                    {b.tagline}
                  </span>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
