import React from "react";
import SnackBar from "../../components/brand-snackbar/index";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <SnackBar />
      </body>
    </html>
  );
}
