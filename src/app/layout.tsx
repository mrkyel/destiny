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
  title: "나의 운명 - 명리학 블로그",
  description: "명리학을 통해 나의 운명을 알아보고, 인생의 방향을 찾아보세요.",
  keywords: ["명리학", "사주", "운세", "운명", "블로그"],
  authors: [{ name: "나의 운명" }],
  openGraph: {
    title: "나의 운명 - 명리학 블로그",
    description:
      "명리학을 통해 나의 운명을 알아보고, 인생의 방향을 찾아보세요.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "나의 운명 - 명리학 블로그",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
