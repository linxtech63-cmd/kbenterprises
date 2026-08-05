import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, organizationSchema, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Microsoft Dynamics 365 Business Central Consulting | KB Enterprise Solutions LLC",
    template: "%s | KB Enterprise Solutions LLC"
  },
  description:
    "KB Enterprise Solutions provides Microsoft Dynamics 365 Business Central consulting, ERP implementation, custom development, integrations, AL development, and ongoing support for businesses worldwide.",
  applicationName: siteConfig.name,
  authors: [{ name: "KB Enterprise Solutions LLC" }],
  creator: "KB Enterprise Solutions LLC",
  publisher: "KB Enterprise Solutions LLC",
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: "Microsoft Dynamics 365 Business Central Consulting | KB Enterprise Solutions LLC",
    description:
      "ERP implementation, Business Central custom development, integrations, AL development, and ongoing support from an experienced senior consultant."
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Dynamics 365 Business Central Consulting | KB Enterprise Solutions LLC",
    description:
      "Enterprise-level Microsoft Dynamics 365 Business Central consulting without large-firm overhead."
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
