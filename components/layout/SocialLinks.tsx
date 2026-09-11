'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface SocialLinksProps {
  links: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
}

type SocialNetwork = keyof SocialLinksProps['links'];

const labels: Record<SocialNetwork, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  tiktok: 'TikTok',
};

function SocialMark({ network }: { network: SocialNetwork }) {
  if (network === 'facebook') {
    return <span className="font-sans text-lg font-bold leading-none">f</span>;
  }

  if (network === 'instagram') {
    return <span className="text-[17px] font-semibold leading-none">◎</span>;
  }

  if (network === 'youtube') {
    return <span className="text-[12px] font-bold leading-none">▶</span>;
  }

  return <span className="text-sm font-bold leading-none">♪</span>;
}

function SocialIcon({ network, href, className = '' }: { network: SocialNetwork; href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/40 bg-navy-900 text-ivory-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950 ${className}`}
      aria-label={labels[network]}
    >
      <SocialMark network={network} />
    </a>
  );
}

export function SocialLinks({ links }: SocialLinksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const availableLinks = (Object.keys(labels) as SocialNetwork[]).filter((network) => links[network]);

  if (availableLinks.length === 0) return null;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-ivory-100/60">Follow us on:</span>
        {availableLinks.map((network) => (
          <SocialIcon key={network} network={network} href={links[network] as string} />
        ))}
      </div>

      <div className="fixed bottom-5 right-5 z-50 md:hidden">
        <div
          className={`absolute bottom-16 right-0 flex flex-col-reverse gap-3 transition-all duration-200 ${
            isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          {availableLinks.map((network) => (
            <SocialIcon key={network} network={network} href={links[network] as string} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-950 shadow-lg transition-transform duration-200 hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
          aria-label={isOpen ? 'Close social media links' : 'Open social media links'}
          aria-expanded={isOpen}
        >
          <Plus className={`h-7 w-7 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
        </button>
      </div>
    </>
  );
}
