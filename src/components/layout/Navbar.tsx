import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  Factory,
  Sparkles,
  Boxes,
  FlaskConical,
  Info,
  Phone,
  Newspaper,
  Search,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

const menu: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "Services",
    url: "#",
    items: [
      {
        title: "Bulk Manufacturing",
        description: "Large-scale perfume production with consistent quality",
        icon: <Factory className="size-5 shrink-0 text-primary" />,
        url: "/manufacturing",
      },
      {
        title: "Private Label",
        description: "Build your own brand with our turnkey solutions",
        icon: <Boxes className="size-5 shrink-0 text-primary" />,
        url: "/private-label",
      },
      {
        title: "Custom Fragrance",
        description: "Bespoke scent development by master perfumers",
        icon: <FlaskConical className="size-5 shrink-0 text-primary" />,
        url: "/manufacturing",
      },
      {
        title: "Scent Finder",
        description: "Discover the perfect fragrance for your brand",
        icon: <Search className="size-5 shrink-0 text-primary" />,
        url: "/scent-finder",
      },
    ],
  },
  {
    title: "Company",
    url: "#",
    items: [
      {
        title: "About Us",
        description: "Our heritage, vision and the Kenooz story",
        icon: <Info className="size-5 shrink-0 text-primary" />,
        url: "/about",
      },
      {
        title: "Brands",
        description: "Explore our 10 signature fragrance houses",
        icon: <Sparkles className="size-5 shrink-0 text-primary" />,
        url: "/brands",
      },
      {
        title: "Blog",
        description: "Industry insights and fragrance trends",
        icon: <Newspaper className="size-5 shrink-0 text-primary" />,
        url: "/blog",
      },
      {
        title: "Contact",
        description: "Get in touch with our team in the UAE",
        icon: <Phone className="size-5 shrink-0 text-primary" />,
        url: "/contact",
      },
    ],
  },
  { title: "Products", url: "/products" },
  { title: "Brands", url: "/brands" },
  { title: "Contact", url: "/contact" },
];

import kenoozLogoDark from "@/assets/kenooz-logo-dark.png";
import kenoozLogoLight from "@/assets/kenooz-logo-light.png";

const Logo = () => (
  <Link to="/" className="flex items-center shrink-0" aria-label="Kenooz Perfume and Cosmetics LLC">
    {/* Dark-bg logo (default on dark navbar) */}
    <img
      src={kenoozLogoDark}
      alt="Kenooz Perfume and Cosmetics LLC"
      className="h-12 md:h-14 w-auto object-contain block dark:block"
      loading="eager"
    />
  </Link>
);

// Light-bg variant exported for use in light sections (e.g., light footer)
export const LogoLight = () => (
  <Link to="/" className="flex items-center shrink-0" aria-label="Kenooz Perfume and Cosmetics LLC">
    <img
      src={kenoozLogoLight}
      alt="Kenooz Perfume and Cosmetics LLC"
      className="h-12 md:h-14 w-auto object-contain"
      loading="eager"
    />
  </Link>
);

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-foreground">
        <NavigationMenuTrigger className="bg-transparent text-sm tracking-wide text-foreground/80 hover:text-primary data-[state=open]:text-primary">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <Link
                    to={subItem.url}
                    className="flex select-none gap-3 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-medium text-foreground">{subItem.title}</div>
                      {subItem.description && (
                        <p className="mt-1 text-xs leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          to={item.url}
          className="inline-flex h-10 items-center px-3 text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-border">
        <AccordionTrigger className="py-3 text-sm tracking-wide hover:text-primary hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-1 pl-2">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <Link
                  to={subItem.url}
                  className="flex gap-3 rounded-sm p-2 hover:bg-secondary hover:text-primary"
                >
                  {subItem.icon}
                  <div>
                    <div className="text-sm font-medium">{subItem.title}</div>
                    {subItem.description && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{subItem.description}</p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      to={item.url}
      className="block py-3 text-sm tracking-wide border-b border-border hover:text-primary"
    >
      {item.title}
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-gradient-to-b from-background/80 to-transparent"
      )}
    >
      <div className="container-luxury h-20 flex items-center justify-between gap-6">
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          <Logo />
          <NavigationMenu>
            <NavigationMenuList>{menu.map(renderMenuItem)}</NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 tracking-wider text-xs font-semibold"
          >
            <Link to="/contact">REQUEST A QUOTE</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden w-full items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-none border-border">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-background border-border">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-6">
                <Accordion type="single" collapsible className="w-full">
                  {menu.map(renderMobileMenuItem)}
                </Accordion>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-wider text-xs font-semibold"
                >
                  <Link to="/contact">REQUEST A QUOTE</Link>
                </Button>
              </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
