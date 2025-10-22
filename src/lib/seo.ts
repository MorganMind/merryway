export const defaultSEO = {
  title: 'Merryway — Family plans, done happily.',
  description: 'Merryway is a joyful, privacy-safe planner that suggests what fits your family now, drafts itineraries in chat, and saves your wins—like a modern Mary Poppins.',
  canonical: 'https://merryway.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://merryway.app',
    siteName: 'Merryway',
    title: 'Merryway — Family plans, done happily.',
    description: 'Merryway is a joyful, privacy-safe planner that suggests what fits your family now, drafts itineraries in chat, and saves your wins—like a modern Mary Poppins.',
    images: [
      {
        url: 'https://merryway.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Merryway - Family plans, done happily',
      },
    ],
  },
  twitter: {
    handle: '@merrywayapp',
    site: '@merrywayapp',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#7B6EF6',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
  ],
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Merryway',
  applicationCategory: 'Lifestyle',
  operatingSystem: 'iOS, Android',
  description: 'A joyful, privacy-safe family planner that suggests what fits your family now, drafts itineraries in chat, and saves your wins.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Join waitlist for early access',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
};
