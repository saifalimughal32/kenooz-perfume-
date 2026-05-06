import { createFileRoute } from "@tanstack/react-router";
import { ScentFinderPage } from "@/pages/Stubs";
export const Route = createFileRoute("/scent-finder")({
  head: () => ({ meta: [{ title: "Scent Finder | Kenooz" }, { name: "description", content: "Discover the perfect fragrance for your brand." }] }),
  component: ScentFinderPage,
});
