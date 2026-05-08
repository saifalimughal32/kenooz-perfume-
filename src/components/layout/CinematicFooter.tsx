"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp, Clock, FileText, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import kenoozLogo from "@/assets/kenooz-logo.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
.cinematic-footer-wrapper { -webkit-font-smoothing: antialiased; }
@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
}
@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-footer-breathe { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, hsl(var(--primary) / 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, hsl(var(--primary) / 0.06) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}
.footer-aurora {
  background: radial-gradient(circle at 50% 50%,
    hsl(var(--primary) / 0.22) 0%,
    hsl(var(--primary) / 0.08) 35%,
    transparent 70%);
  filter: blur(40px);
}
.footer-glass-pill {
  background: linear-gradient(145deg, hsl(var(--foreground) / 0.04), hsl(var(--foreground) / 0.01));
  box-shadow: 0 10px 30px -10px hsl(0 0% 0% / 0.5), inset 0 1px 1px hsl(var(--foreground) / 0.08);
  border: 1px solid hsl(var(--border));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.footer-glass-pill:hover {
  border-color: hsl(var(--primary) / 0.5);
  box-shadow: 0 20px 40px -10px hsl(var(--primary) / 0.25), inset 0 1px 1px hsl(var(--foreground) / 0.15);
  color: hsl(var(--primary));
}
.footer-text-glow {
  background: linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.45) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px hsl(var(--primary) / 0.25));
}
`;

const MARQUEE_ITEMS = [
  "Bulk Manufacturing",
  "Private Label",
  "ISO 22716 GMP",
  "IFRA Compliant",
  "Halal Certified",
  "50+ Countries Served",
];

const MarqueeRow = () => (
  <div className="flex shrink-0 items-center gap-12 px-6">
    {MARQUEE_ITEMS.map((t, i) => (
      <span key={i} className="flex items-center gap-12 text-xs tracking-[0.32em] uppercase text-muted-foreground">
        {t}
        <span className="text-primary">✦</span>
      </span>
    ))}
  </div>
);

const CinematicFooter = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 60%", end: "bottom bottom", scrub: 1 },
        }
      );
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Enter a valid email");
    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim().toLowerCase() });
    setLoading(false);
    if (error) {
      if (error.code === "23505") toast.success("You're already subscribed!");
      else { toast.error("Could not subscribe. Try again."); return; }
    } else {
      toast.success("Subscribed! We'll be in touch.");
    }
    setEmail("");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{STYLES}</style>
      <footer
        ref={wrapperRef}
        className="cinematic-footer-wrapper relative overflow-hidden bg-card border-t border-border pt-20 pb-6"
      >
        <div className="absolute inset-0 footer-bg-grid pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] -translate-x-1/2 -translate-y-1/2 footer-aurora animate-footer-breathe pointer-events-none" />

        <div className="relative overflow-hidden border-y border-border py-5 mb-16">
          <div className="flex animate-footer-scroll-marquee" style={{ width: "max-content" }}>
            <MarqueeRow /><MarqueeRow /><MarqueeRow /><MarqueeRow />
          </div>
        </div>

        <div className="relative container-luxury">
          {/* CTA heading */}
          <div ref={headingRef} className="text-center max-w-4xl mx-auto mb-20">
            <div className="label-gold mb-6">Crafted in the UAE · Shipped Worldwide</div>
            <h2 className="footer-text-glow font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
              Let's manufacture your<br />signature scent.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Bulk manufacturing, private label & custom fragrance development. MOQ from 500 units. Response within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="footer-glass-pill px-8 py-4 rounded-full text-sm tracking-[0.2em] uppercase font-semibold inline-block">
                Request a Quote
              </Link>
              <Link to="/private-label" className="footer-glass-pill px-8 py-4 rounded-full text-sm tracking-[0.2em] uppercase font-semibold inline-block">
                Private Label
              </Link>
            </div>
          </div>

          {/* Links grid — 5 cols */}
          <div ref={linksRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-border">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center mb-5">
                <img src={kenoozLogo} alt="Kenooz Perfumes & Cosmetics LLC" width={180} height={144} className="h-20 w-auto object-contain" loading="lazy" />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-sm">
                ISO 22716 certified perfume manufacturer based in the UAE. Trusted by 200+ brands across 50+ countries for bulk supply, private label and custom fragrance development.
              </p>

              {/* Trade details */}
              <div className="space-y-2 text-xs text-muted-foreground mb-5">
                <div className="flex gap-2"><span className="text-primary font-semibold uppercase tracking-wider">Trade License:</span> 1051935</div>
                <div className="flex gap-2"><span className="text-primary font-semibold uppercase tracking-wider">TRN:</span> 100123456700003</div>
              </div>

              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="footer-glass-pill h-10 w-10 rounded-full flex items-center justify-center inline-flex">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="label-gold mb-5">Explore</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Manufacturing", "/manufacturing"],
                  ["Private Label", "/private-label"],
                  ["Brands", "/brands"],
                  ["Contact", "/contact"],
                ].map(([l, h]) => (
                  <li key={l}><Link to={h} className="text-foreground/70 hover:text-primary transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="label-gold mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Industrial Area 4,<br />Dubai, United Arab Emirates</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <a href="tel:+971551557964" className="hover:text-primary">+971 55 155 7964</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <a href="https://wa.me/971551557964" target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp Sales</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <a href="mailto:sales@kenoozperfumes.com" className="hover:text-primary">sales@kenoozperfumes.com</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Sun–Thu · 9 AM – 6 PM GST</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="label-gold mb-5">B2B Insights</h4>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Industry trends, fragrance innovation & private label tips — monthly.
              </p>
              <form onSubmit={subscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary border-border rounded-none"
                />
                <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-wider text-xs font-semibold">
                  {loading ? "..." : "SUBSCRIBE"}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-muted-foreground">
            <div>© 2026 Kenooz Perfumes & Cosmetics LLC — UAE · All Rights Reserved</div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5"><FileText className="h-3 w-3 text-primary" /> ISO 22716</span>
              <span>IFRA Compliant</span>
              <span>Halal Certified</span>
            </div>
            <button onClick={scrollToTop} className="footer-glass-pill h-11 w-11 rounded-full flex items-center justify-center">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CinematicFooter;
