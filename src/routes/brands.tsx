import { createFileRoute } from "@tanstack/react-router";
import Brands from "@/pages/Brands";
export const Route = createFileRoute("/brands")({
  head: () => ({ meta: [{ title: "Our Brands | Kenooz" }, { name: "description", content: "Explore our signature fragrance houses." }] }),
  component: Brands,
});
