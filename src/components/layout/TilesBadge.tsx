import tilesLogo from "@/assets/tiles-logo.png";

const TilesBadge = () => {
  return (
    <a
      href="#"
      aria-label="Tiles"
      title="Tiles"
      className="fixed bottom-40 right-6 z-40 group flex items-center justify-center h-14 w-14 rounded-full bg-background/90 backdrop-blur border border-primary/30 shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)] hover:scale-110 hover:border-primary transition-all duration-300"
    >
      <img
        src={tilesLogo}
        alt="Tiles"
        className="h-9 w-9 object-contain"
        loading="lazy"
      />
    </a>
  );
};

export default TilesBadge;
