import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xelvion — Software & AI Startup",
  description:
    "Xelvion is building MegaMart (e-commerce prototype) and CineVN (video player tech demo). Early-stage startup, currently in development.",
  metadataBase: new URL("https://xelvion.world"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Xelvion — Software & AI Startup",
    description:
      "Early-stage startup building e-commerce prototype and video tech demo.",
    url: "https://xelvion.world",
    siteName: "Xelvion",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xelvion — Software & AI Startup",
    description:
      "Early-stage startup building e-commerce prototype and video tech demo.",
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
