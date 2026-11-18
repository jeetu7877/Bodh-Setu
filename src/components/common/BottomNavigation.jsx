import React from 'react';
import { useApp } from '../../context/useApp';
import { 
  Home, 
  Sparkles, 
  ClipboardCheck, 
  TrendingUp, 
  BookOpen 
} from 'lucide-react';

export const BottomNavigation = () => {
  const { activeTab, setActiveTab, completedActivitiesCount, activities } = useApp();

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      badge: null,
    },
    {
      id: 'activities',
      label: 'Activities',
      icon: Sparkles,
      badge: `${completedActivitiesCount}/${activities.length}`,
    },
    {
      id: 'screening',
      label: 'Screening',
      icon: ClipboardCheck,
      badge: 'ASQ',
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: TrendingUp,
      badge: null,
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: BookOpen,
      badge: null,
    },
  ];

  return (
    <nav 
      aria-label="Bottom Navigation" 
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-md md:max-w-2xl mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-5 h-16 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`relative flex flex-col items-center justify-center py-1 group transition-all duration-200 ${
                  isActive ? 'text-indigo-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {/* Active Indicator Top Pill */}
                {isActive && (
                  <span className="absolute -top-1 w-8 h-1 bg-gradient-to-r from-indigo-600 to-rose-500 rounded-full" />
                )}

                <div className="relative">
                  <div
                    className={`p-1.5 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-600 scale-110 shadow-xs' 
                        : 'group-hover:bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Icon className="w-5 h-5 transition-transform" />
                  </div>

                  {item.badge && (
                    <span className="absolute -top-1 -right-2 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-indigo-600 text-white shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span className={`text-[11px] mt-0.5 tracking-tight transition-colors ${
                  isActive ? 'text-indigo-600 font-bold' : 'text-slate-500'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
