import heroPoster from "@/assets/hero-kenooz-new.jpg";
import { useCallback, useEffect, useRef, useState } from "react";

let hasShownIntro = false;
const VIDEO_LOAD_TIMEOUT_MS = 8_000;

const IntroSplash = () => {
  const [visible, setVisible] = useState(!hasShownIntro);
  const [closing, setClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const handleEnter = useCallback(() => {
    if (closing) return;
    setClosing(true);
    closeTimerRef.current = window.setTimeout(() => setVisible(false), 600);
  }, [closing]);

  useEffect(
    () => () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

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
  }, [handleEnter, visible]);

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

    // Never leave visitors trapped behind the splash on slow or unsupported video connections.
    const loadTimeout = window.setTimeout(() => {
      if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) handleEnter();
    }, VIDEO_LOAD_TIMEOUT_MS);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.clearTimeout(loadTimeout);
    };
  }, [handleEnter, visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-end justify-center px-6 pb-12 transition-opacity duration-500 sm:pb-16 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        poster={heroPoster}
        autoPlay
        muted
        playsInline
        preload="metadata"
        onEnded={handleEnter}
        onError={handleEnter}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <button
        onClick={handleEnter}
        aria-label="Enter website"
        className="relative z-10 inline-flex h-14 items-center justify-center border border-white/70 bg-black/10 px-10 text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black sm:px-12"
      >
        Enter Website
      </button>
    </div>
  );
};

export default IntroSplash;
