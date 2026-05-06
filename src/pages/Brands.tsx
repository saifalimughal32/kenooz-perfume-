import { useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const brandDetails = [
  { name: "Bouquet", desc: "These perfumes evoke the sensation of being surrounded by a beautiful, lush bouquet of flowers — bright, romantic and unmistakably feminine compositions." },
  { name: "Historic", desc: "Historic perfumes refer to iconic fragrances that have made a significant impact on the world of perfumery over time, celebrating the milestones of olfactory craft." },
  { name: "Naseej", desc: "A high-end Middle Eastern perfume brand, Naseej is deeply influenced by the region's rich heritage of perfumery — woven from oud, amber and precious resins." },
  { name: "Tribute", desc: "Tribute conveys a sense of homage and reverence, often created to honor traditions, milestones and the enduring artistry behind every scent." },
  { name: "Eau-de-Perfume", desc: "EDP fragrances feature stronger sillage and better projection than lighter formulations like EDT or EDC, designed to last from morning to evening." },
  { name: "Edict", desc: "Edict is known for crafting premium scents that embody elegance, luxury and sophistication — fragrances that quietly command attention." },
  { name: "Mirsaal", desc: "Luxury fragrances associated with the Middle Eastern perfumery tradition: rich, exotic and long-lasting compositions for the connoisseur." },
  { name: "Ornament", desc: "A niche luxury house with strong emphasis on elegance, beauty and craftsmanship — every bottle a piece of wearable art." },
  { name: "Supremacy", desc: "A luxury fragrance line embodying elegance, power and sophistication — bold statements for those who lead." },
  { name: "Kiaana", desc: "Crafted with the finest ingredients, Kiaana is designed to offer rich, sophisticated scents with depth and longevity." },
];

const Brands = () => {
  useEffect(() => {
    document.title = "Our Brands — Kenooz Perfumes & Cosmetics LLC";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Discover the ten signature luxury perfume brands by Kenooz: Bouquet, Historic, Naseej, Tribute, Eau-de-Perfume, Edict, Mirsaal, Ornament, Supremacy and Kiaana.");
  }, []);

  return (
    <SiteLayout>
      <PageHeader title="Our Brands" breadcrumb="Brands" />

      <section className="py-20">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="label-gold mb-3">Luxury Perfume Brands</p>
            <h1 className="heading-section mb-4">Ten Houses Crafted by Kenooz</h1>
            <p className="text-foreground/70 leading-relaxed">
              Each brand under the Kenooz umbrella is built around a distinct olfactory identity —
              from heritage-rooted Middle Eastern oud to modern niche compositions for global audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {brandDetails.map((b) => (
              <article
                key={b.name}
                className="p-8 border border-border bg-[hsl(30_10%_6%)] hover:border-primary/60 transition-colors"
              >
                <h2 className="font-serif text-2xl text-primary mb-3">{b.name}</h2>
                <div className="h-px w-10 bg-primary/40 mb-4" />
                <p className="text-sm text-foreground/75 leading-relaxed">{b.desc}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 tracking-wider text-xs font-semibold h-12">
              <Link to="/contact">REQUEST A QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Brands;
