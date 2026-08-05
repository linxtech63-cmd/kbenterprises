import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F7F9FC]">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Microsoft Dynamics 365 Business Central consulting, custom development,
            integrations, and long-term ERP support for organizations that need practical,
            reliable delivery.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold text-[#101827]">Company</h2>
          <div className="mt-4 grid gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring w-fit rounded text-sm text-slate-600 transition hover:text-[#0078D4]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <address className="not-italic">
          <h2 className="text-sm font-semibold text-[#101827]">{siteConfig.name}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
            <br />
            {siteConfig.address.country}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="focus-ring mt-4 inline-block rounded text-sm font-medium text-[#0078D4]"
          >
            {siteConfig.email}
          </a>
          <div className="mt-5">
            <a
              href={siteConfig.linkedin}
              aria-label="LinkedIn profile placeholder"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-bold text-[#002050] transition hover:border-[#0078D4] hover:text-[#0078D4]"
            >
              in
            </a>
          </div>
        </address>
      </div>
      <div className="border-t border-slate-200 py-5">
        <p className="container-shell text-sm text-slate-500">
          © 2025 KB Enterprise Solutions LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
