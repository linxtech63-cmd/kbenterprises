import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end Microsoft Dynamics 365 Business Central consulting, implementation, custom AL development, integrations, architecture, support, and maintenance.",
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    title: "Microsoft Dynamics 365 Business Central Services",
    description:
      "Implementation, extensions, integrations, solution design, architecture, support, and maintenance for Business Central.",
    url: absoluteUrl("/services")
  }
};

const services = [
  {
    title: "Business Central Implementation",
    items: [
      "Business analysis",
      "Requirements gathering",
      "Configuration",
      "Data migration",
      "User training",
      "Testing",
      "Go-live support"
    ]
  },
  {
    title: "Custom Development & Extensions",
    items: [
      "AL Development",
      "Extensions",
      "Reports",
      "Pages",
      "APIs",
      "Workflow Automation",
      "Performance Optimization"
    ]
  },
  {
    title: "Integration Services",
    items: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Salesforce",
      "HubSpot",
      "Payment Gateways",
      "Banking",
      "REST APIs",
      "SOAP APIs",
      "Third-party Systems"
    ]
  },
  {
    title: "Solution Design & Architecture",
    items: [
      "Gap Analysis",
      "Solution Architecture",
      "Technical Documentation",
      "Functional Specifications",
      "Best Practices",
      "Code Review"
    ]
  },
  {
    title: "Support & Maintenance",
    items: [
      "Bug Fixes",
      "Enhancements",
      "Version Upgrades",
      "Performance Optimization",
      "User Support",
      "Training"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[#F7F9FC] py-20">
        <div className="container-shell">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
              Services
            </p>
            <h1 className="text-4xl leading-tight md:text-5xl">Our Services</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              End-to-end Microsoft Dynamics 365 Business Central consulting and development.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="soft-card grid gap-8 p-7 md:grid-cols-[0.75fr_1.25fr] md:p-9">
                <div>
                  <p className="mb-3 text-sm font-semibold text-[#0078D4]">
                    Service {index + 1}
                  </p>
                  <h2 className="text-2xl">{service.title}</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="shrink-0 text-[#0F6CBD]" aria-hidden="true" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#002050] py-20 text-white">
        <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl text-white">Need Business Central expertise?</h2>
            <p className="mt-4 max-w-2xl leading-8 text-blue-100">
              Discuss implementation, customization, integration, or support needs with a senior
              Business Central consultant.
            </p>
          </div>
          <ButtonLink href="/contact" variant="light">
            Get in Touch
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
