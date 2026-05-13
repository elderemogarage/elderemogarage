import type { Metadata } from "next";
import { Metal_Mania, Oswald, Special_Elite } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-garage",
  subsets: ["latin"],
});

const metalMania = Metal_Mania({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  variable: "--font-typewriter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Elder Emo Garage",
  description: "Pop-punk auto repair, garage content, and merch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${metalMania.variable} ${specialElite.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
