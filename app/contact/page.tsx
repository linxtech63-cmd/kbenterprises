import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KB Enterprise Solutions LLC to discuss Microsoft Dynamics 365 Business Central implementation, customization, integrations, and support.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Get in Touch | KB Enterprise Solutions LLC",
    description:
      "Ready to discuss your Microsoft Dynamics 365 Business Central project? Contact KB Enterprise Solutions LLC.",
    url: absoluteUrl("/contact")
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[#F7F9FC] py-20">
        <div className="container-shell">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
              Contact
            </p>
            <h1 className="text-4xl leading-tight md:text-5xl">Get in Touch</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Ready to discuss your Microsoft Dynamics 365 Business Central project? We&apos;d love
              to hear about your requirements and will respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="soft-card overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl">Company Information</h2>
                <div className="mt-6 grid gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={22} className="mt-1 shrink-0 text-[#0078D4]" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#101827]">{siteConfig.name}</p>
                      <address className="mt-2 not-italic text-sm leading-7 text-slate-600">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.region}{" "}
                        {siteConfig.address.postalCode}
                        <br />
                        {siteConfig.address.country}
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={22} className="mt-1 shrink-0 text-[#0078D4]" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#101827]">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="focus-ring mt-2 inline-block rounded text-sm text-[#0078D4]"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={22} className="mt-1 shrink-0 text-[#0078D4]" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#101827]">Business Hours</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Monday-Friday
                        <br />
                        9:00 AM-6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                title="Map showing KB Enterprise Solutions registered office location"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=7901%204th%20St%20N%2C%20Ste%20300%2C%20St.%20Petersburg%2C%20FL%2033702&output=embed"
              />
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
