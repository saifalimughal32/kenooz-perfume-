import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import Process from "@/components/home/Process";
import CertificationsWall from "@/components/home/CertificationsWall";
import { Button } from "@/components/ui/button";
import { Check, Factory, FlaskConical, Warehouse, Shield, Users, Beaker, ArrowRight } from "lucide-react";
import factory1 from "@/assets/factory-1.jpg";
import factory2 from "@/assets/factory-2.jpg";
import factory3 from "@/assets/factory-3.jpg";

const stats = [
  { icon: Factory, value: "8", label: "Filling Lines" },
  { icon: FlaskConical, value: "500+", label: "Fragrance Library" },
  { icon: Users, value: "12", label: "In-House Perfumers" },
  { icon: Warehouse, value: "40,000", label: "Sq Ft Facility" },
];

const capabilities = [
  "Automated high-speed filling lines (up to 60 bottles/min)",
  "Precision blending & maturation tanks (500L–5,000L)",
  "In-house R&D & fragrance creation lab",
  "Crimping, capping, labelling & cellophane wrapping",
  "Climate-controlled raw material storage",
  "Full QC laboratory — chromatography, microbiology",
];

const qcSteps = [
  { title: "Raw Material Inspection", desc: "Every incoming oil, base & component tested for purity and conformity." },
  { title: "In-Process Control", desc: "Continuous sampling during blending, maturation and filling." },
  { title: "Final Product Testing", desc: "Sensory, stability, microbial and packaging integrity checks before release." },
  { title: "Batch Documentation", desc: "Full traceability — every bottle linked to a complete batch record." },
];

const Manufacturing = () => {
  useEffect(() => {
    document.title = "Perfume Manufacturing Facility UAE | ISO 22716 GMP | Kenooz";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Inside Kenooz: 40,000 sq ft ISO 22716 GMP perfume manufacturing facility in the UAE. 8 filling lines, 500+ fragrance library, 10M+ bottles/year capacity.");
  }, []);

  return (
    <SiteLayout>
      <PageHeader title="Manufacturing & Capabilities" breadcrumb="Manufacturing" />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container-luxury grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-gold mb-4">Inside Our Facility</p>
            <h2 className="heading-section mb-6 text-foreground">
              40,000 Sq Ft of Precision Perfumery
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6">
              Our UAE facility runs to ISO 22716 cosmetic GMP standards. From raw oil intake
              through blending, filling, packaging and dispatch — every step happens under one
              roof, monitored by our in-house QC laboratory.
            </p>
            <ul className="space-y-3 mb-8">
              {capabilities.map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground/85">
                  <span className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-7 tracking-wider text-xs font-semibold h-11">
              <Link to="/contact">
                BOOK A FACTORY VISIT <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img src={factory1} loading="lazy" alt="Kenooz manufacturing facility" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 surface-light border-y border-primary/20">
        <div className="container-luxury grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-7 w-7 text-primary mx-auto mb-3" />
              <div className="font-serif text-3xl md:text-4xl text-surface-light-foreground">{s.value}</div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-20 bg-background">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="label-gold mb-3">A Look Inside</p>
            <h2 className="heading-section text-foreground">From Lab to Loading Bay</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: factory2, label: "R&D Laboratory" },
              { src: factory3, label: "Filling Line" },
              { src: factory1, label: "Quality Control" },
            ].map((p) => (
              <div key={p.label} className="relative group overflow-hidden">
                <img src={p.src} loading="lazy" alt={p.label} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">Facility</p>
                  <h3 className="font-serif text-xl text-white">{p.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC */}
      <section className="py-20 surface-light">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="label-gold mb-3">Quality Assurance</p>
            <h2 className="heading-section text-surface-light-foreground">Four-Stage Quality Control</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {qcSteps.map((q, i) => (
              <div key={q.title} className="p-6 bg-background border border-border hover:border-primary transition-colors">
                <Shield className="h-6 w-6 text-primary mb-3" />
                <p className="font-serif text-2xl text-primary mb-1">0{i + 1}</p>
                <h4 className="font-serif text-lg text-foreground mb-2">{q.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationsWall />

      <Process />

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-luxury text-center max-w-2xl">
          <Beaker className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="heading-section text-foreground mb-5">See It For Yourself</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Schedule an on-site or virtual factory tour. We'll walk you through our facility, lab and processes.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 tracking-wider text-xs font-semibold h-12">
            <Link to="/contact">
              REQUEST A FACTORY TOUR <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Manufacturing;
