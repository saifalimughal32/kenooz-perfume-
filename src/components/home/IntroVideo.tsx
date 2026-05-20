import heroBottle from "@/assets/hero-kenooz-bottle.png";

type IntroVideoProps = {
  onEnter: () => void;
};

const IntroVideo = ({ onEnter }: IntroVideoProps) => (
  <section className="fixed inset-0 z-[100] bg-black text-white">
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={heroBottle}
    >
      <source src="/intro-video.mp4" type="video/mp4" />
      <source src="/intro-video.webm" type="video/webm" />
    </video>

    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10 flex min-h-screen items-start justify-end p-5 sm:p-8">
      <button
        type="button"
        onClick={onEnter}
        className="border border-white/70 bg-black/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:px-7"
      >
        Enter Website
      </button>
    </div>
  </section>
);

export default IntroVideo;
