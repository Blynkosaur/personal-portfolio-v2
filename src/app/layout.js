import { Gowun_Batang, Inconsolata } from "next/font/google";
import "./globals.css";
import Presence from "@/components/Presence";

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
        {children}
        <Presence />
      </body>
    </html>
  );
}
