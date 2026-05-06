// Minimal shim - delegates to sonner
import { toast as sonnerToast } from "sonner";

type ToastInput = { title?: string; description?: string; variant?: string };

export function toast(input: ToastInput | string) {
  if (typeof input === "string") return sonnerToast(input);
  const { title, description, variant } = input;
  const msg = title ?? description ?? "";
  if (variant === "destructive") return sonnerToast.error(msg, { description: title ? description : undefined });
  return sonnerToast(msg, { description: title ? description : undefined });
}

export function useToast() {
  return { toast, toasts: [] as Array<{ id: string; title?: string; description?: string; action?: React.ReactNode }> };
}
