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

            {/* Stands at the left edge of the line, facing right (backpack
                on the trailing/back side, motion lines behind), and walks
                along it to the right in step with the loading progress. */}
            <span className="intro-progress-row">
              <span className="intro-walker" id="intro-walker">
                <svg viewBox="-4 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className="intro-walker-body">
                    {/* motion lines, trailing behind (left) */}
                    <g opacity="0.45">
                      <line x1="-3" y1="16" x2="2" y2="15" stroke="var(--ivory-100)" strokeWidth="1.4" strokeLinecap="round" />
                      <line x1="-4" y1="21" x2="1" y2="20" stroke="var(--ivory-100)" strokeWidth="1.4" strokeLinecap="round" />
                      <line x1="-3" y1="26" x2="2" y2="25" stroke="var(--ivory-100)" strokeWidth="1.4" strokeLinecap="round" />
                    </g>
                    {/* backpack — worn on the back, which trails on the left
                        while facing/walking right */}
                    <rect x="4" y="12" width="8" height="11" rx="2.5" fill="var(--gold-400)" />
                    <rect x="5.5" y="14.5" width="5" height="2" rx="1" fill="var(--navy-950)" opacity="0.25" />
                    {/* back arm (near the backpack, partly behind the body) */}
                    <g className="walker-arm walker-arm-left">
                      <rect x="12" y="15" width="3" height="9" rx="1.5" fill="var(--ivory-50)" />
                    </g>
                    {/* legs — short-and-sock silhouette, schoolboy shorts */}
                    <g className="walker-leg walker-leg-left">
                      <rect x="14.5" y="24" width="3.5" height="5" fill="var(--navy-800)" />
                      <rect x="14.5" y="29" width="3.5" height="5" fill="var(--ivory-100)" />
                      <rect x="14" y="34" width="4.5" height="2.2" rx="1" fill="var(--navy-950)" />
                    </g>
                    <g className="walker-leg walker-leg-right">
                      <rect x="19" y="24" width="3.5" height="5" fill="var(--navy-700)" />
                      <rect x="19" y="29" width="3.5" height="5" fill="var(--ivory-100)" />
                      <rect x="18.5" y="34" width="4.5" height="2.2" rx="1" fill="var(--navy-950)" />
                    </g>
                    {/* shirt */}
                    <rect x="14" y="13" width="9" height="13" rx="3.5" fill="var(--ivory-50)" />
                    <path d="M16.5 13.5 L19 16.5 L21.5 13.5" stroke="var(--navy-700)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    {/* head, facing right */}
                    <circle cx="19" cy="7.5" r="5.5" fill="var(--ivory-50)" />
                    {/* short boy haircut */}
                    <path d="M13.5 7.2c-0.3-4 2.6-6.7 5.5-6.7s5.8 2.7 5.5 6.7c-1-1.6-2.3-2.4-3.3-1.9-0.9 0.4-1.3 0.1-2.2 0.1s-1.3 0.3-2.2-0.1c-1-0.5-2.3 0.3-3.3 1.9z" fill="var(--navy-950)" />
                    {/* a small forward-facing nose bump so the profile reads as facing right */}
                    <path d="M24.2 7.8c0.9 0.1 1.4 0.6 1.4 1s-0.5 0.7-1.3 0.6" fill="var(--ivory-50)" />
                    {/* front arm, swinging in view */}
                    <g className="walker-arm walker-arm-right">
                      <rect x="23" y="15" width="3" height="9" rx="1.5" fill="var(--ivory-50)" />
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
