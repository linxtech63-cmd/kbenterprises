import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    light: "btn-light"
  };

  return (
    <Link
      href={href}
      className={`focus-ring btn-link ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
