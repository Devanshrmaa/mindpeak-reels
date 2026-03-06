import React, { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const NextLink = forwardRef<HTMLAnchorElement, any>(({ href, children, ...props }, ref) => {
  if (typeof href === "string" && (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"))) {
    return <a ref={ref} href={href} {...props}>{children}</a>;
  }
  return <RouterLink ref={ref} to={href || "/"} {...props}>{children}</RouterLink>;
});
NextLink.displayName = "NextLink";
export default NextLink;
