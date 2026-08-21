import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "John Kennedy International Schools | Building Excellence. Shaping the Future.",
  description: "John Kennedy International Schools - A premium private school in Surulere, Lagos, Nigeria providing quality education from nursery to secondary level. Building excellence, character, and knowledge.",
  keywords: ["John Kennedy International Schools", "John Kennedy International School Lagos", "Private school in Surulere Lagos", "Nursery school in Surulere", "Secondary school in Surulere", "School in Aguda Surulere", "Schools in Surulere Lagos"],
  openGraph: {
    title: "John Kennedy International Schools | Building Excellence. Shaping the Future.",
    description: "John Kennedy International Schools - A premium private school in Surulere, Lagos, Nigeria providing quality education from nursery to secondary level.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
