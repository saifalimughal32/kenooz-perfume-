import { Factory, Award, Tag, Globe, Headphones } from "lucide-react";

const features = [
  { icon: Factory, label: "LARGE SCALE\nPRODUCTION" },
  { icon: Award, label: "PREMIUM\nQUALITY" },
  { icon: Tag, label: "PRIVATE LABEL\nSOLUTIONS" },
  { icon: Globe, label: "GLOBAL\nSUPPLY" },
  { icon: Headphones, label: "DEDICATED\nSUPPORT" },
];

const FeatureStrip = () => (
  <section className="bg-background border-y border-primary/15">
    <div className="container-luxury py-10 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8 divide-x divide-primary/15">
      {features.map(({ icon: Icon, label }, i) => (
        <div
          key={label}
          className={`flex flex-col items-center text-center gap-3 px-4 ${i === 0 ? "border-l-0" : ""}`}
        >
          <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
          <p className="text-[11px] md:text-xs text-foreground/85 whitespace-pre-line tracking-[0.15em] font-medium leading-tight">
            {label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureStrip;
