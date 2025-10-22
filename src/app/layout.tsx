import type { Metadata } from "next";
import { Eczar, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { defaultSEO, structuredData } from "@/lib/seo";

const eczar = Eczar({
  variable: "--font-eczar",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  openGraph: defaultSEO.openGraph,
  twitter: defaultSEO.twitter,
  other: defaultSEO.additionalMetaTags,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
          <body
            className={`${eczar.variable} ${spaceGrotesk.variable} font-body antialiased`}
          >
        {children}
      </body>
    </html>
  );
}
