import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/pages/Stubs";
export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog | Kenooz" }, { name: "description", content: "Industry insights and fragrance trends." }] }),
  component: BlogPage,
});
