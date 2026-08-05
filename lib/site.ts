export const siteConfig = {
  name: "KB Enterprise Solutions LLC",
  shortName: "KB",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.kbenterprisesolutions.com",
  email: "khababmahboobbutt@gmail.com",
  linkedin: "https://www.linkedin.com/company/kb-enterprise-solutions",
  founder: "Khabab Butt",
  address: {
    street: "7901 4th St N, Ste 300",
    city: "St. Petersburg",
    region: "FL",
    postalCode: "33702",
    country: "United States"
  }
};

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  founder: {
    "@type": "Person",
    name: siteConfig.founder
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: "US"
  },
  areaServed: ["United States", "United Arab Emirates", "Europe"],
  serviceType: [
    "Microsoft Dynamics 365 Business Central Consulting",
    "ERP Implementation",
    "AL Development",
    "Business Central Integrations",
    "Business Central Support"
  ],
  sameAs: [siteConfig.linkedin]
};
