const items = [
  "Bulk Manufacturing",
  "Private Label Solutions",
  "Custom Fragrance Development",
  "Worldwide Shipping",
  "ISO Quality Standards",
  "Premium Packaging",
  "OEM & White Label",
  "UAE Heritage Since 2010",
];

const Marquee = () => (
  <div className="border-y border-border bg-secondary py-5 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
      {[...items, ...items].map((t, i) => (
        <span key={i} className="flex items-center gap-10 px-10 text-[11px] tracking-[0.32em] uppercase text-muted-foreground hover:text-primary transition-colors">
          {t}
          <span className="h-1 w-1 rounded-full bg-primary" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
