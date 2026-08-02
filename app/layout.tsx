import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NUBEK Media | Creative Advertising Agency in Egypt",
    template: "%s | NUBEK Media",
  },

  description:
    "NUBEK Media is a creative advertising agency in Egypt specializing in branding, digital marketing, social media management, motion graphics, animation, and creative solutions.",

  keywords: [
    "Advertising Agency Egypt",
    "Creative Agency Egypt",
    "Branding Agency Cairo",
    "Digital Marketing Agency Egypt",
    "Social Media Marketing Egypt",
    "Motion Graphics Agency",
    "Animation Studio Egypt",
    "NUBEK Media",
  ],

  authors: [
    {
      name: "NUBEK Media",
    },
  ],

  creator: "NUBEK Media",

  metadataBase: new URL(
    "https://www.nubekmedia.com"
  ),

  openGraph: {
    title:
      "NUBEK Media | Creative Advertising Agency in Egypt",

    description:
      "Building brands through strategy, creativity, and digital experiences.",

    url:
      "https://www.nubekmedia.com",

    siteName:
      "NUBEK Media",

    locale:
      "en_US",

    type:
      "website",

    images: [
      {
        url:
          "/images/og-image.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "NUBEK Media Creative Agency",
      },
    ],
  },


  twitter: {
    card:
      "summary_large_image",

    title:
      "NUBEK Media | Creative Advertising Agency",

    description:
      "Creative advertising, branding, and digital experiences.",

    images:
      [
        "/images/og-image.jpg"
      ],
  },


  robots: {
    index:
      true,

    follow:
      true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}