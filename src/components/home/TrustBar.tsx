import { useCountUp } from "@/hooks/useCountUp";
import { Calendar, Factory, Globe2, Package } from "lucide-react";

const stats = [
  { icon: Calendar, value: 15, suffix: "+", label: "Years Manufacturing" },
  { icon: Factory, value: 10, suffix: "M+", label: "Bottles Produced / Year" },
  { icon: Globe2, value: 50, suffix: "+", label: "Countries Served" },
  { icon: Package, value: 200, suffix: "+", label: "Brands Manufactured" },
];

const Item = ({ icon: Icon, value, suffix, label }: typeof stats[number]) => {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="flex flex-col items-center text-center px-2">
      <Icon className="h-6 w-6 text-primary mb-3" />
      <div className="font-serif text-3xl md:text-4xl text-foreground leading-none">
        <span ref={ref}>{v.toLocaleString()}</span>
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
