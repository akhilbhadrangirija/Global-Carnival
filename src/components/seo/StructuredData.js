// Structured Data Schemas for Global Carnival Jeddah

export const organizationSchema = {
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

export const eventSchema = {
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

export const breadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Global Carnival Jeddah",
  "description": "A cultural carnival featuring pavilions, shops, and experiences from around the world",
  "url": "https://globalcarnivaljeddah.com",
  "telephone": "+966-XX-XXX-XXXX",
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
  "openingHours": "Mo-Su 09:00-23:00",
  "priceRange": "$$",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Wheelchair Accessible",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Family Friendly",
      "value": true
    }
  ],
  "image": "https://globalcarnivaljeddah.com/og-image.jpg"
};

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Organization",
    "name": "Global Carnival Jeddah"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Global Carnival Jeddah",
    "logo": {
      "@type": "ImageObject",
      "url": "https://globalcarnivaljeddah.com/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": "Global Carnival Jeddah"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "SAR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Global Carnival Jeddah"
    }
  }
});

export const webSiteSchema = {
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
