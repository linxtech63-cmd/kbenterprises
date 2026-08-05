import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the KB Enterprise Solutions LLC website and requesting consulting services.",
  alternates: { canonical: absoluteUrl("/terms-and-conditions") }
};

export default function TermsPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-shell max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
          Terms & Conditions
        </p>
        <h1 className="text-4xl leading-tight">Terms & Conditions</h1>
        <p className="mt-6 text-sm text-slate-500">Effective Date: January 1, 2025</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
          <TermSection title="Website Use">
            This website provides general information about Microsoft Dynamics 365 Business Central
            consulting and development services offered by {siteConfig.name}. Use of the website
            does not create a consulting engagement or client relationship.
          </TermSection>
          <TermSection title="Service Engagements">
            Consulting work, project scope, pricing, timelines, and deliverables are governed by
            written agreements or approved statements of work between the client and KB Enterprise
            Solutions LLC.
          </TermSection>
          <TermSection title="Accuracy of Information">
            We aim to keep website information accurate and current, but we do not guarantee that
            all information is complete, uninterrupted, or error-free.
          </TermSection>
          <TermSection title="Intellectual Property">
            Website content, branding, layout, and written materials belong to KB Enterprise
            Solutions LLC unless otherwise stated. Microsoft, Dynamics 365, and Business Central are
            trademarks of their respective owners.
          </TermSection>
          <TermSection title="Contact">
            Questions about these terms may be sent to{" "}
            <a className="text-[#0078D4]" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </TermSection>
        </div>
      </div>
    </section>
  );
}

function TermSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
