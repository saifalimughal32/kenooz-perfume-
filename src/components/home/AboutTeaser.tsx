import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import factory1 from "@/assets/factory-1.jpg";
import factory2 from "@/assets/factory-2.jpg";
import factory3 from "@/assets/factory-3.jpg";

const points = [
  "Advanced Manufacturing Facilities",
  "Skilled Perfumers & R&D Team",
  "Strict Quality Control",
  "On-time Delivery Assurance",
];

const AboutTeaser = () => (
  <section data-bottle="left" className="surface-light py-20">
    <div className="container-luxury grid lg:grid-cols-2 gap-12 items-center">
      <div className="reveal-left">
        <p className="label-gold mb-4">About Kenooz</p>
        <h2 className="heading-section mb-6">Your Trusted Partner in<br />Fragrance Manufacturing</h2>
        <p className="text-base mb-6 leading-relaxed opacity-80">
          Kenooz Perfumes & Cosmetics LLC fragrances are crafted with high-quality
          ingredients, ensuring rich, captivating scents that last throughout the day —
          a memorable fragrance experience with every wear, made with responsibly
          sourced ingredients you can wear with a clear conscience.
        </p>
        <ul className="space-y-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <span className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Check className="h-3 w-3 text-primary-foreground" />
              </span>
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-7 tracking-wider text-xs font-semibold h-11">
          <Link to="/about">LEARN MORE ABOUT US</Link>
        </Button>
      </div>

      <div className="reveal-right grid grid-cols-2 gap-3">
        <img src={factory1} loading="lazy" width={1200} height={800} alt="Manufacturing facility" className="col-span-2 h-56 w-full object-cover rounded-2xl" />
        <img src={factory2} loading="lazy" width={1200} height={800} alt="Perfumers in lab" className="h-44 w-full object-cover rounded-2xl" />
        <img src={factory3} loading="lazy" width={1200} height={800} alt="Bottling line" className="h-44 w-full object-cover rounded-2xl" />
      </div>
    </div>
  </section>
);

export default AboutTeaser;
