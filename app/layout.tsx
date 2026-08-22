import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "John Kennedy International Schools | Building Excellence. Shaping the Future.",
  description:
    "John Kennedy International Schools - A premium private school in Surulere, Lagos, Nigeria providing quality education from nursery to secondary level. Building excellence, character, and knowledge.",
  keywords: [
    "John Kennedy International Schools",
    "John Kennedy International School Lagos",
    "Private school in Surulere Lagos",
    "Nursery school in Surulere",
    "Secondary school in Surulere",
    "School in Aguda Surulere",
    "Schools in Surulere Lagos",
  ],
  openGraph: {
    title: "John Kennedy International Schools | Building Excellence. Shaping the Future.",
    description:
      "John Kennedy International Schools - A premium private school in Surulere, Lagos, Nigeria providing quality education from nursery to secondary level.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ivory-100 text-charcoal-900">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
