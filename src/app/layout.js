import {
  Geist,
  Geist_Mono,
  Gowun_Batang,
  Inconsolata,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Still used by /projects (page heading and the project card titles).
const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Bryan Lin",
  description: "Meet Bryan!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable} ${gowunBatang.variable} ${inconsolata.variable} antialiased overflow-x-hidden overscroll-x-none w-full`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
