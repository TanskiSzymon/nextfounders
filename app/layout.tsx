import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextfounders.pl"),
  title: {
    default: "NextFounders — founderzy, którzy działają",
    template: "%s · NextFounders",
  },
  description:
    "Niezależna organizacja zrzeszająca młodych founderów i founderki, którzy faktycznie budują. Wzajemne wsparcie, wspólny rozwój, ścisła selekcja. Wrocław.",
  keywords: [
    "NextFounders",
    "founderzy",
    "startupy",
    "Wrocław",
    "społeczność founderów",
    "organizacja startupowa",
  ],
  alternates: {
    canonical: "https://nextfounders.pl",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://nextfounders.pl",
    siteName: "NextFounders",
    title: "NextFounders — founderzy, którzy działają",
    description:
      "Niezależna organizacja młodych founderów i founderek, którzy faktycznie budują. Wzajemne wsparcie, wspólny rozwój, ścisła selekcja. Wrocław.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextFounders — founderzy, którzy działają",
    description:
      "Niezależna organizacja młodych founderów i founderek, którzy faktycznie budują. Wrocław.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F2E9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-void font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
