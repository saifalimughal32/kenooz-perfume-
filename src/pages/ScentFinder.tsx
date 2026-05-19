import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/layout/SiteLayout";
import oudImg from "@/assets/ingredient-oud.jpg";
import roseImg from "@/assets/ingredient-rose.jpg";
import lavenderImg from "@/assets/ingredient-lavender.jpg";
import jasmineImg from "@/assets/ingredient-jasmine.jpg";
import vanillaImg from "@/assets/ingredient-vanilla.jpg";
import muskImg from "@/assets/ingredient-musk.jpg";

type Family = "oud" | "floral" | "fresh" | "woody" | "gourmand";

interface Option {
  label: string;
  description?: string;
  weights: Partial<Record<Family, number>>;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: "mood",
    question: "Which mood best describes your ideal fragrance?",
    options: [
      { label: "Bold & Mysterious", description: "Deep, smoky, intense", weights: { oud: 3, woody: 2 } },
      { label: "Romantic & Soft", description: "Petals, powder, warmth", weights: { floral: 3, gourmand: 1 } },
      { label: "Bright & Energetic", description: "Citrus, herbs, breezy", weights: { fresh: 3 } },
      { label: "Warm & Comforting", description: "Vanilla, amber, sweet", weights: { gourmand: 3, woody: 1 } },
    ],
  },
  {
    id: "season",
    question: "When would you wear it most?",
    options: [
      { label: "Cool winter evenings", weights: { oud: 2, gourmand: 2, woody: 2 } },
      { label: "Spring afternoons", weights: { floral: 3, fresh: 1 } },
      { label: "Hot summer days", weights: { fresh: 3 } },
      { label: "Anytime, year-round", weights: { woody: 2, floral: 1, gourmand: 1 } },
    ],
  },
  {
    id: "setting",
    question: "Pick the setting that excites you most",
    options: [
      { label: "A candlelit oud majlis", weights: { oud: 3, woody: 1 } },
      { label: "A garden in full bloom", weights: { floral: 3 } },
      { label: "A coastal walk at dawn", weights: { fresh: 3 } },
      { label: "A patisserie in Paris", weights: { gourmand: 3 } },
    ],
  },
  {
    id: "intensity",
    question: "How intense should your signature be?",
    options: [
      { label: "Powerful & long-lasting", weights: { oud: 2, woody: 2, gourmand: 1 } },
      { label: "Elegant & noticeable", weights: { floral: 2, woody: 1 } },
      { label: "Soft & intimate", weights: { fresh: 1, floral: 2 } },
      { label: "Light & refreshing", weights: { fresh: 3 } },
    ],
  },
  {
    id: "personality",
    question: "Which describes your brand or self?",
    options: [
      { label: "Heritage & opulence", weights: { oud: 3 } },
      { label: "Feminine & timeless", weights: { floral: 3 } },
      { label: "Modern & minimal", weights: { fresh: 2, woody: 2 } },
      { label: "Indulgent & playful", weights: { gourmand: 3 } },
    ],
  },
];

const results: Record<
  Family,
  { name: string; tagline: string; image: string; notes: string[]; description: string }
> = {
  oud: {
    name: "Oriental Oud",
    tagline: "Smoky • Resinous • Regal",
    image: oudImg,
    notes: ["Aged Agarwood", "Saffron", "Amber", "Frankincense"],
    description:
      "You belong to the world of liquid gold. Deep, mysterious and unmistakably luxurious — your fragrance commands presence in every room.",
  },
  floral: {
    name: "Floral Bouquet",
    tagline: "Romantic • Soft • Luminous",
    image: roseImg,
    notes: ["Bulgarian Rose", "Jasmine Sambac", "Peony", "Iris"],
    description:
      "You're drawn to elegance and emotion. Petal-soft and beautifully balanced — a timeless signature with quiet confidence.",
  },
  fresh: {
    name: "Fresh & Aromatic",
    tagline: "Bright • Crisp • Effortless",
    image: lavenderImg,
    notes: ["Bergamot", "Lavender", "Sea Salt", "Mint"],
    description:
      "You love clarity and movement. Sparkling, herbaceous and clean — perfect for those who lead with energy and ease.",
  },
  woody: {
    name: "Woody Niche",
    tagline: "Refined • Architectural • Modern",
    image: jasmineImg,
    notes: ["Sandalwood", "Cedarwood", "Vetiver", "Patchouli"],
    description:
      "You appreciate craftsmanship and structure. Warm woods grounded with depth — a sophisticated signature for the discerning.",
  },
  gourmand: {
    name: "Gourmand Indulgence",
    tagline: "Sweet • Warm • Addictive",
    image: vanillaImg,
    notes: ["Madagascar Vanilla", "Tonka Bean", "Praline", "Caramel"],
    description:
      "You're irresistibly inviting. Edible-sweet and beautifully wrapped in warmth — a fragrance that lingers in memory.",
  },
};

const ScentFinder = () => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Family, number>>({
    oud: 0,
    floral: 0,
    fresh: 0,
    woody: 0,
    gourmand: 0,
  });
  const [done, setDone] = useState(false);

  const handleAnswer = (option: Option) => {
    const next = { ...scores };
    (Object.keys(option.weights) as Family[]).forEach((k) => {
      next[k] = (next[k] || 0) + (option.weights[k] || 0);
    });
    setScores(next);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setScores({ oud: 0, floral: 0, fresh: 0, woody: 0, gourmand: 0 });
    setDone(false);
  };

  const winner = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]) as Family;
  const result = results[winner];
  const progress = done ? 100 : Math.round((step / questions.length) * 100);

  return (
    <SiteLayout>
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_60%)]" />
        <div className="container-luxury relative text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] text-primary font-medium mb-4">
            <Sparkles className="size-3.5" /> SCENT FINDER QUIZ
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Discover Your Signature Scent
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Answer 5 quick questions and we'll match you to the fragrance family that fits your
            personality, mood and brand vision.
          </p>
        </div>
      </section>

      {/* QUIZ CARD */}
      <section className="pb-24 md:pb-32">
        <div className="container-luxury max-w-3xl mx-auto px-4">
          <div className="bg-card border border-border rounded-lg shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Progress bar */}
            <div className="h-1 bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {!done ? (
              <div key={step} className="p-6 sm:p-10 md:p-14 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] tracking-[0.3em] text-primary font-medium">
                    QUESTION {step + 1} / {questions.length}
                  </span>
                  <span className="text-xs text-muted-foreground">{progress}% complete</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight mb-8">
                  {questions[step].question}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleAnswer(opt)}
                      className="group text-left p-5 border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-serif text-base sm:text-lg text-foreground mb-1">
                            {opt.label}
                          </p>
                          {opt.description && (
                            <p className="text-xs text-muted-foreground">{opt.description}</p>
                          )}
                        </div>
                        <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
                    <img
                      src={result.image}
                      alt={result.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/40 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                    <span className="text-[11px] tracking-[0.3em] text-primary font-medium mb-3">
                      YOUR SIGNATURE FAMILY
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-2">
                      {result.name}
                    </h2>
                    <p className="text-sm tracking-wider text-muted-foreground mb-5">
                      {result.tagline}
                    </p>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6">
                      {result.description}
                    </p>
                    <div className="mb-8">
                      <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
                        SIGNATURE NOTES
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.notes.map((n) => (
                          <span
                            key={n}
                            className="text-[11px] tracking-wider px-3 py-1.5 border border-primary/40 text-primary rounded-full"
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-[0.2em] text-xs font-semibold px-6 py-5"
                      >
                        <Link to="/contact">REQUEST THIS BLEND</Link>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={reset}
                        className="rounded-none tracking-[0.2em] text-xs font-semibold px-6 py-5 gap-2"
                      >
                        <RotateCcw className="size-3.5" /> RETAKE QUIZ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!done && (
            <p className="text-center text-xs text-muted-foreground mt-6">
              No data is collected. Your answers stay in your browser.
            </p>
          )}
        </div>
      </section>
    </main>
    </SiteLayout>
  );
};

export default ScentFinder;
