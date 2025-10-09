import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
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
        className={`${comfortaa.variable} antialiased overflow-x-hidden overscroll-x-none w-full`}
      >
        {children}
      </body>
    </html>
  );
}
