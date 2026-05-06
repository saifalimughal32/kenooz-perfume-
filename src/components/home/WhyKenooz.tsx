import { Sparkles, Users, Tag, Headphones, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay: number;
}

const FeatureCard = ({ title, description, icon: Icon, gradient, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    className="relative flex flex-col justify-start items-start w-full max-w-[260px] md:max-w-[300px] group mx-auto"
    style={{ perspective: 1000 }}
  >
    {/* Breathing glow */}
    <motion.div
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className="absolute inset-x-0 top-0 w-full h-[260px] md:h-[300px] rounded-[40px] pointer-events-none"
      style={{ background: gradient, filter: "blur(45px)" }}
    />

    {/* Foreground card with gradient border */}
    <motion.div
      whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{
        border: "8px solid transparent",
        background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        transformStyle: "preserve-3d",
      }}
      className="relative self-stretch h-[260px] md:h-[300px] rounded-[40px] z-10 overflow-hidden"
    >
      <div className="w-full h-full p-7 flex flex-col justify-between">
        <div className="text-white/90">
          <Icon size={32} strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="text-white font-medium text-xl mb-3 tracking-tight font-serif">
            {title}
          </h3>
          <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const cards = [
  {
    icon: Sparkles,
    title: "Premium Fragrance",
    description:
      "Wearing a fragrance you love boosts confidence and helps you approach every situation with self-assurance.",
    gradient: "linear-gradient(137deg, #C9A24A 0%, #F5D88A 45%, #8B6A2A 100%)",
    delay: 0.1,
  },
  {
    icon: Users,
    title: "Well Trained Staff",
    description:
      "Our team is professionally trained to deliver the best service at every step of your journey with us.",
    gradient: "linear-gradient(137deg, #F5D88A 0%, #E0B45C 45%, #7A5520 100%)",
    delay: 0.2,
  },
  {
    icon: Tag,
    title: "Most Competitive Prices",
    description:
      "We offer the most competitive pricing in the current market without ever compromising on quality.",
    gradient: "linear-gradient(137deg, #B8862E 0%, #F0C870 45%, #C9A24A 100%)",
    delay: 0.25,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our staff is ready to assist you 24 hours a day, wherever you are in the world.",
    gradient: "linear-gradient(137deg, #FFE9B0 0%, #C9A24A 45%, #6B4A18 100%)",
    delay: 0.3,
  },
];

const WhyKenooz = () => {
  const [api, setApi] = useState<CarouselApi>();
  return (
  <section data-bottle="left" className="bg-[#0A0A0B] py-24">
    <div className="container-luxury">
      <div className="text-center mb-14 reveal">
        <p className="label-gold mb-3">What Makes Us Special</p>
        <h2 className="heading-section text-white">The Kenooz Promise</h2>
        <div className="gold-divider mt-6" />
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 w-full max-w-[1280px] mx-auto">
        {cards.map((c) => (
          <FeatureCard key={c.title} {...c} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
        >
          <CarouselContent className="-ml-4">
            {cards.map((c) => (
              <CarouselItem key={c.title} className="pl-4 basis-[85%]">
                <div className="py-4">
                  <FeatureCard {...c} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <CarouselDots api={api} />
      </div>
    </div>
  </section>
  );
};

export default WhyKenooz;
