import { useEffect, useRef, useState } from "react";

/**
 * Floating white dot that follows scroll position section-by-section.
 * Sits BEHIND page content (negative z-index) so it glows through the background.
 */
const ScrollBottle = () => {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0, scale: 1 });
  const current = useRef({ x: 0, y: 0, scale: 1 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-bottle]")
    );

    const compute = () => {
      const vh = window.innerHeight;
      const mid = vh / 2;
      let active: HTMLElement | null = null;
      let activeProgress = 0;

      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const center = rect.top + rect.height / 2;
          if (
            !active ||
            Math.abs(center - mid) <
              Math.abs(
                active.getBoundingClientRect().top +
                  active.getBoundingClientRect().height / 2 -
                  mid
              )
          ) {
            active = s;
            activeProgress =
              1 - Math.min(1, Math.max(0, (rect.top + rect.height / 2) / vh));
          }
        }
      }

      if (!active) {
        setHidden(true);
        return;
      }
      setHidden(false);

      const side = (active.dataset.bottle || "right").toLowerCase();
      const vw = window.innerWidth;

      const leftX = vw * 0.15;
      const rightX = vw * 0.85;
      const centerX = vw * 0.5;

      target.current.x =
        side === "left" ? leftX : side === "center" ? centerX : rightX;
      target.current.y = vh * 0.4 + Math.sin(activeProgress * Math.PI) * 60;
      target.current.scale = side === "center" ? 1.4 : 1;
    };

    let raf = 0;
    const tick = () => {
      compute();
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * 0.06;
      c.y += (t.y - c.y) * 0.06;
      c.scale += (t.scale - c.scale) * 0.08;

      if (ref.current) {
        ref.current.style.transform = `translate3d(${c.x - 8}px, ${c.y - 8}px, 0) scale(${c.scale})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 hidden lg:block transition-opacity duration-700 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      style={{ willChange: "transform", zIndex: -1 }}
    >
      <div className="relative">
        {/* soft outer halo */}
        <div className="absolute -inset-24 rounded-full bg-[radial-gradient(circle,hsl(0_0%_100%/0.18),transparent_70%)] blur-3xl" />
        <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,hsl(0_0%_100%/0.35),transparent_70%)] blur-xl" />
        {/* the dot */}
        <div className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_30px_8px_rgba(255,255,255,0.6)]" />
      </div>
    </div>
  );
};

export default ScrollBottle;
