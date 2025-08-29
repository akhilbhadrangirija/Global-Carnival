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

export const metadata = {
  title: "Global carnival Jeddah - Discover the World in One Place",
  description: "Step into a world of wonder, color, and culture at Global carnival Jeddah, a one-of-a-kind destination bringing the magic of global traditions, flavors, and festivals to the heart of our vibrant city.",
  keywords: "Global carnival Jeddah, cultural destination, global traditions, festivals, attractions, events, dining, shopping",
  authors: [{ name: "Global carnival Jeddah" }],
  openGraph: {
    title: "Global carnival Jeddah - Discover the World in One Place",
    description: "Step into a world of wonder, color, and culture at Global carnival Jeddah",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global carnival Jeddah - Discover the World in One Place",
    description: "Step into a world of wonder, color, and culture at Global carnival Jeddah",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
