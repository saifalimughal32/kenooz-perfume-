// Stub for sparkles - tsparticles isn't installed; render a soft gradient instead.
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  className?: string;
  background?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
};

export const SparklesCore = ({ className, background }: Props) => (
  <div
    className={cn("pointer-events-none w-full h-full", className)}
    style={{
      background:
        background ??
        "radial-gradient(ellipse at center, hsl(var(--primary) / 0.15), transparent 60%)",
    }}
  />
);

export default SparklesCore;
