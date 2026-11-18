import React from 'react';
import { Home, Sparkles, ClipboardList, TrendingUp, BookOpen } from 'lucide-react';

export const BottomNavigation = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Activities', label: 'Activities', icon: Sparkles },
    { id: 'Screening', label: 'Screening', icon: ClipboardList },
    { id: 'Progress', label: 'Progress', icon: TrendingUp },
    { id: 'Resources', label: 'Resources', icon: BookOpen },
  ];

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xs"
    >
      <div className="max-w-md md:max-w-xl mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-5 h-16 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className={`relative flex flex-col items-center justify-center py-1 transition-colors cursor-pointer group ${
                  isActive ? 'text-teal-700 font-semibold' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {/* Active Top Line Indicator */}
                {isActive && (
                  <span className="absolute top-0 w-8 h-0.5 rounded-full bg-teal-700" />
                )}

                <div
                  className={`p-1.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-teal-800'
                      : 'group-hover:bg-slate-50 text-slate-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <span
                  className={`text-[11px] mt-0.5 tracking-tight ${
                    isActive ? 'font-semibold text-teal-900' : 'font-normal text-slate-500'
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
