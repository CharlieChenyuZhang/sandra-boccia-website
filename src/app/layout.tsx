import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandra Boccia - Strategist, Speaker & Storyteller",
  description:
    "Strategist, speaker, and storyteller linking innovation, entrepreneurship, and sustainability. Based in Cambridge, Massachusetts.",
  keywords: [
    "strategist",
    "speaker",
    "storyteller",
    "innovation",
    "entrepreneurship",
    "sustainability",
    "Harvard",
    "MIT",
  ],
  authors: [{ name: "Sandra Boccia" }],
  openGraph: {
    title: "Sandra Boccia - Strategist, Speaker & Storyteller",
    description:
      "Strategist, speaker, and storyteller linking innovation, entrepreneurship, and sustainability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
