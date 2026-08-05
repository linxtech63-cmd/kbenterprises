import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for KB Enterprise Solutions LLC, covering information collected through the website and contact form.",
  alternates: { canonical: absoluteUrl("/privacy-policy") }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-shell max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
          Privacy Policy
        </p>
        <h1 className="text-4xl leading-tight">Privacy Policy</h1>
        <p className="mt-6 text-sm text-slate-500">Effective Date: January 1, 2025</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
          <p>
            KB Enterprise Solutions LLC respects your privacy. This policy explains how we collect,
            use, and protect information submitted through this website.
          </p>
          <PolicySection title="Information We Collect">
            We may collect your name, email address, company name, phone number, subject, message,
            and technical information needed to operate and secure the website.
          </PolicySection>
          <PolicySection title="How We Use Information">
            Information is used to respond to inquiries, evaluate project requirements, provide
            consulting services, maintain business records, and improve website performance.
          </PolicySection>
          <PolicySection title="Information Sharing">
            We do not sell personal information. Information may be shared only with service
            providers needed to operate the website, comply with legal obligations, or deliver
            requested services.
          </PolicySection>
          <PolicySection title="Data Security">
            We use reasonable administrative, technical, and organizational safeguards to protect
            submitted information. No internet transmission or storage system can be guaranteed to
            be completely secure.
          </PolicySection>
          <PolicySection title="Contact">
            For privacy questions, contact {siteConfig.name} at{" "}
            <a className="text-[#0078D4]" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
