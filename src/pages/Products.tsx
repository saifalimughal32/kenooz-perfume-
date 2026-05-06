import { useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import oud from "@/assets/collection-oud.jpg";
import floral from "@/assets/collection-floral.jpg";
import woody from "@/assets/collection-woody.jpg";
import fresh from "@/assets/collection-fresh.jpg";
import { cn } from "@/lib/utils";

const products = [
  { name: "Oud Royale", type: "Extrait De Parfum", category: "Oud", img: oud },
  { name: "Floral Bloom", type: "Eau De Parfum", category: "Floral", img: floral },
  { name: "Wood Intense", type: "Eau De Parfum", category: "Woody", img: woody },
  { name: "Citrus Fresh", type: "Eau De Toilette", category: "Fresh", img: fresh },
  { name: "Amber Touch", type: "Extrait De Parfum", category: "Oud", img: oud },
  { name: "Rose Elegance", type: "Eau De Parfum", category: "Floral", img: floral },
  { name: "Musk Collection", type: "Eau De Parfum", category: "Woody", img: woody },
  { name: "Aqua Pure", type: "Eau De Toilette", category: "Fresh", img: fresh },
];

const filters = ["All Collections", "Oud", "Floral", "Woody", "Fresh"];

const Products = () => {
  const [active, setActive] = useState("All Collections");
  const list = active === "All Collections" ? products : products.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <PageHeader title="Products" breadcrumb="Products" />

      <section className="py-16">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-5 py-2 text-xs tracking-[0.2em] uppercase font-semibold transition-colors border",
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground/70 border-border hover:border-primary hover:text-primary"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map((p, i) => (
              <div key={i} className="group bg-[hsl(30_10%_8%)] border border-border hover:border-primary/50 transition-colors">
                <div className="h-72 overflow-hidden">
                  <img src={p.img} loading="lazy" width={800} height={1000} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-base text-foreground mb-1">{p.name}</h3>
                  <p className="text-[11px] text-muted-foreground tracking-wider">{p.type}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10">
            Products displayed are for showcase purposes only. We do not offer direct retail sales.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Products;
