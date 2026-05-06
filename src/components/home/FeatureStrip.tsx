import { Factory, Award, Tag, Globe, Headphones } from "lucide-react";

const features = [
  { icon: Factory, label: "Large Scale\nProduction" },
  { icon: Award, label: "Premium\nQuality" },
  { icon: Tag, label: "Private\nLabel" },
  { icon: Globe, label: "Global\nSupply" },
  { icon: Headphones, label: "Dedicated\nSupport" },
];

const FeatureStrip = () => (
  <section className="border-y border-border bg-muted">
    <div className="container-luxury py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
      {features.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center text-center gap-3">
          <div className="h-14 w-14 border border-primary/40 rounded-full flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <p className="text-xs md:text-sm text-foreground/80 whitespace-pre-line tracking-wide">
            {label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureStrip;
