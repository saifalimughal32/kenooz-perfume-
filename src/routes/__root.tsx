import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kenooz Perfumes — Luxury Fragrance Manufacturer in UAE" },
      { name: "description", content: "Kenooz Perfumes — premium fragrance manufacturer based in the UAE. Private-label, custom blends, and global export of luxury oud, oriental and niche perfumes." },
      { name: "author", content: "Kenooz Perfumes" },
      { property: "og:title", content: "Kenooz Perfumes — Luxury Fragrance Manufacturer" },
      { property: "og:description", content: "Premium private-label and custom fragrance manufacturing from the UAE. Oud, oriental and niche perfumes crafted for global brands." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Kenooz Perfumes" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kenooz Perfumes — Luxury Fragrance Manufacturer" },
      { name: "twitter:description", content: "Premium private-label and custom fragrance manufacturing from the UAE." },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "256x256", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="kenooz-theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
