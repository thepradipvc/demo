import React from "react";
import "./globals.scss";
import Logo from "../assets/home-page/lnkr.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
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
        <title>Lnkr.store - The Ultimate Link-in-Bio Solution</title>
        <meta
          name="description"
          content="Lnkr.store is the perfect link-in-bio solution for creators, enabling you to manage all your links, sell digital products, offer courses, and book 1:1 sessions seamlessly."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Lnkr.store - The Ultimate Link-in-Bio Solution"
        />
        <meta
          property="og:description"
          content="Lnkr.store is the perfect link-in-bio solution for creators. Manage all your links, sell digital products, offer courses, and book 1:1 sessions seamlessly."
        />
        <meta property="og:url" content="https://lnkr.store" />
        <meta property="og:image" content={Logo} />
        <meta property="og:site_name" content="Lnkr.store" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lnkr.store - The Ultimate Link-in-Bio Solution"
        />
        <meta
          name="twitter:description"
          content="Lnkr.store is the ultimate link-in-bio platform for creators, helping you manage links, sell digital products, host webinars, and offer courses effortlessly."
        />
        <meta name="twitter:image" content={Logo} />
        <meta name="twitter:site" content="@lnkrstore" />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="link in bio, digital products, creator tools, course sales, 1:1 sessions, webinars, lnkr.store"
        />
        <meta name="author" content="Lnkr.store" />

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
