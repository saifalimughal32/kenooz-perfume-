import { useCountUp } from "@/hooks/useCountUp";
import { Calendar, Factory, Globe2, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Calendar, value: 15, suffix: "+", label: "Years Manufacturing" },
  { icon: Factory, value: 10, suffix: "M+", label: "Bottles Produced / Year" },
  { icon: Globe2, value: 50, suffix: "+", label: "Countries Served" },
  { icon: Package, value: 200, suffix: "+", label: "Brands Manufactured" },
];

const Item = ({ icon: Icon, value, suffix, label }: typeof stats[number]) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setStart(true)), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const v = useCountUp(value, 1800, start);
  return (
    <div ref={ref} className="flex flex-col items-center text-center px-2">
      <Icon className="h-6 w-6 text-primary mb-3" />
      <div className="font-serif text-3xl md:text-4xl text-foreground leading-none">
        <span>{v.toLocaleString()}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
        {label}
      </p>
    </div>
  );
};

const TrustBar = () => (
  <section className="border-y border-primary/20 bg-card/50 backdrop-blur-sm">
    <div className="container-luxury py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <Item key={s.label} {...s} />
      ))}
    </div>
  </section>
);

export default TrustBar;
