import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rayssafernanda.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rayssa Fernanda | Massoterapeuta em Realengo",
  description:
    "Massoterapia personalizada em Realengo, Rio de Janeiro. Massagem relaxante, terapêutica, drenagem linfática, modeladora, pós-operatório e ventosaterapia.",
  keywords: [
    "massoterapeuta em Realengo",
    "massagem relaxante Realengo",
    "drenagem linfática Realengo",
    "massagem terapêutica Rio de Janeiro",
    "Rayssa Fernanda massoterapia",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/rayssa-logo.webp", type: "image/webp" }],
    apple: "/rayssa-logo.webp",
  },
  openGraph: {
    title: "Rayssa Fernanda | Massoterapia em Realengo",
    description: "Alívio para o corpo. Leveza para a rotina.",
    url: "/",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 940, alt: "Rayssa Fernanda Massoterapia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayssa Fernanda | Massoterapia em Realengo",
    description: "Alívio para o corpo. Leveza para a rotina.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
