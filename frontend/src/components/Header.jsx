import React from 'react';
import { LogOut, User, HeartHandshake, Baby, GraduationCap } from 'lucide-react';

export const Header = ({ user, onLogout }) => {
  const isTeacher = user?.role === 'Teacher';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Left: Bodh Setu Logo & Application Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/15">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
                Bodh Setu
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60 hidden sm:inline-block">
                बोध सेतु
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden md:block">
              Bridging Understanding, Unlocking Potential
            </p>
          </div>
        </div>

        {/* Right: Welcome Message, Avatar, Role & Logout */}
        <div className="flex items-center gap-3">
          {/* Welcome Message */}
          <div className="text-right hidden sm:block">
            <div className="text-xs font-bold text-slate-800">
              Welcome, {user?.name || 'Learner'}
            </div>
            <div className="text-[11px] text-slate-500">
              {user?.email}
            </div>
          </div>

          {/* User Profile Avatar with Role Badge */}
          <div className="flex items-center gap-2 pl-2 sm:border-l border-slate-200">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200 flex items-center justify-center text-indigo-700 shadow-xs">
              <User className="w-4 h-4" />
            </div>

            {/* Role indicator */}
            <span
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                isTeacher
                  ? 'bg-sky-50 text-sky-700 border-sky-200'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}
            >
              {isTeacher ? <GraduationCap className="w-3.5 h-3.5" /> : <Baby className="w-3.5 h-3.5" />}
              <span>{user?.role || 'Parent'}</span>
            </span>
          </div>

          {/* Logout Button */}
          <button
            type="button"
            onClick={onLogout}
            title="Log Out"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};
