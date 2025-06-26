import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// Use environment variables for analytics and verification
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: 'Percentage Increase Calculator',
  description:
    'Free online percentage calculator to find percentage increase, decrease, and change between two values. Easy-to-use tool with step-by-step solutions and examples.',
  keywords: 'percentage increase calculator',
  authors: [{ name: 'Percentage Increase Calculator Team' }],
  creator: 'Percentage Increase Calculator',
  publisher: 'Percentage Increase Calculator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://percentageincreasecalculator.org'),
  alternates: {
    canonical: 'https://percentageincreasecalculator.org/',
  },
  openGraph: {
    title:
      'Percentage Increase Calculator - Calculate Percentage Increase & Decrease',
    description:
      'Calculate percentage increase, decrease, and change between two values quickly and accurately with our free online tool.',
    url: 'https://percentageincreasecalculator.org',
    siteName: 'Percentage Increase Calculator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Percentage Increase Calculator - Percentage Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
    google: GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Percentage Increase Calculator - Percentage Calculator",
              "description": "Free online percentage calculator to find percentage increase, decrease, and change between two values.",
              "url": "https://percentageincreasecalculator.org",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "Percentage Increase Calculator Team"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
