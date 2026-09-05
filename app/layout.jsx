import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CustomCursor from "@/components/CustomCursor";
import { LangProvider } from "@/lib/LangContext";
import NoiseOverlay from "@/components/NoiseOverlay";

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

};

export default function RootLayout({ children }) {
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es">
      <head>
        {/* Meta Pixel — activo solo si NEXT_PUBLIC_META_PIXEL_ID está definido en Vercel */}
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Google tag (GA4) — activo solo si NEXT_PUBLIC_GA_ID está definido en Vercel */}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-tag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

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
              logo: `${BASE_URL}/assets/vyntra-icon.png`,
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
      <body suppressHydrationWarning style={{ paddingTop: "clamp(56px, 5vw, 88px)" }}>
        {metaPixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        <NoiseOverlay />
        <LangProvider>
          <ScrollProgressBar />
          <CustomCursor />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </LangProvider>
      </body>
    </html>
  );
}
