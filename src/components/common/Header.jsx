import React from 'react';
import { useAuth } from '../../context/useAuth';
import { useApp } from '../../context/useApp';
import { 
  GraduationCap, 
  HeartHandshake, 
  User, 
  LogOut, 
  Baby,
  ChevronDown
} from 'lucide-react';

export const Header = () => {
  const { currentUser, role, isAuthenticated, switchRole, logout, setAuthModalOpen, setAuthMode } = useAuth();
  const { childrenList, selectedChildId, setSelectedChildId, showToast } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/10">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-rose-600 bg-clip-text text-transparent">
                Bodh Setu
              </span>
              <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                बोध सेतु
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Early Developmental Support & Screening
            </p>
          </div>
        </div>

        {/* Center / Role Switcher Banner */}
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  switchRole('parent');
                  showToast('Switched to Parent Perspective', 'info');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  role === 'parent'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="View as Parent"
              >
                <Baby className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Parent</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  switchRole('teacher');
                  showToast('Switched to Teacher Perspective', 'info');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  role === 'teacher'
                    ? 'bg-white text-purple-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="View as Educator / Teacher"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Teacher</span>
              </button>
            </div>
          ) : null}

          {/* Child Selector if Parent */}
          {isAuthenticated && role === 'parent' && childrenList.length > 1 && (
            <div className="relative hidden lg:flex items-center">
              <label htmlFor="child-selector" className="sr-only">Select Child</label>
              <select
                id="child-selector"
                value={selectedChildId}
                onChange={(e) => setSelectedChildId(e.target.value)}
                className="appearance-none bg-slate-50 border border-slate-200 text-xs font-medium rounded-lg pl-2.5 pr-7 py-1.5 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                {childrenList.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.avatar} {ch.name} ({ch.age})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Right User Actions */}
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold shadow-xs">
                  {currentUser.avatar || <User className="w-4 h-4" />}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-800 line-clamp-1 leading-tight">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium capitalize">
                    {role === 'parent' ? 'Parent / Guardian' : 'Educator'}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={logout}
                title="Sign Out"
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors ml-1 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setAuthModalOpen(true);
                }}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setAuthModalOpen(true);
                }}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs shadow-indigo-600/20 transition-all cursor-pointer"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
