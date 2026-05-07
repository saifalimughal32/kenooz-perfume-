import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

export const brands = [
  { name: "Bouquet", tagline: "Lush floral compositions evoking a garden in bloom." },
  { name: "Historic", tagline: "Iconic fragrances honoring perfumery's defining moments." },
  { name: "Naseej", tagline: "Middle Eastern luxury rooted in regional heritage." },
  { name: "Tribute", tagline: "Refined homage to tradition and timeless craft." },
  { name: "Eau-de-Perfume", tagline: "Strong sillage and superior projection that lasts." },
  { name: "Edict", tagline: "Premium scents embodying elegance and sophistication." },
  { name: "Mirsaal", tagline: "Rich, exotic, long-lasting Middle Eastern luxury." },
  { name: "Ornament", tagline: "Niche craftsmanship with a focus on beauty and detail." },
  { name: "Supremacy", tagline: "Power, elegance and unmistakable sophistication." },
  { name: "Kiaana", tagline: "Finest ingredients crafted into rich, sophisticated scents." },
];

const Brands = () => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplay = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section data-bottle="right" className="py-20 bg-background overflow-hidden">
      <div className="container-luxury">
        <div className="text-center mb-12 reveal">
          <p className="label-gold mb-3">Our Luxury Perfume Brands</p>
          <h2 className="heading-section">Ten Signature Houses, One Legacy</h2>
          <div className="gold-divider mt-6" />
        </div>

        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            setApi={setApi}
            className="px-2"
          >
            <CarouselContent className="-ml-3">
              {brands.map((b) => (
                <CarouselItem
                  key={b.name}
                  className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="group p-6 border border-border bg-card hover:border-primary hover:-translate-y-1 transition-all duration-300 text-center h-full">
                    <h3 className="font-serif text-lg text-primary mb-2">{b.name}</h3>
                    <div className="h-px w-8 bg-primary/40 mx-auto mb-3 group-hover:w-12 transition-all" />
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {b.tagline}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
          <CarouselDots api={api} className="md:hidden" />
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 tracking-wider text-xs font-semibold h-11 bg-transparent"
          >
            <Link to="/brands">VIEW ALL BRANDS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
