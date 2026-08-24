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
      <head>
        {/* Runs before first paint (see strategy on the Script tag below via
            a plain blocking <script>): if this tab already saw the intro
            this session, mark <html> so the CSS rule hides the overlay
            before it ever paints — zero flash on repeat navigations. */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('jkis-intro-seen')){document.documentElement.classList.add('intro-seen')}}catch(e){}`,
          }}
        />
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
                server-rendered HTML with no client hydration dependency. */}
            <img src="/images/logo.png" alt="" />
            <span className="intro-wordmark">John Kennedy International Schools</span>
            <span className="intro-progress-track">
              <span className="intro-progress-fill" />
            </span>
          </div>
        </div>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!sessionStorage.getItem('jkis-intro-seen')){sessionStorage.setItem('jkis-intro-seen','1');document.documentElement.style.overflow='hidden';setTimeout(function(){var el=document.getElementById('site-intro-overlay');if(el){el.classList.add('intro-fade-out');document.documentElement.style.overflow='';setTimeout(function(){el.style.display='none'},650)}},7000)}}catch(e){}})();`,
          }}
        />

        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
