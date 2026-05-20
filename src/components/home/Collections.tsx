import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import oud from "@/assets/collection-oud.jpg";
import floral from "@/assets/collection-floral.jpg";
import woody from "@/assets/collection-woody.jpg";
import fresh from "@/assets/collection-fresh.jpg";

const collections = [
  { img: oud, name: "Oud Collection", desc: "Rich, intense and long-lasting oud-based fragrances." },
  { img: floral, name: "Floral Collection", desc: "Elegant & refreshing floral fragrances for every mood." },
  { img: woody, name: "Woody Collection", desc: "Warm, masculine and sophisticated woody notes." },
  { img: fresh, name: "Fresh Collection", desc: "Light, fresh and energizing scents for everyday." },
];

const Collections = () => (
  <section className="py-20 bg-background">
    <div className="container-luxury">
      <div className="text-center mb-12">
        <p className="label-gold mb-3">PREMIUM FRAGRANCE COLLECTIONS</p>
        <div className="gold-divider" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((c) => (
          <div key={c.name} className="group bg-secondary border border-border hover:border-primary/50 transition-colors rounded-[15px] overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <img src={c.img} loading="lazy" width={800} height={1000} alt={c.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">{c.name}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
              <Link to="/products" className="text-xs tracking-[0.2em] text-primary hover:text-primary-glow font-semibold">
                VIEW DETAILS →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 tracking-wider text-xs font-semibold h-11 bg-transparent">
          <Link to="/products">VIEW ALL COLLECTIONS</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Collections;
