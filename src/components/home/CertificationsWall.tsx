import { ShieldCheck, Award, BadgeCheck, Leaf, Heart, FileCheck, Globe } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const certs = [
  { icon: ShieldCheck, name: "ISO 22716", sub: "Cosmetic GMP" },
  { icon: Award, name: "ISO 9001", sub: "Quality Management" },
  { icon: FileCheck, name: "IFRA", sub: "Compliant" },
  { icon: BadgeCheck, name: "Halal", sub: "Certified" },
  { icon: Leaf, name: "Vegan", sub: "Friendly" },
  { icon: Heart, name: "Cruelty-Free", sub: "100%" },
  { icon: Globe, name: "Dubai Trade", sub: "Licensed" },
];

const CertificationsWall = () => {
  const [api, setApi] = useState<CarouselApi>();
  return (
  <section className="py-16 surface-light border-y border-primary/15">
    <div className="container-luxury">
      <div className="text-center mb-10">
        <p className="label-gold mb-2">Certifications & Compliance</p>
        <h2 className="font-serif text-2xl md:text-3xl text-surface-light-foreground">
          Built on International Standards
        </h2>
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:grid grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
        {certs.map(({ icon: Icon, name, sub }) => (
          <div
            key={name}
            className="flex flex-col items-center text-center p-4 border border-primary/20 bg-background/40 hover:border-primary hover:bg-background/70 transition-all duration-300 group"
          >
            <Icon className="h-7 w-7 text-primary mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-xs font-semibold text-foreground tracking-wide leading-tight">
              {name}
            </p>
            <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
              {sub}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="sm:hidden">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2200, stopOnInteraction: false })]}
        >
          <CarouselContent className="-ml-3">
            {certs.map(({ icon: Icon, name, sub }) => (
              <CarouselItem key={name} className="pl-3 basis-1/3">
                <div className="flex flex-col items-center text-center p-3 border border-primary/20 bg-background/40 h-full">
                  <Icon className="h-6 w-6 text-primary mb-2" />
                  <p className="text-[11px] font-semibold text-foreground tracking-wide leading-tight">
                    {name}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    {sub}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <CarouselDots api={api} />
      </div>
    </div>
  </section>
  );
};

export default CertificationsWall;
