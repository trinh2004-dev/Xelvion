import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xelvion — Building useful technology",
  description:
    "Xelvion is developing software and AI-powered products to solve practical problems. Currently in development.",
  metadataBase: new URL("https://xelvion.world"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Xelvion — Building useful technology",
    description:
      "We are developing software and AI-powered products to solve practical problems.",
    url: "https://xelvion.world",
    siteName: "Xelvion",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xelvion — Building useful technology",
    description:
      "We are developing software and AI-powered products to solve practical problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
