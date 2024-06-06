import type { Metadata } from "next";
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
      <script src="/scripts/game.js" defer/>
      </head>
      <body className="text-white max-w-5xl bg-river bg-contain">{children}</body>
    </html>
  );
}
