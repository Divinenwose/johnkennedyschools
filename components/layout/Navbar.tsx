'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '@/config/navigation-config';
import { schoolConfig } from '@/config/school-config';
import { admissionsConfig } from '@/config/admissions-config';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`relative z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-ivory-50/97 backdrop-blur-sm border-stone-300 shadow-[0_1px_0_0_rgba(16,35,63,0.04)]'
            : 'bg-ivory-50 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="John Kennedy International Schools crest"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block leading-none">
                <span className="block font-display text-[15px] font-semibold text-navy-950 tracking-wide">
                  JOHN KENNEDY
                </span>
                <span className="block text-[10px] text-gold-600 font-semibold uppercase tracking-[0.18em] mt-1">
                  International Schools
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6 flex-shrink min-w-0">
              {navigationConfig.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 text-[13px] font-medium uppercase tracking-[0.06em] whitespace-nowrap transition-colors ${
                    pathname === item.href
                      ? 'text-navy-950'
                      : 'text-charcoal-600 hover:text-navy-900'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gold-500" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
              <Button href={schoolConfig.resultPortalUrl} variant="outline" size="sm" external className="whitespace-nowrap">
                Result Portal
              </Button>
              <Button href={admissionsConfig.registrationUrl} variant="primary" size="sm" external className="whitespace-nowrap">
                Apply Now
              </Button>
            </div>

            {/* Tablet/small-desktop Navigation (lg–xl): CTAs only, full nav lives in the drawer */}
            <div className="hidden lg:flex xl:hidden items-center gap-3 flex-shrink-0">
              <Button href={admissionsConfig.registrationUrl} variant="primary" size="sm" external className="whitespace-nowrap">
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden p-2 -mr-2 text-navy-900 flex-shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-navy-950 shadow-xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-ivory-50/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-ivory-50 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="John Kennedy International Schools crest"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="block font-display text-sm font-semibold text-ivory-50 tracking-wide">
                  JOHN KENNEDY
                </span>
                <span className="block text-[10px] text-gold-400 font-semibold uppercase tracking-[0.18em] mt-1">
                  International Schools
                </span>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-ivory-100 hover:text-gold-400"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {navigationConfig.main.map((item, index) => (
                <li key={item.href} className="border-b border-ivory-50/10">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between py-4 font-display text-xl transition-colors ${
                      pathname === item.href ? 'text-gold-400' : 'text-ivory-50 hover:text-gold-300'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-sans text-ivory-50/30">0{index + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTAs */}
          <div className="px-6 py-6 border-t border-ivory-50/10 space-y-3">
            <Button
              href={admissionsConfig.registrationUrl}
              variant="secondary"
              size="md"
              external
              className="w-full"
              onClick={closeMobileMenu}
            >
              Apply Now
            </Button>
            <Button
              href={schoolConfig.resultPortalUrl}
              variant="outlineLight"
              size="md"
              external
              className="w-full"
              onClick={closeMobileMenu}
            >
              Result Portal
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
