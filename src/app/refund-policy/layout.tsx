import React from "react";
import Navbar from "../../components/home-page/navbar/index";
import Container from "@/components/home-page/container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
