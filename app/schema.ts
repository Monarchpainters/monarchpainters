export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Monarch Painters",
  "url": "https://www.monarchpainters.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.monarchpainters.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Monarch Painters",
  "url": "https://www.monarchpainters.co.uk",
  "logo": "https://www.monarchpainters.co.uk/images/logo/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-07437-531733",
    "contactType": "customer service",
    "email": "info@monarchpainters.co.uk"
  },
  "sameAs": [
    "https://www.facebook.com/monarchpainters", // Placeholder, replace with actual social media links
    "https://www.instagram.com/monarchpainters"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Monarch Painters",
  "image": "https://www.monarchpainters.co.uk/images/logo/logo.png",
  "url": "https://www.monarchpainters.co.uk",
  "telephone": "+44-07437-531733",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6 Hill Top View, Handsacre",
    "addressLocality": "Rugeley",
    "addressRegion": "Staffordshire",
    "postalCode": "WS15 4DG",
    "addressCountry": "UK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.7399", // Approximate coordinates for Rugeley, Staffordshire
    "longitude": "-1.9399" // Approximate coordinates for Rugeley, Staffordshire
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "££",
  "servesCuisine": [
    "Residential Painting",
    "Commercial Painting",
    "Wallpapering",
    "Decorative Finishes"
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.monarchpainters.co.uk"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.monarchpainters.co.uk/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Projects",
      "item": "https://www.monarchpainters.co.uk/projects"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": "https://www.monarchpainters.co.uk/contact"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "About Us",
      "item": "https://www.monarchpainters.co.uk/about"
    }
  ]
};
