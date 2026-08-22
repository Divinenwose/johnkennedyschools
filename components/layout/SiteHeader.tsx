import React from 'react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';

// Wraps the announcement bar and navbar together as a single fixed unit so
// they always stack correctly (the two were previously both pinned to
// top:0 independently, causing the navbar to overlap the announcement bar).
export const SiteHeader: React.FC = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <AnnouncementBar />
      <Navbar />
    </div>
  );
};
