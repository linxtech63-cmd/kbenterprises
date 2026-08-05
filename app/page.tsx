import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Factory,
  Globe2,
  HeartPulse,
  Landmark,
  MonitorCog,
  Package,
  Settings2,
  ShoppingCart,
  Truck,
  UserRoundCheck
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { DashboardVisual } from "@/components/dashboard-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 Business Central Consulting",
  description:
    "KB Enterprise Solutions provides Microsoft Dynamics 365 Business Central implementation, customization, integrations, AL development, and ongoing support.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Microsoft Dynamics 365 Business Central Consulting | KB Enterprise Solutions LLC",
    description:
      "Reliable ERP implementation, customization, integrations, and Business Central support for businesses worldwide.",
    url: absoluteUrl("/")
  }
};

const services = [
  {
    title: "Business Central Implementation",
    description:
      "End-to-end Business Central implementation designed around your unique business processes. We handle setup, configuration, data migration, testing, training, and go-live support.",
    icon: MonitorCog
  },
  {
    title: "Customization & Development",
    description:
      "Custom AL extensions, APIs, integrations, reports, automation, and workflow development that extend Business Central beyond its standard capabilities.",
    icon: Settings2
  },
  {
    title: "Ongoing Support",
    description:
      "Reliable post-implementation support, troubleshooting, upgrades, performance optimization, and continuous improvements.",
    icon: CheckCircle2
  }
];

const features = [
  { title: "5+ Years of Experience", icon: BriefcaseBusiness },
  { title: "Dedicated Senior Consultant", icon: UserRoundCheck },
  { title: "Global Client Experience", icon: Globe2 },
  { title: "Cost-Effective ERP Consulting", icon: BadgeDollarSign }
];

const industries = [
  { title: "Energy & Oil Services", icon: Building2 },
  { title: "Manufacturing", icon: Factory },
  { title: "Retail", icon: ShoppingCart },
  { title: "E-Commerce", icon: Package },
  { title: "Professional Services", icon: BriefcaseBusiness },
  { title: "Finance & Accounting", icon: Landmark },
  { title: "Distribution", icon: Package },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Logistics", icon: Truck }
];

const process = [
  ["Discovery", "Understand business requirements and objectives."],
  ["Planning", "Design a scalable ERP solution."],
  ["Development", "Implement and customize Business Central."],
  ["Deployment", "Testing, migration, user training, and go-live."],
  ["Support", "Continuous improvements and long-term support."]
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid border-b border-slate-200 bg-white">
        <div className="container-shell grid min-h-[calc(100vh-80px)] items-center gap-14 py-16 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
              Microsoft Dynamics 365 Business Central
            </p>
            <h1 className="max-w-3xl text-4xl leading-tight text-[#101827] md:text-6xl">
              Microsoft Dynamics 365 Business Central Consulting & Development
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Expert ERP solutions tailored to your business. From implementation to advanced
              customization, integrations, and ongoing support, we help organizations maximize the
              value of Microsoft Dynamics 365 Business Central through reliable, scalable, and
              business-focused solutions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get in Touch</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <DashboardVisual />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#F7F9FC]">
        <div className="container-shell">
          <SectionHeading eyebrow="What We Do" title="Business Central expertise for critical ERP work" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="soft-card h-full p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <service.icon size={30} className="text-[#0078D4]" aria-hidden="true" />
                  <h3 className="mt-6 text-xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Why Businesses Choose KB Enterprise Solutions"
                description="We provide enterprise-level Microsoft Dynamics 365 Business Central consulting without the overhead of large consulting firms. Every project is handled directly by an experienced consultant from discovery to delivery."
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.05}>
                  <div className="soft-card flex h-full items-start gap-4 p-6">
                    <feature.icon size={24} className="mt-1 shrink-0 text-[#0F6CBD]" aria-hidden="true" />
                    <h3 className="text-lg leading-7">{feature.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F7F9FC]">
        <div className="container-shell">
          <SectionHeading eyebrow="Industries" title="Industries We Serve" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 0.025}>
                <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#0078D4]">
                  <industry.icon size={22} className="text-[#0078D4]" aria-hidden="true" />
                  <span className="font-semibold text-[#101827]">{industry.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Our Process" title="A clear delivery model from discovery to support" />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {process.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="relative h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF4FF] text-sm font-semibold text-[#0078D4]">
                    {index + 1}
                  </div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002050] py-20 text-white">
        <div className="container-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl leading-tight text-white md:text-4xl">
              Ready to Transform Your Business Central Environment?
            </h2>
            <p className="mt-5 text-base leading-8 text-blue-100">
              Let&apos;s discuss your Microsoft Dynamics 365 Business Central project and discover
              how we can help improve efficiency, automate operations, and support your business
              growth.
            </p>
          </div>
          <ButtonLink href="/contact" variant="light" className="shrink-0">
            Schedule a Consultation <ArrowRight className="ml-2" size={17} aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
