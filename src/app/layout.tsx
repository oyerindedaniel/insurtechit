import { siteUrl } from '@/config';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { fontInter, fontPoppins } from './font';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['Insurtechit'],
  authors: [
    {
      name: siteConfig.name,
      url: siteUrl
    }
  ],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        alt: `${siteConfig.name}`,
        width: '1885',
        height: '871'
      }
    ],
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(cn('font-inter'), fontInter.variable, fontPoppins.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
