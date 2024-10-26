import React from 'react';
import { Layout } from '@/components/layout';
import { Sidebar } from '@/components/sidebar';
import { MainContent } from '@/components/main-content';
import { MatchSection } from '@/components/match-section';
import { EventsSection } from '@/components/events-section';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Layout>
        <div className="flex">
          <Sidebar />
          <MainContent />
          <div className="w-[452px] border-l border-gray-800">
            <MatchSection />
            <EventsSection />
          </div>
        </div>
      </Layout>
    </div>
  );
}