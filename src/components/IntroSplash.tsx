import { useEffect, useRef, useState } from "react";

// Module-level flag — persists across route changes within the same page load.
// Refreshing the tab resets it (real "visit"), navigation does not.
let hasShownIntro = false;

const IntroSplash = () => {
  const [visible, setVisible] = useState(!hasShownIntro);
  const [closing, setClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!visible) return;
    hasShownIntro = true;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  // Try to start playback as early as possible
  useEffect(() => {
    if (!visible) return;
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
    };
  }, [visible]);

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
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-16 mt-auto mb-10 sm:mb-16">
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
