"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-4 py-2 text-sm font-medium transition hover:text-[#0078D4] ${
                  active ? "text-[#0078D4]" : "text-slate-700"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </div>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[#002050] md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-slate-700"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-2 w-full">
            Get in Touch
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
