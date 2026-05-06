import { createFileRoute } from "@tanstack/react-router";
import PrivateLabel from "@/pages/PrivateLabel";
export const Route = createFileRoute("/private-label")({
  head: () => ({ meta: [{ title: "Private Label Solutions | Kenooz" }, { name: "description", content: "Build your own brand with our turnkey private label fragrance solutions." }] }),
  component: PrivateLabel,
});
