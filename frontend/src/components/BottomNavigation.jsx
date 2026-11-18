import React from 'react';
import { Home, Sparkles, ClipboardCheck, TrendingUp, BookOpen } from 'lucide-react';

export const BottomNavigation = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Activities', label: 'Activities', icon: Sparkles },
    { id: 'Screening', label: 'Screening', icon: ClipboardCheck },
    { id: 'Progress', label: 'Progress', icon: TrendingUp },
    { id: 'Resources', label: 'Resources', icon: BookOpen },
  ];

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-purple-100/90 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-md md:max-w-xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-5 h-16 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className={`relative flex flex-col items-center justify-center py-1 transition-all duration-200 cursor-pointer group ${
                  isActive ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {/* Active Top Pastel Indicator */}
                {isActive && (
                  <span className="absolute -top-1 w-9 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400" />
                )}

                <div
                  className={`p-1.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-100/80 text-indigo-700 scale-105 shadow-2xs'
                      : 'group-hover:bg-slate-100 text-slate-500'
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform" />
                </div>

                <span
                  className={`text-[11px] mt-0.5 tracking-tight transition-colors ${
                    isActive ? 'text-indigo-600 font-bold' : 'text-slate-500 font-medium'
                  }`}
                >
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
