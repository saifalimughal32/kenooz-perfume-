import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perfume Manufacturer UAE | Bulk & Private Label | Kenooz Perfumes" },
      { name: "description", content: "Kenooz Perfumes — UAE's trusted ISO 22716 certified perfume manufacturer. Bulk supply, private label & custom fragrance development. MOQ from 500 units." },
    ],
  }),
  component: Index,
});
