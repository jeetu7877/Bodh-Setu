import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import { useApp } from './context/useApp';
import { Header } from './components/common/Header';
import { BottomNavigation } from './components/common/BottomNavigation';
import { AuthModal } from './components/auth/AuthModal';
import { Toast } from './components/common/Toast';
import { HomeView } from './components/home/HomeView';
import { ActivitiesView } from './components/activities/ActivitiesView';
import { ScreeningView } from './components/screening/ScreeningView';
import { ProgressView } from './components/progress/ProgressView';
import { ResourcesView } from './components/resources/ResourcesView';

const MainContent = () => {
  const { activeTab } = useApp();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'activities' && <ActivitiesView />}
      {activeTab === 'screening' && <ScreeningView />}
      {activeTab === 'progress' && <ProgressView />}
      {activeTab === 'resources' && <ResourcesView />}
    </main>
  );
};

export function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
          {/* Top Header */}
          <Header />

          {/* Dynamic Main View */}
          <div className="flex-1">
            <MainContent />
          </div>

          {/* Exactly 5 Bottom Navigation Options */}
          <BottomNavigation />

          {/* Authentication & Role Picker Modal */}
          <AuthModal />

          {/* Toast Notification Banner */}
          <Toast />
        </div>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
