import { Metadata } from "next";
import HomePage from "../components/home-page/index";


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
    siteName: 'Lnkr.store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lnkr.store - The Ultimate Link-in-Bio Solution',
    description:
      'Lnkr.store is the ultimate link-in-bio platform for creators, helping you manage links, sell digital products, host 1:1 sessions, and offer courses effortlessly.',
    images: ['/assets/home-page/lnkr.svg'],
    site: '@lnkrstore',
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
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
