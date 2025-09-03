// SEO utility functions and configurations

export const seoConfig = {
  baseUrl: 'https://globalcarnivaljeddah.com',
  siteName: 'Global Carnival Jeddah',
  defaultTitle: 'Global Carnival Jeddah - Discover the World in One Place',
  defaultDescription: 'Step into a world of wonder, color, and culture at Global Carnival Jeddah, a one-of-a-kind destination bringing the magic of global traditions, flavors, and festivals to the heart of our vibrant city.',
  defaultKeywords: 'Global Carnival Jeddah, cultural destination, global traditions, festivals, attractions, events, dining, shopping, Jeddah, Saudi Arabia',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@globalcarnivaljeddah',
  facebookAppId: 'your-facebook-app-id',
  locale: 'en_US',
  alternateLocales: [
    { locale: 'ar', url: '/ar' },
    { locale: 'en', url: '/en' }
  ]
};

// Generate page-specific SEO data
export function generatePageSEO({
  title,
  description,
  keywords,
  path = '',
  image,
  type = 'website',
  locale = 'en',
  noindex = false,
  nofollow = false,
  structuredData = null
}) {
  const baseUrl = seoConfig.baseUrl;
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const fullDescription = description || seoConfig.defaultDescription;
  const fullKeywords = keywords ? `${keywords}, ${seoConfig.defaultKeywords}` : seoConfig.defaultKeywords;
  const canonical = `${baseUrl}/${locale}${path}`;
  const ogImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}${seoConfig.defaultImage}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    canonical,
    ogImage,
    ogType: type,
    locale: locale === 'ar' ? 'ar_SA' : 'en_US',
    noindex,
    nofollow,
    structuredData,
    alternateLocales: seoConfig.alternateLocales.map(alt => ({
      locale: alt.locale,
      url: `${baseUrl}${alt.url}${path}`
    }))
  };
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Discover the World in One Place',
    description: 'Step into a world of wonder, color, and culture at Global Carnival Jeddah. Experience authentic pavilions, global cuisine, interactive activities, and cultural celebrations from around the world.',
    keywords: 'Global Carnival Jeddah, cultural festival, world cultures, pavilions, global cuisine, interactive activities, Jeddah attractions, family entertainment'
  },
  about: {
    title: 'About Global Carnival Jeddah',
    description: 'Learn about Global Carnival Jeddah - a groundbreaking cultural extravaganza bringing the world\'s most vibrant traditions, flavors, and experiences to Saudi Arabia.',
    keywords: 'about Global Carnival Jeddah, cultural extravaganza, world traditions, cultural diversity, interactive experiences, strategic location Jeddah'
  },
  activities: {
    title: 'Interactive Activities & Entertainment',
    description: 'Discover hands-on fun for all ages at Global Carnival Jeddah. Creative workshops, cultural activities, stage entertainment, and interactive experiences.',
    keywords: 'interactive activities, creative workshops, cultural activities, stage entertainment, family fun, hands-on experiences, entertainment Jeddah'
  },
  attractions: {
    title: 'Explore Attractions',
    description: 'Discover amazing attractions across six unique categories at Global Carnival Jeddah. Adventure parks, cultural experiences, family fun, and entertainment for all ages.',
    keywords: 'attractions Jeddah, adventure park, cultural experiences, family attractions, entertainment venues, tourist attractions Saudi Arabia'
  },
  dining: {
    title: 'Global Dining Experience',
    description: 'Savor authentic flavors from around the world at Global Carnival Jeddah. From street food to fine dining, experience global cuisine in cultural settings.',
    keywords: 'global dining, international cuisine, street food, fine dining, cultural restaurants, food experiences, culinary journey Jeddah'
  },
  food: {
    title: 'Global Cuisine & Food',
    description: 'A passport-free feast of world flavors at Global Carnival Jeddah. Experience authentic dishes, traditional recipes, and international street food.',
    keywords: 'global cuisine, international food, traditional recipes, street food, authentic dishes, food festival, culinary experiences'
  },
  pavilion: {
    title: 'Experience Pavilions from Around the World',
    description: 'Explore authentic cultural pavilions representing different regions of the world. Each pavilion showcases unique traditions, crafts, and cultural experiences.',
    keywords: 'cultural pavilions, world cultures, regional pavilions, cultural experiences, traditional crafts, authentic representations, cultural diversity'
  },
  highlights: {
    title: 'Highlights of the Carnival',
    description: 'Discover the main attractions that make Global Carnival Jeddah unforgettable. Adventure parks, balloon displays, sports courts, and more.',
    keywords: 'carnival highlights, main attractions, adventure park, balloon park, sports court, food kiosks, restaurants, parking facilities'
  },
  products: {
    title: 'Global Products & Crafts',
    description: 'Discover authentic products and traditional crafts from around the world. Traditional textiles, jewelry, home decor, and cultural artifacts.',
    keywords: 'global products, traditional crafts, cultural artifacts, authentic goods, international shopping, cultural souvenirs, handmade items'
  },
  events: {
    title: 'Events & Entertainment',
    description: 'Experience vibrant live performances, cultural events, and entertainment at Global Carnival Jeddah. Cultural demonstrations, workshops, and special events.',
    keywords: 'cultural events, live performances, entertainment, cultural demonstrations, workshops, special events, festival entertainment'
  },
  gallery: {
    title: 'Photo Gallery',
    description: 'Capture the magic and beauty of Global Carnival Jeddah through our photo gallery. Visual journey through cultural experiences and attractions.',
    keywords: 'photo gallery, carnival photos, cultural images, visual journey, carnival beauty, cultural experiences, photo collection'
  },
  directory: {
    title: 'Business Directory',
    description: 'Find all businesses and services at Global Carnival Jeddah. Comprehensive directory of shops, restaurants, services, and entertainment venues.',
    keywords: 'business directory, shops directory, services directory, entertainment venues, business listings, carnival businesses'
  },
  overview: {
    title: 'Project Overview',
    description: 'Learn about the comprehensive Global Carnival Jeddah project. Cultural authenticity, interactive experiences, and world-class entertainment.',
    keywords: 'project overview, carnival project, cultural authenticity, interactive experiences, world-class entertainment, modern infrastructure'
  },
  partner: {
    title: 'Partner With Global Carnival Jeddah',
    description: 'Join us in creating the most spectacular carnival experience in the region. Partnership opportunities and business collaboration.',
    keywords: 'partnership opportunities, business collaboration, carnival partnership, cultural partnership, business opportunities, collaboration'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Global Carnival Jeddah. Contact information, inquiries, and support for visitors and partners.',
    keywords: 'contact information, customer support, inquiries, visitor support, partner contact, carnival contact'
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Privacy policy for Global Carnival Jeddah. How we protect and handle your personal information.',
    keywords: 'privacy policy, data protection, personal information, privacy rights, data security'
  },
  terms: {
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using Global Carnival Jeddah services and website.',
    keywords: 'terms and conditions, user agreement, service terms, legal terms, usage terms'
  }
};

// Generate breadcrumb data
export function generateBreadcrumbs(path, locale = 'en') {
  const baseUrl = seoConfig.baseUrl;
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    {
      name: 'Home',
      url: `${baseUrl}/${locale}`
    }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbs.push({
      name: name,
      url: `${baseUrl}/${locale}${currentPath}`
    });
  });

  return breadcrumbs;
}

// Generate canonical URL
export function generateCanonical(path, locale = 'en') {
  return `${seoConfig.baseUrl}/${locale}${path}`;
}

// Generate Open Graph image URL
export function generateOGImage(image, baseUrl = seoConfig.baseUrl) {
  if (!image) return `${baseUrl}${seoConfig.defaultImage}`;
  return image.startsWith('http') ? image : `${baseUrl}${image}`;
}
