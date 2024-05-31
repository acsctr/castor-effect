import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "Le castor, roi du climat",
  description: "Le castor, allié contre les aléas climatiques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      <script src="/scripts/intersection.js"></script>
      <script src="/scripts/intersection1.js"></script>
      <script src="/scripts/intersection2.js"></script>
      <script src="/scripts/intersection3.js"></script>
        {/* <script src="/scripts/castor.js"></script> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
