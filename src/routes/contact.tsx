import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Kenooz Perfumes" }, { name: "description", content: "Get in touch with our team in the UAE." }] }),
  component: Contact,
});
