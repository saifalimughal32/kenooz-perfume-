import alSyediLogo from "@/assets/al-syedi-logo.png";

const AlSyediBadge = () => {
  return (
    <a
      href="https://al-syedi.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Al-Syedi website"
      title="Powered by Al-Syedi"
      className="fixed bottom-24 right-6 z-40 group flex items-center justify-center h-14 w-14 rounded-full bg-background/90 backdrop-blur border border-primary/30 shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)] hover:scale-110 hover:border-primary transition-all duration-300"
    >
      <img
        src={alSyediLogo}
        alt="Al-Syedi"
        className="object-cover"
        style={{
          height: "calc(var(--spacing) * 30)",
          width: "calc(var(--spacing) * 30)",
          alignItems: "center",
          paddingBottom: "15px",
          paddingRight: "11px",
        }}
        loading="lazy"
      />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-foreground text-background text-[11px] tracking-wider uppercase font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        Visit Al-Syedi
      </span>
    </a>
  );
};

export default AlSyediBadge;
