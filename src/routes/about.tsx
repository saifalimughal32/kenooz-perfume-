import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Kenooz Perfumes" }, { name: "description", content: "Heritage, vision and the Kenooz story." }] }),
  component: About,
});
