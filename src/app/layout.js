import "./globals.css";
import Script from 'next/script';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

export const metadata = {
  title: {
    default: "Global Carnival Jeddah - Discover the World in One Place",
    template: "%s | Global Carnival Jeddah"
  },
  description: "Step into a world of wonder, color, and culture at Global Carnival Jeddah, a one-of-a-kind destination bringing the magic of global traditions, flavors, and festivals to the heart of our vibrant city.",
  keywords: "Global Carnival Jeddah, cultural destination, global traditions, festivals, attractions, events, dining, shopping, Jeddah, Saudi Arabia, cultural extravaganza, world cultures, pavilions, interactive activities",
  authors: [{ name: "Global Carnival Jeddah" }],
  creator: "Global Carnival Jeddah",
  publisher: "Global Carnival Jeddah",
  metadataBase: new URL("https://globalcarnivaljeddah.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: "Global Carnival Jeddah - Discover the World in One Place",
    description: "Step into a world of wonder, color, and culture at Global Carnival Jeddah, a one-of-a-kind destination bringing the magic of global traditions, flavors, and festivals to the heart of our vibrant city.",
    type: "website",
    locale: "en_US",
    url: "https://globalcarnivaljeddah.com/",
    siteName: "Global Carnival Jeddah",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Carnival Jeddah - Cultural Extravaganza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Carnival Jeddah - Discover the World in One Place",
    description: "Step into a world of wonder, color, and culture at Global Carnival Jeddah, a one-of-a-kind destination bringing the magic of global traditions, flavors, and festivals to the heart of our vibrant city.",
    images: ["/og-image.jpg"],
    creator: "@globalcarnivaljeddah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Global Carnival Jeddah",
    "alternateName": "Global Carnival Jeddah",
    "url": "https://globalcarnivaljeddah.com",
    "logo": "https://globalcarnivaljeddah.com/logo.png",
    "description": "A groundbreaking cultural extravaganza that brings the world's most vibrant traditions, flavors, and experiences to the heart of Saudi Arabia.",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carnival Jeddah, Next to Aziz Mall",
      "addressLocality": "Jeddah",
      "addressRegion": "Makkah",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.4858",
      "longitude": "39.1925"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-XX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.facebook.com/globalcarnivaljeddah",
      "https://www.instagram.com/globalcarnivaljeddah",
      "https://www.twitter.com/globalcarnivaljeddah",
      "https://www.youtube.com/globalcarnivaljeddah"
    ]
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Global Carnival Jeddah",
    "description": "A groundbreaking cultural extravaganza that brings the world's most vibrant traditions, flavors, and experiences to the heart of Saudi Arabia.",
    "startDate": "2025-10-23",
    "endDate": "2026-04-09",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Carnival Jeddah",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Next to Aziz Mall",
        "addressLocality": "Jeddah",
        "addressRegion": "Makkah",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.4858",
        "longitude": "39.1925"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Global Carnival Jeddah",
      "url": "https://globalcarnivaljeddah.com"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "SAR",
      "validFrom": "2025-10-23"
    },
    "image": "https://globalcarnivaljeddah.com/og-image.jpg"
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Global Carnival Jeddah",
    "url": "https://globalcarnivaljeddah.com",
    "description": "Discover the world in one place at Global Carnival Jeddah - a cultural extravaganza featuring pavilions, shops, and experiences from around the world.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://globalcarnivaljeddah.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Global Carnival Jeddah",
      "logo": {
        "@type": "ImageObject",
        "url": "https://globalcarnivaljeddah.com/logo.png"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Oswald, system-ui, sans-serif' }}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PK8QE4THP2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PK8QE4THP2', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
