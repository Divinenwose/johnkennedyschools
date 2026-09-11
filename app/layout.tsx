import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { IntroLoader } from "@/components/layout/IntroLoader";

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
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className="min-h-screen bg-ivory-100 text-charcoal-900">
        {/* Server-rendered overlay markup — present in the very first HTML
            response alongside the real content, so there is no flash of
            content before it: both exist together from first paint, the
            overlay just visually covers the page via z-index until the
            script below fades it out. Hidden instantly via CSS (see
            html.intro-seen rule above) on repeat navigations this session. */}
        <div id="site-intro-overlay" aria-hidden="true">
          <div className="intro-mark">
            {/* Plain <img>, not next/image: this needs to exist in the raw
                server-rendered HTML with no client hydration dependency,
                so Next's image optimization (which requires the client
                runtime) doesn't apply here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="" />
            <span className="intro-wordmark">John Kennedy International Schools</span>
            <span className="intro-progress-track">
              <span className="intro-progress-fill" />
            </span>
            <span id="intro-progress-value" className="intro-progress-value">Loading 0%</span>
          </div>
        </div>
        <IntroLoader />

        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
