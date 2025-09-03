import Head from 'next/head';

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  locale = 'en',
  alternateLocales = []
}) {
  const baseUrl = 'https://globalcarnivaljeddah.com';
  const fullTitle = title ? `${title} | Global Carnival Jeddah` : 'Global Carnival Jeddah - Discover the World in One Place';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Global Carnival Jeddah" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={locale} />
      <meta name="language" content={locale} />
      
      {/* Alternate Language Versions */}
      {alternateLocales.map((altLocale) => (
        <link
          key={altLocale.locale}
          rel="alternate"
          hrefLang={altLocale.locale}
          href={`${baseUrl}/${altLocale.locale}${canonical || ''}`}
        />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || 'Global Carnival Jeddah'} />
      <meta property="og:site_name" content="Global Carnival Jeddah" />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : 'en_US'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title || 'Global Carnival Jeddah'} />
      
      {/* Additional Meta Tags */}
      <meta name="geo.region" content="SA-02" />
      <meta name="geo.placename" content="Jeddah" />
      <meta name="geo.position" content="21.4858;39.1925" />
      <meta name="ICBM" content="21.4858, 39.1925" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
