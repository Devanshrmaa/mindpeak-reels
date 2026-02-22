"use client";

import NextLink from "next/link";
import { forwardRef } from "react";

/**
 * Drop-in replacement for react-router-dom's <Link>.
 * Accepts both `to` (react-router compat) and `href` (Next.js native).
 */
type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "href"> & {
  to?: string;
  href?: string;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, href, ...props }, ref) => {
    return <NextLink ref={ref} href={to || href || "/"} {...props} />;
  },
);

Link.displayName = "Link";

export { Link };
export default Link;
