import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    if (!visible) return;
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [visible]);

  const handleEnter = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 600);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-start justify-end transition-opacity duration-500 ${
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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <button
        onClick={handleEnter}
        aria-label="Enter website"
        className="relative z-10 mt-10 mr-10 inline-flex h-14 items-center justify-center border border-white/70 bg-black/10 px-10 text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black sm:mr-16 sm:px-12"
      >
        Enter Website
      </button>
    </div>
  );
};

export default IntroSplash;
