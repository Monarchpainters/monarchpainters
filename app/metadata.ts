import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Monarch Painters | Elevate Your Space with Timeless Elegance",
  description: "Expert Painting & Decorating in Staffordshire, UK. Specializing in residential and commercial painting, wallpapering, and decorative finishes. Transform your space with our professional and reliable services.",
  keywords: "monarch painters, painting and decorating, staffordshire painters, commercial painting, residential painting, wallpapering, decorative finishes, professional painters, reliable painters, UK painters",
  authors: [{ name: "Monarch Painters" }],
  creator: "Monarch Painters",
  publisher: "Monarch Painters",
  openGraph: {
    title: "Monarch Painters | Elevate Your Space with Timeless Elegance",
    description: "Expert Painting & Decorating in Staffordshire, UK. Specializing in residential and commercial painting, wallpapering, and decorative finishes. Transform your space with our professional and reliable services.",
    url: "https://www.monarchpainters.co.uk",
    siteName: "Monarch Painters",
    images: [
      {
        url: "https://www.monarchpainters.co.uk/images/logo/logo.png", // Assuming this is the correct path to your logo
        width: 800,
        height: 600,
        alt: "Monarch Painters Logo",
      },
      {
        url: "https://www.monarchpainters.co.uk/images/logo/logo.webp", // Assuming this is the correct path to your logo
        width: 800,
        height: 600,
        alt: "Monarch Painters Logo",
      },
    ],
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monarch Painters | Elevate Your Space with Timeless Elegance",
    description: "Expert Painting & Decorating in Staffordshire, UK. Specializing in residential and commercial painting, wallpapering, and decorative finishes. Transform your space with our professional and reliable services.",
    images: ["https://www.monarchpainters.co.uk/images/logo/logo.png"], // Assuming this is the correct path to your logo
  },
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon_io/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon_io/favicon-32x32.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
}
