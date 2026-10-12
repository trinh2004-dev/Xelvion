import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xelvion — Engineering Scalable Software & AI Architectures",
  description:
    "Xelvion operates production-grade web platforms: MegaMart (e-commerce core at megamart24.tech) and CineVN (adaptive HLS streaming player at cinevn.me). Powered by modern microservices, Docker orchestration, and Anthropic Claude AI reasoning.",
  metadataBase: new URL("https://xelvion.world"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "Xelvion",
    "anhuynh@xelvion.world",
    "megamart24.tech",
    "cinevn.me",
    "Claude Startups",
    "Anthropic Claude API",
    "MegaMart E-Commerce",
    "CineVN HLS Streaming",
    "Adaptive Bitrate",
    "NestJS",
    "Next.js 14",
    "Docker Architecture",
    "AI Startup",
  ],
  openGraph: {
    title: "Xelvion — Engineering Scalable Software & AI Architectures",
    description:
      "Fullstack web ecosystems & Anthropic Claude AI reasoning. Live production deployments at megamart24.tech and cinevn.me.",
    url: "https://xelvion.world",
    siteName: "Xelvion",
    type: "website",
    images: [
      {
        url: "/images/cinevn-real.png",
        width: 1920,
        height: 1080,
        alt: "CineVN Live Platform at cinevn.me",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelvion — Engineering Scalable Software & AI Architectures",
    description:
      "Fullstack web ecosystems & Anthropic Claude AI reasoning. Live production deployments at megamart24.tech and cinevn.me.",
    images: ["/images/cinevn-real.png"],
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
      <head>
        <meta name="theme-color" content="#070913" />
      </head>
      <body>{children}</body>
    </html>
  );
}
