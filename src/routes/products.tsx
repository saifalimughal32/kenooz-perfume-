import { createFileRoute } from "@tanstack/react-router";
import Products from "@/pages/Products";
export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Premium Fragrance Collections | Kenooz" }, { name: "description", content: "Oud, Floral, Woody and Fresh collections crafted in the UAE." }] }),
  component: Products,
});
