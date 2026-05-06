import { createFileRoute } from "@tanstack/react-router";
import Manufacturing from "@/pages/Manufacturing";
export const Route = createFileRoute("/manufacturing")({
  head: () => ({ meta: [{ title: "Bulk Perfume Manufacturing | Kenooz" }, { name: "description", content: "Large-scale perfume production with consistent quality." }] }),
  component: Manufacturing,
});
