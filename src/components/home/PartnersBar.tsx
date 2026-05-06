import { InfiniteSlider } from "@/components/ui/infinite-slider";

const partners = [
  { name: "LVMH", style: "font-serif tracking-[0.3em]" },
  { name: "GUCCI", style: "font-serif tracking-[0.4em]" },
  { name: "CHANEL", style: "font-serif tracking-[0.45em]" },
  { name: "DIOR", style: "font-serif tracking-[0.4em] italic" },
  { name: "HERMÈS", style: "font-serif tracking-[0.3em]" },
  { name: "ARMANI", style: "font-sans tracking-[0.45em] font-light" },
  { name: "VERSACE", style: "font-serif tracking-[0.35em]" },
  { name: "PRADA", style: "font-serif tracking-[0.4em] font-light" },
  { name: "BURBERRY", style: "font-serif tracking-[0.3em]" },
  { name: "ESTĒE LAUDER", style: "font-serif tracking-[0.25em]" },
  { name: "GIVENCHY", style: "font-serif tracking-[0.35em]" },
  { name: "TOM FORD", style: "font-serif tracking-[0.35em] font-light" },
  { name: "YVES SAINT LAURENT", style: "font-serif tracking-[0.2em]" },
  { name: "BVLGARI", style: "font-serif tracking-[0.4em]" },
  { name: "CARTIER", style: "font-serif tracking-[0.35em] italic" },
  { name: "MONTBLANC", style: "font-serif tracking-[0.3em]" },
];

const PartnersBar = () => (
  <section className="relative py-14 bg-background border-y border-primary/15 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

    <div className="relative container-luxury text-center mb-8">
      <p className="label-gold mb-2">Trusted Manufacturing Partner</p>
      <h2 className="font-serif text-xl md:text-2xl text-foreground">
        Crafting Fragrances for the World's Premium Houses
      </h2>
    </div>

    <div className="relative">
      <InfiniteSlider gap={64} duration={45} durationOnHover={120}>
        {partners.map((p) => (
          <div
            key={p.name}
            className={`flex items-center justify-center h-16 px-2 text-xl md:text-2xl text-foreground/70 hover:text-primary transition-colors duration-500 whitespace-nowrap ${p.style}`}
          >
            {p.name}
          </div>
        ))}
      </InfiniteSlider>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
    </div>

    <p className="relative text-center text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-6">
      Private Label & OEM Partner — names indicative of brand calibre served
    </p>
  </section>
);

export default PartnersBar;
