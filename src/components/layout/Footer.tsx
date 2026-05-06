import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Enter a valid email");
    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim().toLowerCase() });
    setLoading(false);
    if (error) {
      if (error.code === "23505") {
        toast.success("You're already subscribed!");
      } else {
        toast.error("Could not subscribe. Try again.");
        return;
      }
    } else {
      toast.success("Subscribed! We'll be in touch.");
    }
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-luxury py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-full border border-primary flex items-center justify-center">
              <span className="font-serif text-primary">K</span>
            </div>
            <div>
              <div className="font-serif tracking-widest">KENOOZ</div>
              <div className="text-[9px] tracking-[0.3em] text-primary mt-0.5">PERFUMES & COSMETICS LLC</div>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your trusted partner in bulk perfume manufacturing and wholesale supply. Delivering quality, consistency and excellence worldwide.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="label-gold mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Manufacturing", "/manufacturing"],
              ["Brands", "/brands"],
              ["Bulk Supply", "/private-label"],
              ["Global Export", "/about"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={l}><Link to={h} className="text-foreground/70 hover:text-primary transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-gold mb-5">Our Services</h4>
          <ul className="space-y-2.5 text-sm text-foreground/70">
            <li>Bulk Perfume Manufacturing</li>
            <li>Private Label Solutions</li>
            <li>Custom Fragrance Development</li>
            <li>Packaging Solutions</li>
            <li>Quality Assurance</li>
            <li>Worldwide Shipping</li>
          </ul>
        </div>

        <div>
          <h4 className="label-gold mb-5">Contact Info</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> United Arab Emirates</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> info@kenoozperfumes.com</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> +971 55 155 7964</li>
          </ul>
        </div>

        <div>
          <h4 className="label-gold mb-5">Newsletter</h4>
          <form onSubmit={subscribe} className="space-y-3">
            <Input
              type="email"
              placeholder="Your email please"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary border-border rounded-none"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-wider text-xs font-semibold">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxury py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <div>© 2026 Powered by Kenooz Perfumes & Cosmetics LLC – UAE</div>
          <div className="flex gap-6">
            <span>10 Days Return</span>
            <span>Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
