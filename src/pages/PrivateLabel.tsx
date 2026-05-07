import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Beaker, Sparkles, Crown, FileText, Package2, Palette } from "lucide-react";
import { motion } from "motion/react";
import factory1 from "@/assets/factory-1.jpg";

const tiers = [
  {
    icon: Sparkles,
    name: "Standard White Label",
    moq: "5,000 units",
    leadTime: "30–45 days",
    description: "Choose from our existing fragrance library and bottle range. Apply your brand label and launch fast.",
    features: [
      "100+ ready fragrance compositions",
      "Stock bottles & packaging",
      "Custom label & box printing",
      "Regulatory documentation",
    ],
    highlight: false,
  },
  {
    icon: Crown,
    name: "Custom Private Label",
    moq: "10,000 units",
    leadTime: "60–75 days",
    description: "Customise an existing fragrance, choose bespoke bottles, design unique packaging — your full brand identity.",
    features: [
      "Modified or unique fragrance blend",
      "Custom bottle, cap & box design",
      "Brand identity development",
      "Full regulatory dossier",
      "Sample iterations included",
    ],
    highlight: true,
  },
  {
    icon: Beaker,
    name: "Full Bespoke Development",
    moq: "40,000 units (no upper limit)",
    leadTime: "90–120 days",
    description: "Brief our perfumers from scratch. Develop a signature fragrance and complete brand world unique to you. Scale as high as you need — no maximum.",
    features: [
      "From-scratch fragrance creation",
      "Dedicated perfumer team",
      "Bespoke bottle moulding",
      "Premium packaging engineering",
      "Marketing-ready brand assets",
    ],
    highlight: false,
  },
];

const included = [
  { icon: Beaker, title: "Fragrance", desc: "From our library or custom-developed" },
  { icon: Package2, title: "Bottle & Cap", desc: "Glass, atomisers, premium caps" },
  { icon: Palette, title: "Packaging", desc: "Boxes, inserts, cellophane" },
  { icon: FileText, title: "Regulatory", desc: "MSDS, IFRA, allergen statements" },
];

const steps = [
  { n: "01", title: "Brief", time: "Day 1–3", desc: "Share your concept, target market & budget." },
  { n: "02", title: "Sampling", time: "Day 7–14", desc: "Receive fragrance & packaging samples." },
  { n: "03", title: "Approval", time: "Day 15–21", desc: "Sign off on final sample & artwork." },
  { n: "04", title: "Production", time: "Day 22–60", desc: "Bulk manufacturing in our UAE facility." },
  { n: "05", title: "Delivery", time: "Day 60–75", desc: "Worldwide shipping with full documentation." },
];

const PrivateLabel = () => {
  useEffect(() => {
    document.title = "Private Label & White Label Perfume Manufacturer | Kenooz UAE";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Launch your own perfume brand with Kenooz UAE. White label, private label & full bespoke development. MOQ from 5,000 units — scale up with no upper limit. ISO 22716 certified.");
  }, []);

  return (
    <SiteLayout>
      <PageHeader title="Private Label & OEM" breadcrumb="Private Label" />

      {/* Hero intro */}
      <section className="py-20 bg-background">
        <div className="container-luxury grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-gold mb-4">Build Your Own Brand</p>
            <h1 className="heading-section mb-6 text-foreground">
              Launch Your Own Perfume Brand — End to End
            </h1>
            <p className="text-foreground/75 leading-relaxed mb-6">
              From concept to shelf-ready product, Kenooz manufactures premium perfumes
              under your brand. Three flexible tiers, transparent MOQs, and full regulatory
              support for global markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-7 tracking-wider text-xs font-semibold h-11">
                <Link to="/contact">
                  START YOUR BRAND <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-7 tracking-wider text-xs font-semibold h-11 bg-transparent">
                <Link to="/manufacturing">SEE OUR FACILITY</Link>
              </Button>
            </div>
          </div>
          <img src={factory1} loading="lazy" alt="Kenooz manufacturing facility" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 surface-light">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="label-gold mb-3">Service Tiers</p>
            <h2 className="heading-section text-surface-light-foreground">Three Ways to Build Your Brand</h2>
            <div className="gold-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 bg-background border ${t.highlight ? "border-primary shadow-lg" : "border-border"} flex flex-col`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    Most Popular
                  </span>
                )}
                <t.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-2">{t.name}</h3>
                <div className="flex gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <span><span className="text-primary font-semibold">MOQ:</span> {t.moq}</span>
                  <span><span className="text-primary font-semibold">Lead:</span> {t.leadTime}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-5 leading-relaxed">{t.description}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={t.highlight ? "default" : "outline"} className={`rounded-none tracking-wider text-xs font-semibold h-10 ${t.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"}`}>
                  <Link to="/contact">REQUEST DETAILS</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-background">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="label-gold mb-3">What's Included</p>
            <h2 className="heading-section text-foreground">Everything You Need, In One Partner</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {included.map((i) => (
              <div key={i.title} className="text-center p-6 border border-border bg-card hover:border-primary transition-colors">
                <i.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-serif text-lg text-foreground mb-2">{i.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 surface-light">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="label-gold mb-3">From Brief to Delivery</p>
            <h2 className="heading-section text-surface-light-foreground">Your Journey With Us</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl text-primary mb-2">{s.n}</div>
                <h4 className="font-serif text-lg text-foreground mb-1">{s.title}</h4>
                <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-3">{s.time}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-luxury text-center max-w-2xl">
          <p className="label-gold mb-3">Ready to Begin?</p>
          <h2 className="heading-section text-foreground mb-5">Let's Bring Your Brand to Life</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Tell us about your vision. Our team will respond within 24 hours with a tailored quote and sample plan.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 tracking-wider text-xs font-semibold h-12">
            <Link to="/contact">
              REQUEST A QUOTE <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default PrivateLabel;
