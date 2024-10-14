import React from "react";
import "./globals.scss";
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Lnkr.store - The Ultimate Link-in-Bio Solution',
  description:
    'Lnkr.store is the perfect link-in-bio solution for creators, enabling you to manage all your links, sell digital products, offer courses, and book 1:1 sessions seamlessly.',
  openGraph: {
    type: 'website',
    url: 'https://lnkr.store',
    title: 'Lnkr.store - The Ultimate Link-in-Bio Solution',
    description:
      'Lnkr.store is the perfect link-in-bio solution for creators. Manage all your links, sell digital products, offer courses, and book 1:1 sessions seamlessly.',
    images: [
      {
        url: '/assets/home-page/lnkr.svg',
        width: 800,
        height: 600,
        alt: 'Lnkr.store Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lnkr.store - The Ultimate Link-in-Bio Solution',
    description:
      'Lnkr.store is the ultimate link-in-bio platform for creators, helping you manage links, sell digital products, host 1:1 sessions, and offer courses effortlessly.',
    images: ['/assets/home-page/lnkr.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'link in bio',
    'digital products',
    'creator tools',
    'course sales',
    '1:1 sessions',
    'webinars',
    'lnkr.store',
  ],
  authors: [{ name: 'Lnkr.store' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // @ts-ignore
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </>
      <body
        style={{
          fontFamily: "Bricolage Grotesque",
          fontOpticalSizing: "auto",
          fontWeight: 200,
          fontStyle: "normal",
        }}
      >
        {children}
      </body>
    </html>
  );
}
