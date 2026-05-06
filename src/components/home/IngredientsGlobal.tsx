import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import lavender from "@/assets/ingredient-lavender.jpg";
import rose from "@/assets/ingredient-rose.jpg";
import oud from "@/assets/ingredient-oud.jpg";

const IngredientsGlobal = () => {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* LEFT — Naturally Sourced */}
        <div className="bg-secondary text-secondary-foreground grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <span className="text-xs tracking-[0.3em] text-primary font-medium mb-4">
              FINEST INGREDIENTS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
              Naturally Sourced
            </h2>
            <p className="text-sm md:text-base text-secondary-foreground/70 leading-relaxed mb-8 max-w-md">
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
          <div className="flex flex-row h-64 md:h-full w-full overflow-hidden">
            {[
              { src: lavender, alt: "Lavender essential oil" },
              { src: rose, alt: "Rose petals" },
              { src: oud, alt: "Oud wood chips" },
            ].map((img) => (
              <div
                key={img.alt}
                className="relative flex-1 hover:flex-[3] transition-all duration-700 ease-out overflow-hidden cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Delivering Excellence Worldwide */}
        <div className="relative bg-foreground text-background p-10 md:p-14 flex flex-col justify-center overflow-hidden min-h-[480px]">
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
            <p className="text-sm md:text-base text-background/70 leading-relaxed mb-8">
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
