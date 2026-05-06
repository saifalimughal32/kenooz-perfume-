import { Award, Users, UserCheck, Globe2, ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "Years of\nExperience" },
  { icon: Users, value: 5000, suffix: "+", label: "Satisfied\nClients" },
  { icon: UserCheck, value: 100, suffix: "+", label: "Skilled\nEmployees" },
  { icon: Globe2, value: 50, suffix: "+", label: "Countries\nWorldwide" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Quality\nAssurance" },
];

const StatItem = ({ icon: Icon, value, suffix, label, delay }: typeof stats[number] & { delay: number }) => {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="reveal flex flex-col items-center text-center gap-2 hover-lift" data-reveal-delay={delay}>
      <Icon className="h-8 w-8 text-primary mb-1 transition-transform duration-500 hover:rotate-12 hover:scale-110" />
      <div className="font-serif text-3xl text-foreground">
        <span ref={ref}>{v.toLocaleString()}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-[10px] tracking-[0.2em] uppercase opacity-70 whitespace-pre-line">{label}</p>
    </div>
  );
};

const Stats = () => (
  <section data-bottle="center" className="surface-light py-14 border-y border-primary/20">
    <div className="container-luxury grid grid-cols-2 md:grid-cols-5 gap-8">
      {stats.map((s, i) => (
        <StatItem key={s.label} {...s} delay={i * 90} />
      ))}
    </div>
  </section>
);

export default Stats;
