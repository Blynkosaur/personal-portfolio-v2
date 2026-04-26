import { Gowun_Batang, Inconsolata } from "next/font/google";
import "./globals.css";
import Presence from "@/components/Presence";
import DotGrid from "@/components/DotGrid";

import { Analytics } from "@vercel/analytics/next";

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
        className={`${gowunBatang.variable} ${inconsolata.variable} antialiased overflow-x-hidden overscroll-x-none w-full`}
      >
        <DotGrid
          dotSize={2}
          gap={12}
          baseColor="#6b4c93"
          activeColor="#CCD6F5"
          style={{ opacity: 0.6 }}
        />

        <Analytics />
        {children}
        <Presence />
      </body>
    </html>
  );
}
