import { useState } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import oudImg from "@/assets/ingredient-oud.jpg";
import lavenderImg from "@/assets/ingredient-lavender.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type GalleryItem = {
  common: string;
  binomial: string;
  description?: string;
  origin?: string;
  note?: string;
  photo: { url: string; text: string; pos?: string; by: string };
};

const ingredients: GalleryItem[] = [
  {
    common: "Bulgarian Rose",
    binomial: "Rosa damascena",
    origin: "Rose Valley, Bulgaria",
    note: "Heart Note",
    description:
      "Hand-picked at dawn from the Valley of Roses, Bulgarian rose absolute is one of the most precious materials in perfumery — over 3,000 petals yield a single gram of oil.",
    photo: {
      url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=900&auto=format&fit=crop&q=80",
      text: "Damask rose petals in bloom",
      pos: "50% 50%",
      by: "Annie Spratt",
    },
  },
  {
    common: "Oud Wood",
    binomial: "Aquilaria malaccensis",
    origin: "Cambodia & Assam",
    note: "Base Note",
    description:
      "Aged agarwood resin — the legendary 'liquid gold' of the Middle East. Smoky, animalic and deeply spiritual, oud lends our compositions their unmistakable signature.",
    photo: {
      url: oudImg,
      text: "Aged agarwood chips",
      by: "Kenooz",
    },
  },
  {
    common: "Lavender",
    binomial: "Lavandula angustifolia",
    origin: "Provence, France",
    note: "Top Note",
    description:
      "Sun-drenched lavender from Haute-Provence — clean, herbaceous and softly floral. A timeless aromatic that brings calm and clarity to fougère compositions.",
    photo: {
      url: lavenderImg,
      text: "Lavender field in Provence",
      pos: "50% 60%",
      by: "Kenooz",
    },
  },
  {
    common: "Sandalwood",
    binomial: "Santalum album",
    origin: "Mysore, India",
    note: "Base Note",
    description:
      "Creamy, milky and meditative — Mysore sandalwood is sustainably sourced and matured for years to develop its signature buttery softness and lasting depth.",
    photo: {
      url: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=900&auto=format&fit=crop&q=80",
      text: "Sandalwood timber",
      by: "Unsplash",
    },
  },
  {
    common: "Jasmine",
    binomial: "Jasminum sambac",
    origin: "Tamil Nadu, India",
    note: "Heart Note",
    description:
      "Night-harvested jasmine sambac — intensely indolic, narcotic and luminous. The queen of white florals, layered into our most romantic accords.",
    photo: {
      url: "https://images.unsplash.com/photo-1592978293352-9afac645d18a?w=900&auto=format&fit=crop&q=80",
      text: "White jasmine flowers",
      by: "Unsplash",
    },
  },
  {
    common: "Saffron",
    binomial: "Crocus sativus",
    origin: "Khorasan, Iran",
    note: "Heart Note",
    description:
      "Hand-collected saffron threads — leathery, honeyed and subtly metallic. A precious spice that adds warmth and oriental opulence to our oud compositions.",
    photo: {
      url: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=900&auto=format&fit=crop&q=80",
      text: "Saffron threads",
      by: "Unsplash",
    },
  },
  {
    common: "Vanilla",
    binomial: "Vanilla planifolia",
    origin: "Madagascar",
    note: "Base Note",
    description:
      "Cured Bourbon vanilla pods from Madagascar — sweet, balsamic and gourmand. The comforting backbone of countless modern luxury fragrances.",
    photo: {
      url: "https://images.unsplash.com/photo-1611070960314-d96d33b9c08a?w=900&auto=format&fit=crop&q=80",
      text: "Vanilla pods",
      by: "Unsplash",
    },
  },
  {
    common: "Bergamot",
    binomial: "Citrus bergamia",
    origin: "Calabria, Italy",
    note: "Top Note",
    description:
      "Cold-pressed bergamot peel from Calabria — sparkling, slightly bitter and elegantly green. The brightest opening note in the perfumer's palette.",
    photo: {
      url: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=900&auto=format&fit=crop&q=80",
      text: "Citrus bergamot fruit",
      by: "Unsplash",
    },
  },
  {
    common: "Frankincense",
    binomial: "Boswellia sacra",
    origin: "Dhofar, Oman",
    note: "Base Note",
    description:
      "Sacred resin tapped by hand from wild Boswellia trees — smoky, lemony and ethereal. A spiritual ingredient woven through millennia of Arabian perfumery.",
    photo: {
      url: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=900&auto=format&fit=crop&q=80",
      text: "Frankincense resin",
      by: "Unsplash",
    },
  },
  {
    common: "Musk Ambrette",
    binomial: "Hibiscus abelmoschus",
    origin: "Tropical Asia",
    note: "Base Note",
    description:
      "A botanical musk extracted from ambrette seeds — soft, skin-like and pear-tinged. Our cruelty-free alternative to animal musks.",
    photo: {
      url: "https://images.unsplash.com/photo-1599685315640-4a8f483e9819?w=900&auto=format&fit=crop&q=80",
      text: "Amber resin and seeds",
      by: "Unsplash",
    },
  },
  {
    common: "Patchouli",
    binomial: "Pogostemon cablin",
    origin: "Sulawesi, Indonesia",
    note: "Base Note",
    description:
      "Steam-distilled, long-aged patchouli — earthy, woody and slightly sweet. Adds depth and a magnetic, sensual trail to our chypres and orientals.",
    photo: {
      url: "https://images.unsplash.com/photo-1603001120155-0e3a8b2cb2a1?w=900&auto=format&fit=crop&q=80",
      text: "Dried patchouli leaves",
      by: "Unsplash",
    },
  },
  {
    common: "Cedarwood",
    binomial: "Cedrus atlantica",
    origin: "Atlas Mountains, Morocco",
    note: "Base Note",
    description:
      "Atlas cedar essence — dry, pencil-shaving woody with a soft balsamic warmth. A clean, masculine wood that lends spine to modern compositions.",
    photo: {
      url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=900&auto=format&fit=crop&q=80",
      text: "Atlas cedar bark",
      by: "Geran de Klerk",
    },
  },
];

const Ingredients = () => {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.10),transparent_65%)]" />

      <div className="relative container mx-auto px-4 text-center mb-12">
        <p className="label-gold mb-3">Explore Ingredients</p>
        <h2 className="heading-section text-foreground text-2xl md:text-4xl lg:text-5xl">
          Finest Ingredients, Naturally Sourced
        </h2>
        <div className="gold-divider mt-4 mx-auto" />
        <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-xl mx-auto">
          Tap any ingredient to discover its story.
        </p>
      </div>

      <div className="relative">
        <InfiniteSlider gap={24} duration={50} durationOnHover={120}>
          {ingredients.map((item) => (
            <button
              key={item.common}
              type="button"
              onClick={() => setActive(item)}
              aria-label={`View details for ${item.common}`}
              className="relative w-[200px] h-[280px] md:w-[240px] md:h-[320px] rounded-xl overflow-hidden border border-primary/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] group cursor-pointer block p-0 text-left focus:outline-none focus:ring-2 focus:ring-primary/70 transition-transform duration-500 hover:scale-[1.04]"
            >
              <img
                src={item.photo.url}
                alt={item.photo.text}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{ objectPosition: item.photo.pos || "center" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/60 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-[10px] tracking-[0.25em] uppercase text-primary/90 mb-1">
                  {item.note || "Ingredient"}
                </p>
                <h3 className="font-serif text-xl leading-tight">{item.common}</h3>
                <p className="italic text-xs opacity-70 mt-0.5">{item.binomial}</p>
              </div>
            </button>
          ))}
        </InfiniteSlider>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-primary/30">
          {active && (
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[320px]">
                <img
                  src={active.photo.url}
                  alt={active.photo.text}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: active.photo.pos || "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/30 to-transparent" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <DialogHeader className="text-left space-y-2">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-primary">
                    Ingredient
                  </p>
                  <DialogTitle className="font-serif text-3xl text-foreground leading-tight">
                    {active.common}
                  </DialogTitle>
                  <p className="italic text-sm text-muted-foreground">
                    {active.binomial}
                  </p>
                </DialogHeader>
                <div className="gold-divider my-5" />
                <DialogDescription className="text-sm leading-relaxed text-foreground/80">
                  {active.description}
                </DialogDescription>
                <div className="flex flex-wrap gap-2 mt-6">
                  {active.origin && (
                    <span className="text-[11px] tracking-wider uppercase px-3 py-1.5 border border-primary/40 text-primary rounded-full">
                      {active.origin}
                    </span>
                  )}
                  {active.note && (
                    <span className="text-[11px] tracking-wider uppercase px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                      {active.note}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Ingredients;
