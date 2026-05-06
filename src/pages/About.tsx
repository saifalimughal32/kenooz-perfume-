import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import Stats from "@/components/home/Stats";
import { Check } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";

const points = [
  "Modern Infrastructure",
  "Expert R&D Team",
  "International Quality Standards",
  "Customer Satisfaction Focused",
];

const About = () => (
  <SiteLayout>
    <PageHeader title="About Us" breadcrumb="About Us" />

    <section className="surface-light py-20">
      <div className="container-luxury grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="label-gold mb-4">About Kenooz</p>
          <h2 className="heading-section mb-6">Excellence in Every Fragrance</h2>
          <p className="mb-4 opacity-80 leading-relaxed">
            Welcome to Kenooz. Our perfumes are crafted with high-quality ingredients,
            ensuring rich, captivating scents that last throughout the day and provide a
            memorable fragrance experience with every wear.
          </p>
          <p className="mb-6 opacity-80 leading-relaxed">
            With a wide variety of options — from floral and fruity to woody and musky —
            our line caters to every preference. Our commitment to ethical practices means
            our perfumes are made with responsibly sourced ingredients, so customers can
            enjoy luxurious scents with a clear conscience.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src={heroBottle} loading="lazy" width={800} height={600} alt="Kenooz luxury perfume" className="w-full object-cover aspect-[4/3]" />
      </div>
    </section>

    <Stats />
  </SiteLayout>
);

export default About;
