import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";

interface CarouselDotsProps {
  api: CarouselApi | undefined;
  className?: string;
}

export const CarouselDots = ({ api, className }: CarouselDotsProps) => {
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  if (count <= 1) return null;

  return (
    <div className={cn("flex justify-center gap-2 mt-5", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => api?.scrollTo(i)}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            i === selected
              ? "w-6 bg-primary"
              : "w-1.5 bg-primary/30 hover:bg-primary/60"
          )}
        />
      ))}
    </div>
  );
};
