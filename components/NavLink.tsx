"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
  children: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, children, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
