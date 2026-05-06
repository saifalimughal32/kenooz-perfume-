import { Link } from "@tanstack/react-router";
import { Factory, Tag, FlaskConical, Package, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const capabilities = [
  {
    icon: Factory,
    title: "Bulk Manufacturing",
    description: "High-volume perfume production with consistent quality. MOQ from 500 units.",
    href: "/manufacturing",
  },
  {
    icon: Tag,
    title: "Private Label",
    description: "Launch your own brand. End-to-end white label & OEM solutions.",
    href: "/private-label",
  },
  {
    icon: FlaskConical,
    title: "Custom Fragrance R&D",
    description: "In-house perfumers create signature scents from your brief.",
    href: "/private-label",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Bottles, caps, boxes, labels & regulatory dossiers — all in one place.",
    href: "/manufacturing",
  },
];

const CapabilitiesPreview = () => {
  const [api, setApi] = useState<CarouselApi>();
  return (
  <section className="py-20 bg-background">
    <div className="container-luxury">
      <div className="text-center mb-14 reveal">
        <p className="label-gold mb-3">What We Offer</p>
        <h2 className="heading-section text-foreground">End-to-End B2B Capabilities</h2>
        <div className="gold-divider mt-6" />
      </div>

      {/* Card renderer */}
      {(() => {
        const Card = ({ c, i }: { c: typeof capabilities[number]; i: number }) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="h-full"
          >
            <Link
              to={c.href}
              className="group block h-full p-7 border border-border bg-card hover:border-primary transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 border border-primary/40 rounded-full flex items-center justify-center mb-5 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 flex items-center justify-between">
                  {c.title}
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </div>
            </Link>
          </motion.div>
        );

        return (
          <>
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((c, i) => (
                <Card key={c.title} c={c} i={i} />
              ))}
            </div>
            <div className="sm:hidden">
              <Carousel
                setApi={setApi}
                opts={{ align: "center", loop: true }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
              >
                <CarouselContent className="-ml-4">
                  {capabilities.map((c, i) => (
                    <CarouselItem key={c.title} className="pl-4 basis-[85%]">
                      <Card c={c} i={i} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <CarouselDots api={api} />
            </div>
          </>
        );
      })()}
    </div>
  </section>
  );
};

export default CapabilitiesPreview;
