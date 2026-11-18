import React, { useState } from 'react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { HomePage } from './HomePage';

export const DashboardPage = ({ user, onLogout }) => {
  // Navigation tabs: 'Home', 'Activities', 'Screening', 'Progress', 'Resources'
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Common Top Header */}
      <Header user={user} onLogout={onLogout} />

      {/* Main Content Area */}
      {activeTab === 'Home' ? (
        <main className="flex-1">
          <HomePage user={user} onNavigateTab={setActiveTab} />
        </main>
      ) : (
        /* Empty Section View: Only displays the page title for the active section */
        <main className="flex-1 flex items-center justify-center p-6 pb-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {activeTab}
            </h1>
          </div>
        </main>
      )}

      {/* Common Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
