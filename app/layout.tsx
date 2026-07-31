import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nubek Media | Creative Advertising Agency",
    template: "%s | Nubek Media",
  },
  description:
    "Nubek Media is a creative advertising agency specializing in branding, digital marketing, video production, animation, web design, and strategic communication.",
  keywords: [
    "Advertising Agency",
    "Branding",
    "Digital Marketing",
    "Creative Agency",
    "Video Production",
    "Animation",
    "Web Design",
    "Egypt",
    "Nubek Media",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
