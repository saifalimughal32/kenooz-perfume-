import { Link, type LinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        {...(props as LinkProps)}
        className={cn(className)}
        activeProps={{ className: cn(activeClassName) }}
        inactiveProps={{ className: cn(pendingClassName) }}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
