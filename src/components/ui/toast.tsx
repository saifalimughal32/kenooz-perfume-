// Toast primitives stub - we route through sonner. Re-export shadcn API surface.
import * as React from "react";
import { cn } from "@/lib/utils";

type ToastProps = React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" };

export const ToastProvider = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const ToastViewport = () => null;
export const Toast = ({ className, ...props }: ToastProps) => (
  <div className={cn("rounded border bg-card p-4 shadow", className)} {...props} />
);
export const ToastTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("font-semibold", className)} {...props} />
);
export const ToastDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-sm opacity-90", className)} {...props} />
);
export const ToastClose = () => null;
export const ToastAction = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

export type ToastActionElement = React.ReactElement;
export type { ToastProps };
