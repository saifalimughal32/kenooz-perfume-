import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical, Sparkles, Users, Beaker, Layers, ShieldCheck } from "lucide-react";
import factory2 from "@/assets/factory-2.jpg";

const steps = [
  { icon: Users, title: "Brand Discovery", desc: "We start by understanding your brand DNA, target audience and the emotion you want the fragrance to evoke." },
  { icon: FlaskConical, title: "Olfactive Brief", desc: "Our master perfumers translate your brief into 3–5 olfactive directions — from oriental oud to fresh aquatic." },
  { icon: Beaker, title: "Lab Development", desc: "Iterative blending sessions. Refine top, heart and base notes until the composition matches your vision." },
  { icon: Layers, title: "Stability & Compliance", desc: "IFRA-compliant formulas tested for stability, skin safety and regulatory approval in your target markets." },
  { icon: Sparkles, title: "Signature Lock", desc: "Final formula locked, named and registered exclusively to your brand — never sold to anyone else." },
  { icon: ShieldCheck, title: "Production Handoff", desc: "Scale from 100ml lab batch to 100,000+ unit production runs with full batch-to-batch consistency." },
];

const CustomFragrance = () => {
  useEffect(() => {
    document.title = "Custom Fragrance Development | Bespoke Perfume Creation | Kenooz";
    const meta = document.querySelector('meta[name="description"]') ||
      (() => { const m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); return m; })();
    meta.setAttribute("content", "Bespoke fragrance development by Kenooz master perfumers in the UAE. Exclusive scents created for your brand — from olfactive brief to production-ready formula.");
  }, []);

  return (
    <SiteLayout>
      <PageHeader title="Custom Fragrance Development" breadcrumb="Custom Fragrance" />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container-luxury grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-gold mb-4">Bespoke Perfumery</p>
            <h2 className="heading-section mb-6 text-foreground">
              A Scent Created Only For You
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6">
              Our in-house master perfumers craft exclusive fragrance compositions tailored to your
              brand story, market and audience. Every formula we develop with you is locked to your
              brand — never resold, never reproduced for anyone else.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              From the first olfactive brief to a market-ready, IFRA-compliant fragrance — typically
              8 to 14 weeks, with as many lab iterations as it takes to get the soul of the scent right.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-7 tracking-wider text-xs font-semibold h-11">
              <Link to="/contact">
                START YOUR FRAGRANCE BRIEF <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img src={factory2} loading="lazy" alt="Kenooz R&D fragrance laboratory" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 surface-light">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="label-gold mb-3">The Process</p>
            <h2 className="heading-section text-surface-light-foreground">From Brief to Bottle</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className="p-7 bg-background border border-border hover:border-primary transition-colors">
                <s.icon className="h-7 w-7 text-primary mb-4" />
                <p className="font-serif text-2xl text-primary mb-1">0{i + 1}</p>
                <h4 className="font-serif text-xl text-foreground mb-3">{s.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-luxury text-center max-w-2xl">
          <FlaskConical className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="heading-section text-foreground mb-5">Ready to Build a Signature?</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Share your brand brief — we'll respond within 48 hours with an olfactive direction and
            development timeline.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 tracking-wider text-xs font-semibold h-12">
            <Link to="/contact">
              REQUEST A CONSULTATION <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CustomFragrance;
