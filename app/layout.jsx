import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CustomCursor from "@/components/CustomCursor";
import { LangProvider } from "@/lib/LangContext";

const BASE_URL = "https://vyntra-orbit-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  verification: {
    google: "PtgzjtRCvPrhhJasmF1Q4LzFAGJQyaCZ2lddpB-7Eh8",
  },

  title: {
    default: "Vyntra Orbit — Full-Stack Developer Studio",
    template: "%s | Vyntra Orbit",
  },
  description:
    "Vyntra Orbit es un estudio de desarrollo digital en Colombia. Construimos plataformas web, productos SaaS y sistemas de automatización. React · Node.js · MySQL. Disponible para proyectos freelance.",

  keywords: [
    "Vyntra Orbit",
    "Vyntra",
    "Mauricio Rodriguez",
    "desarrollador full stack Colombia",
    "full stack developer Colombia",
    "desarrollo web Colombia",
    "SaaS developer",
    "React developer Colombia",
    "Node.js developer",
    "freelance developer Colombia",
    "studio desarrollo digital",
  ],

  authors: [{ name: "Mauricio Rodriguez", url: BASE_URL }],
  creator: "Vyntra Orbit",
  publisher: "Vyntra Orbit",

  /* Open Graph — para compartir en redes sociales */
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Vyntra Orbit",
    title: "Vyntra Orbit — Full-Stack Developer Studio",
    description:
      "Estudio de desarrollo digital en Colombia. Plataformas web, SaaS y automatización. React · Node.js · MySQL.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyntra Orbit — Full-Stack Developer Studio",
      },
    ],
  },

  /* Twitter/X card */
  twitter: {
    card: "summary_large_image",
    title: "Vyntra Orbit — Full-Stack Developer Studio",
    description:
      "Estudio de desarrollo digital en Colombia. Plataformas web, SaaS y automatización.",
    images: ["/og-image.png"],
    creator: "@vyntra_orbit",
  },

  /* Robots — decirle a Google que indexe */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* Canonical URL */
  alternates: {
    canonical: BASE_URL,
  },

  /* Favicon y icons */
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org JSON-LD — le dice a Google exactamente qué eres */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vyntra Orbit",
              description:
                "Estudio de desarrollo digital especializado en plataformas web, productos SaaS y automatización. Colombia.",
              url: BASE_URL,
              logo: `${BASE_URL}/assets/logo-vyntra.png`,
              founder: {
                "@type": "Person",
                name: "Mauricio Rodriguez",
                jobTitle: "Full-Stack Developer",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
                addressLocality: "Colombia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "liu.galax.dev.ops@gmail.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.instagram.com/vyntra_orbit/",
                "https://github.com/Liuminedes",
                "https://www.linkedin.com/in/mauricio-rodriguez-lemos-78a33b268/",
              ],
              serviceType: [
                "Web Development",
                "SaaS Development",
                "UI/UX Design",
                "Automation",
              ],
            }),
          }}
        />
      </head>
      <body style={{ paddingTop: "clamp(60px, 6vw, 96px)" }}>
        <LangProvider>
          <CustomCursor />
          <StairTransition />
          <PageTransition>
            <Header />
            {children}
          </PageTransition>
        </LangProvider>
      </body>
    </html>
  );
}
