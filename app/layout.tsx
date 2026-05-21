import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valdr Studio | Premium Websites & Web Apps",
  description:
    "Premium digital experiences built with purpose. Valdr Studio creates modern websites and web apps for brands that want to stand out online.",
  metadataBase: new URL("https://www.valdrstudio.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Valdr Studio | Premium Websites & Web Apps",
    description:
      "Premium websites and web apps for brands that want to stand out online.",
    url: "https://www.valdrstudio.com",
    siteName: "Valdr Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valdr Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valdr Studio | Premium Websites & Web Apps",
    description:
      "Premium websites and web apps for brands that want to stand out online.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}