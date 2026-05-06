import React, { useEffect, useRef, HTMLAttributes } from "react";

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

export interface GalleryItem {
  common: string;
  binomial: string;
  description?: string;
  origin?: string;
  note?: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
  cardWidth?: number;
  cardHeight?: number;
  onItemClick?: (item: GalleryItem) => void;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 320,
      autoRotateSpeed = 0.05,
      cardWidth = 180,
      cardHeight = 240,
      onItemClick,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const isHoveringRef = useRef(false);

    const target = useRef(0);
    const current = useRef(0);
    const lastScrollAt = useRef(0);

    useEffect(() => {
      const onScroll = () => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const scrollableHeight = rect.height - window.innerHeight;
        const scrolled = -rect.top;
        const progress =
          scrollableHeight > 0
            ? Math.max(0, Math.min(1, scrolled / scrollableHeight))
            : 0;
        target.current = progress * 360;
        lastScrollAt.current = performance.now();
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      let raf = 0;
      const anglePerItem = 360 / items.length;

      const tick = () => {
        const now = performance.now();
        const idleFor = now - lastScrollAt.current;
        if (idleFor > 200 && !isHoveringRef.current) target.current += autoRotateSpeed;

        const diff = target.current - current.current;
        current.current += diff * 0.1;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(-50%, -50%, 0) rotate(${current.current}deg)`;
        }

        for (let i = 0; i < items.length; i++) {
          const card = cardRefs.current[i];
          if (!card) continue;
          const itemAngle = i * anglePerItem;
          const rel = (itemAngle + current.current + 360) % 360;
          const norm = rel > 180 ? 360 - rel : rel;

          const t = norm / 180;
          const scale = 1.05 - t * 0.35;
          const opacity = (1 - t * 0.75).toFixed(3);
          const blur = (t * 1.5).toFixed(2);

          card.style.transform = `rotate(${-current.current}deg) translate(-50%, -50%) scale(${scale})`;
          card.style.opacity = opacity;
          card.style.filter = `blur(${blur}px)`;
          card.style.zIndex = String(Math.round(100 - norm));
        }

        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [items.length, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn("relative w-full", className)}
        {...props}
      >
        <div
          ref={ringRef}
          className="absolute left-1/2 top-1/2 will-change-transform"
          style={{
            transform: "translate3d(-50%, -50%, 0)",
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            return (
              <div
                key={item.common}
                className="absolute left-0 top-0"
                style={{
                  transform: `rotate(${itemAngle}deg) translateY(-${radius}px)`,
                }}
              >
                <button
                  ref={(el) => { cardRefs.current[i] = el; }}
                  type="button"
                  aria-label={`View details for ${item.common}`}
                  onMouseEnter={() => (isHoveringRef.current = true)}
                  onMouseLeave={() => (isHoveringRef.current = false)}
                  onFocus={() => (isHoveringRef.current = true)}
                  onBlur={() => (isHoveringRef.current = false)}
                  onClick={() => onItemClick?.(item)}
                  className="relative rounded-xl overflow-hidden border border-primary/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] will-change-transform group cursor-pointer block p-0 text-left focus:outline-none focus:ring-2 focus:ring-primary/70"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transformOrigin: "center center",
                  }}
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
                      Ingredient
                    </p>
                    <h3 className="font-serif text-xl leading-tight">{item.common}</h3>
                    <p className="italic text-xs opacity-70 mt-0.5">{item.binomial}</p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
