'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu, X } from 'lucide-react';
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="John Kennedy International Schools logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-blue-900 leading-tight">
                  JOHN KENNEDY
                </h1>
                <p className="text-xs text-amber-600 font-semibold">
                  INTERNATIONAL SCHOOLS
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationConfig.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${pathname === item.href
                      ? 'text-amber-600'
                      : 'text-gray-700'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                href={schoolConfig.resultPortalUrl}
                variant="outline"
                size="sm"
                external
              >
                Result Portal →
              </Button>
              <Button
                href={admissionsConfig.registrationUrl}
                variant="primary"
                size="sm"
                external
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-amber-600"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h1 className="text-sm font-bold text-blue-900 leading-tight">
                    JOHN KENNEDY
                  </h1>
                  <p className="text-xs text-amber-600 font-semibold">
                    INTERNATIONAL SCHOOLS
                  </p>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-700 hover:text-amber-600"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="space-y-4">
                {navigationConfig.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile CTAs */}
            <div className="p-6 border-t space-y-3">
              <Button
                href={schoolConfig.resultPortalUrl}
                variant="outline"
                size="md"
                external
                className="w-full"
                onClick={closeMobileMenu}
              >
                Result Portal →
              </Button>
              <Button
                href={admissionsConfig.registrationUrl}
                variant="primary"
                size="md"
                external
                className="w-full"
                onClick={closeMobileMenu}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
