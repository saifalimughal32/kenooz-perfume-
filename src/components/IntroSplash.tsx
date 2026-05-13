import { useEffect, useState } from "react";

const IntroSplash = () => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [visible]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleEnter = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 600);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-16 mt-auto mb-12 sm:mb-20">
        <h2 className="font-serif text-white text-3xl sm:text-5xl md:text-6xl tracking-wide mb-6 animate-fade-in">
          KENOOZ PERFUMES
        </h2>
        <button
          onClick={handleEnter}
          aria-label="Enter website"
          className="group inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 px-10 sm:px-14 h-12 sm:h-14 text-[11px] sm:text-xs tracking-[0.3em] font-semibold uppercase transition-colors"
        >
          Enter Website
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default IntroSplash;
