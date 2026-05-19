import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import oud from "@/assets/ingredient-oud.jpg";
import rose from "@/assets/ingredient-rose.jpg";
import jasmine from "@/assets/ingredient-jasmine.jpg";
import vanilla from "@/assets/ingredient-vanilla.jpg";
import musk from "@/assets/ingredient-musk.jpg";
import lavender from "@/assets/ingredient-lavender.jpg";

const posts = [
  {
    slug: "anatomy-of-a-fragrance",
    title: "The Anatomy of a Fragrance: Top, Heart & Base Notes Explained",
    excerpt: "Understand how perfumers structure a scent in three layers — and why the order they unfold defines a fragrance's signature.",
    image: rose,
    category: "Fragrance Education",
    date: "May 12, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "rise-of-oud",
    title: "The Rise of Oud: From Arabian Majlis to Global Luxury",
    excerpt: "How agarwood — once a regional treasure of the Gulf — became the most coveted ingredient in modern niche perfumery.",
    image: oud,
    category: "Industry Insights",
    date: "April 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "private-label-vs-custom",
    title: "Private Label vs Custom Fragrance: Which Path Is Right for Your Brand?",
    excerpt: "A clear breakdown of cost, time, exclusivity and minimum order quantities to help founders pick the right manufacturing route.",
    image: jasmine,
    category: "Branding",
    date: "April 14, 2026",
    readTime: "5 min read",
  },
  {
    slug: "ifra-compliance",
    title: "What IFRA Compliance Means for Your Perfume Brand",
    excerpt: "A founder-friendly guide to the global safety standards that govern every fragrance sold across borders.",
    image: lavender,
    category: "Compliance",
    date: "March 30, 2026",
    readTime: "7 min read",
  },
  {
    slug: "gourmand-trend",
    title: "Why Gourmand Scents Are Dominating 2026",
    excerpt: "Vanilla, caramel and praline are everywhere. We unpack the cultural shift behind the gourmand wave.",
    image: vanilla,
    category: "Trends",
    date: "March 18, 2026",
    readTime: "4 min read",
  },
  {
    slug: "musk-modernised",
    title: "Musk, Modernised: Synthetic Musks and the Future of Clean Perfumery",
    excerpt: "How modern lab-crafted musks deliver the warmth of the classics without animal sourcing.",
    image: musk,
    category: "Ingredients",
    date: "March 4, 2026",
    readTime: "6 min read",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Perfume Industry Blog | Fragrance Insights | Kenooz";
    const meta = document.querySelector('meta[name="description"]') ||
      (() => { const m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); return m; })();
    meta.setAttribute("content", "Fragrance industry insights, perfumery education and brand-building guides from Kenooz Perfume and Cosmetics — UAE manufacturer.");
  }, []);

  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <SiteLayout>
      <PageHeader title="The Kenooz Journal" breadcrumb="Blog" />

      {/* Featured */}
      <section className="py-16 bg-background">
        <div className="container-luxury">
          <article className="grid lg:grid-cols-2 gap-10 items-center group">
            <div className="overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="label-gold mb-4">Featured Article</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 tracking-wider">
                <span className="text-primary">{featured.category}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {featured.readTime}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-5">
                {featured.title}
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-7">{featured.excerpt}</p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-7 tracking-wider text-xs font-semibold h-11">
                <Link to="/contact">
                  READ THE FULL ARTICLE <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 surface-light border-t border-border">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="label-gold mb-3">Latest Stories</p>
            <h2 className="heading-section text-surface-light-foreground">From the Atelier</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article key={p.slug} className="bg-background border border-border hover:border-primary transition-colors group flex flex-col">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={p.image} loading="lazy" alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-3 tracking-wider uppercase">
                    <span className="text-primary">{p.category}</span>
                    <span>•</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span className="inline-flex items-center gap-1 text-primary text-[10px] tracking-[0.2em] font-semibold">
                      READ <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-background">
        <div className="container-luxury text-center max-w-2xl">
          <p className="label-gold mb-3">Stay In The Know</p>
          <h2 className="heading-section text-foreground mb-5">Fragrance Insights, Monthly</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Industry trends, perfumery deep-dives and behind-the-scenes from the Kenooz atelier — straight to your inbox.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 tracking-wider text-xs font-semibold h-12">
            <Link to="/contact">
              SUBSCRIBE <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Blog;
