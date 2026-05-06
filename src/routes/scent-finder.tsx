import { createFileRoute } from "@tanstack/react-router";
import ScentFinder from "@/pages/ScentFinder";
export const Route = createFileRoute("/scent-finder")({
  head: () => ({
    meta: [
      { title: "Scent Finder Quiz — Discover Your Signature | Kenooz" },
      { name: "description", content: "Take our 5-question Scent Finder quiz and discover the perfect fragrance family for your personality and brand." },
      { property: "og:title", content: "Scent Finder Quiz — Kenooz Perfumes" },
      { property: "og:description", content: "Find your signature fragrance in under a minute." },
    ],
  }),
  component: ScentFinder,
});
