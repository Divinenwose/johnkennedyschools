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
        {/* Runs before first paint: if this tab already completed the
            intro this session, mark <html> so the CSS rule below hides
            the overlay before it ever paints — otherwise IntroLoader's
            useEffect (which only runs after hydration) would let it
            flash briefly on every repeat navigation within the session. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('jkis-intro-v2-complete')){document.documentElement.classList.add('intro-seen')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-ivory-100 text-charcoal-900">
        {/* Server-rendered overlay markup — present in the very first HTML
            response alongside the real content, so there is no flash of
            content on first paint: both exist together from first paint,
            the overlay just visually covers the page via z-index until
            IntroLoader fades it out. Hidden instantly via CSS (see
            html.intro-seen rule) on repeat navigations this session. */}
        <div id="site-intro-overlay" aria-hidden="true">
          <div className="intro-mark">
            {/* Plain <img>, not next/image: this needs to exist in the raw
                server-rendered HTML with no client hydration dependency,
                so Next's image optimization (which requires the client
                runtime) doesn't apply here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="" />
            <span className="intro-wordmark">John Kennedy International Schools</span>
            <span className="intro-progress-row">
              <span className="intro-walker" id="intro-walker">
                {/* A little student character with a schoolbag, walking
                    along the progress bar as it fills — purely
                    decorative (aria-hidden on the parent overlay), and
                    hidden entirely under prefers-reduced-motion. */}
                <svg viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className="intro-walker-body">
                    {/* backpack */}
                    <rect x="16" y="11" width="8" height="11" rx="2.5" fill="var(--gold-400)" />
                    <rect x="17.5" y="13.5" width="5" height="2" rx="1" fill="var(--navy-950)" opacity="0.25" />
                    {/* back arm (behind body) */}
                    <g className="walker-arm walker-arm-left">
                      <rect x="7" y="14" width="3" height="9" rx="1.5" fill="var(--ivory-50)" />
                    </g>
                    {/* legs */}
                    <g className="walker-leg walker-leg-left">
                      <rect x="8.5" y="23" width="3.5" height="11" rx="1.5" fill="var(--navy-800)" />
                    </g>
                    <g className="walker-leg walker-leg-right">
                      <rect x="13" y="23" width="3.5" height="11" rx="1.5" fill="var(--navy-700)" />
                    </g>
                    {/* body */}
                    <rect x="8" y="12" width="9" height="13" rx="3.5" fill="var(--ivory-50)" />
                    {/* head */}
                    <circle cx="12.5" cy="6.5" r="5.5" fill="var(--ivory-50)" />
                    <path d="M7.5 5.5c1-2.5 3-3.5 5-3.5s4 1 5 3.5" stroke="var(--navy-950)" strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
                    {/* front arm */}
                    <g className="walker-arm walker-arm-right">
                      <rect x="16.5" y="14" width="3" height="9" rx="1.5" fill="var(--ivory-50)" />
                    </g>
                  </g>
                </svg>
              </span>
              <span className="intro-progress-track">
                <span className="intro-progress-fill" />
              </span>
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
