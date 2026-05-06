import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import lavender from "@/assets/ingredient-lavender.jpg";
import rose from "@/assets/ingredient-rose.jpg";
import oud from "@/assets/ingredient-oud.jpg";

const IngredientsGlobal = () => {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — Naturally Sourced */}
        <div className="bg-[hsl(40_30%_96%)] text-[hsl(30_15%_12%)] grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <span className="text-xs tracking-[0.3em] text-primary font-medium mb-4">
              FINEST INGREDIENTS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
              Naturally Sourced
            </h2>
            <p className="text-sm md:text-base text-[hsl(30_10%_30%)] leading-relaxed mb-8 max-w-md">
              We use high-quality natural essential oils and aromatic compounds,
              sourced from the best farms around the world.
            </p>
            <Link
              to="/manufacturing"
              className="inline-flex items-center gap-2 self-start bg-primary text-primary-foreground px-6 py-3 text-xs tracking-[0.25em] font-medium hover:opacity-90 transition"
            >
              EXPLORE INGREDIENTS <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 h-64 md:h-auto">
            <img src={lavender} alt="Lavender essential oil" className="w-full h-full object-cover" />
            <img src={rose} alt="Rose petals" className="w-full h-full object-cover" />
            <img src={oud} alt="Oud wood chips" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RIGHT — Delivering Excellence Worldwide */}
        <div className="relative bg-[hsl(30_15%_8%)] text-foreground p-10 md:p-14 flex flex-col justify-center overflow-hidden min-h-[380px]">
          {/* Dotted world-map backdrop */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(var(--primary) / 0.6) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
              maskImage:
                "radial-gradient(ellipse at 75% 50%, black 0%, black 40%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 75% 50%, black 0%, black 40%, transparent 75%)",
            }}
          />
          <div className="relative max-w-md">
            <span className="text-xs tracking-[0.3em] text-primary font-medium mb-4 block">
              GLOBAL EXPORT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
              Delivering Excellence
              <br />
              Worldwide
            </h2>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-8">
              We proudly export our fragrances to clients across the globe with
              reliable logistics and flexible solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs tracking-[0.25em] font-medium hover:opacity-90 transition"
            >
              OUR GLOBAL PRESENCE <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsGlobal;
