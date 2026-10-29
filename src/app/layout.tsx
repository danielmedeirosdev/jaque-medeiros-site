import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StarBackdrop } from "@/components/StarBackdrop";
import { ScrollReveal } from "@/components/ScrollReveal";
import { brand } from "@/content/brand";
import { person } from "@/content/person";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  applicationName: person.publicName,
  title: {
    default: site.title,
    template: `%s · ${person.publicName}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: brand.favicon, type: "image/svg+xml" },
      { url: brand.favicon32, sizes: "32x32", type: "image/png" },
    ],
    shortcut: brand.favicon,
    apple: brand.appleTouchIcon,
  },
  openGraph: {
    title: `${person.publicName} — site oficial`,
    description: site.description,
    locale: site.locale,
    type: "website",
    url: site.domain,
    images: [
      {
        url: brand.ogImage,
        width: 1200,
        height: 630,
        alt: `${person.publicName} — ${person.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.publicName} — site oficial`,
    description: site.description,
    images: [brand.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: `${person.publicName} — site oficial`,
      description: site.description,
      inLanguage: "pt-BR",
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.domain}/#profilepage`,
      url: site.domain,
      name: `${person.publicName} — site oficial`,
      isPartOf: { "@id": `${site.domain}/#website` },
      mainEntity: { "@id": `${site.domain}/#person` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Person",
      "@id": `${site.domain}/#person`,
      name: person.publicName,
      alternateName: person.fullName,
      url: site.domain,
      image: `${site.domain}${brand.ogImage}`,
      jobTitle: person.role,
      affiliation: {
        "@type": "Organization",
        name: person.party.name,
        alternateName: person.party.acronym,
      },
      sameAs: [
        "https://www.instagram.com/jaquemedeirospt/",
        "https://www.labirinto.labjor.unicamp.br/author/jacqueline-medeiros/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: person.city,
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${archivo.variable} page-shell antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <StarBackdrop />
        <ScrollReveal />
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
