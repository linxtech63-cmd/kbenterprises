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
    primary:
      "bg-[#0078D4] text-white shadow-sm hover:bg-[#0F6CBD] hover:shadow-md",
    secondary:
      "border border-[#B9CBE0] bg-white text-[#002050] hover:border-[#0078D4] hover:text-[#0078D4]",
    light:
      "bg-white text-[#002050] shadow-sm hover:bg-[#F7F9FC] hover:shadow-md"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
