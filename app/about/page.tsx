import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about KB Enterprise Solutions LLC, a Microsoft Dynamics 365 Business Central consulting firm founded by Khabab Butt.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About KB Enterprise Solutions LLC",
    description:
      "Senior Business Central consulting for ERP implementation, customization, integrations, and technical development.",
    url: absoluteUrl("/about")
  }
};

const expertise = [
  "Full ERP Implementations",
  "AL Development",
  "Custom Extensions",
  "API Integrations",
  "Financial Management",
  "Supply Chain",
  "Warehouse Management",
  "Business Automation",
  "Performance Optimization"
];

const facts = [
  ["Registered", "KB Enterprise Solutions LLC"],
  ["Location", "Florida, United States"],
  ["Specialization", "Microsoft Dynamics 365 Business Central"],
  ["Experience", "5+ Years"],
  ["Regions Served", "United States, United Arab Emirates, Europe"],
  ["Engagement Model", "Hourly Consulting, Fixed Price Projects, Long-Term Support"]
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[#F7F9FC] py-20">
        <div className="container-shell">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
              About
            </p>
            <h1 className="max-w-4xl text-4xl leading-tight md:text-5xl">
              About KB Enterprise Solutions
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              KB Enterprise Solutions is a Microsoft Dynamics 365 Business Central consulting firm
              specializing in ERP implementation, customization, integrations, and technical
              development.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Founded by Khabab Butt, the company delivers high-quality ERP solutions that
              streamline operations, automate workflows, and maximize return on ERP investment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Our Background"
              title="Dedicated Business Central delivery experience"
              description="Khabab Butt has over five years of dedicated Microsoft Dynamics 365 Business Central experience delivering ERP projects across the United States, United Arab Emirates, and Europe."
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              Before founding KB Enterprise Solutions, Khabab worked with Microsoft Partners
              delivering enterprise Business Central solutions for organizations ranging from
              growing businesses to publicly traded companies.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="soft-card p-7">
              <h2 className="text-2xl">Expertise Includes</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#0078D4]" aria-hidden="true" />
                    <span className="text-sm font-medium leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#F7F9FC]">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Direct senior consulting without unnecessary layers"
              description="Every engagement is handled directly by a senior consultant. No sales layers. No outsourcing. No unnecessary delays."
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              Clients receive direct communication, faster delivery, cleaner code, and practical
              business-focused ERP solutions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#101827]">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
