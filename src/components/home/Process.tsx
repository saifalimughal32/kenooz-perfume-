import { FlaskConical, Leaf, Beaker, ShieldCheck, Package, Truck } from "lucide-react";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const steps = [
  { icon: FlaskConical, n: "1", title: "Research &\nDevelopment" },
  { icon: Leaf, n: "2", title: "Raw Material\nSelection" },
  { icon: Beaker, n: "3", title: "Blending &\nProduction" },
  { icon: ShieldCheck, n: "4", title: "Quality\nTesting" },
  { icon: Package, n: "5", title: "Filling &\nPackaging" },
  { icon: Truck, n: "6", title: "Delivery" },
];

const Process = () => {
  const [api, setApi] = useState<CarouselApi>();
  return (
  <section data-bottle="right" className="surface-light pb-24 pt-4">
    <div className="container-luxury">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="label-gold mb-3">Our Manufacturing Process</p>
        <h2 className="heading-section">From Concept to Creation</h2>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
          className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px border-t border-dashed border-primary/40"
        />

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-6 gap-8 relative">
          {steps.map(({ icon: Icon, n, title }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="h-16 w-16 rounded-full bg-[hsl(var(--surface-light))] border border-primary flex items-center justify-center mb-4 relative z-10 transition-shadow duration-300 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.6)]">
                <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="text-xs font-semibold tracking-wide whitespace-pre-line">
                {n}. {title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
          >
            <CarouselContent className="-ml-4">
              {steps.map(({ icon: Icon, n, title }) => (
                <CarouselItem key={n} className="pl-4 basis-1/2">
                  <div className="flex flex-col items-center text-center py-2">
                    <div className="h-16 w-16 rounded-full bg-[hsl(var(--surface-light))] border border-primary flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-xs font-semibold tracking-wide whitespace-pre-line">
                      {n}. {title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <CarouselDots api={api} />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Process;
