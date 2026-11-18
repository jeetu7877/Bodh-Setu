import React, { useState } from 'react';
import { LogOut, User, HeartHandshake, Baby, GraduationCap, ChevronDown, X, ShieldCheck } from 'lucide-react';

export const Header = ({ user, onLogout }) => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const isTeacher = user?.role === 'Teacher';

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Left: Bodh Setu Logo, Name & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <HeartHandshake className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                  Bodh Setu
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 hidden sm:inline-block">
                  बोध सेतु
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                Bridging Understanding, Unlocking Potential
              </p>
            </div>
          </div>

          {/* Right: Welcome, Avatar, Role & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Welcome greeting on desktop */}
            <div className="text-right hidden sm:block">
              <div className="text-xs font-semibold text-slate-900 leading-tight">
                Welcome, {user?.name?.split(' ')[0] || 'Learner'}
              </div>
              <div className="text-[11px] text-slate-500 font-normal">
                {user?.email}
              </div>
            </div>

            {/* Profile Avatar / Trigger */}
            <button
              type="button"
              onClick={() => setProfileModalOpen(true)}
              className="flex items-center gap-2 p-1 sm:px-2 sm:py-1 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer text-left"
              title="View Profile Details"
            >
              <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-semibold">
                <User className="w-3.5 h-3.5" />
              </div>

              {/* Role Badge */}
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700">
                {isTeacher ? (
                  <GraduationCap className="w-3 h-3 text-teal-600" />
                ) : (
                  <Baby className="w-3 h-3 text-teal-600" />
                )}
                <span className="hidden sm:inline">{user?.role || 'Parent'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </span>
            </button>

            {/* Logout Button */}
            <button
              type="button"
              onClick={onLogout}
              title="Log out from Bodh Setu"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* User Profile Modal */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xs">
          <div className="bg-white rounded-xl max-w-sm w-full p-5 shadow-lg border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <h3 className="text-sm font-bold text-slate-900">User Profile</h3>
              </div>
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{user?.name || 'User'}</div>
                  <div className="text-slate-500">{user?.email}</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Role:</span>
                  <span className="font-semibold text-slate-800">{user?.role || 'Parent'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Account Type:</span>
                  <span className="font-semibold text-slate-800">Verified Educational Access</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setProfileModalOpen(false);
                  onLogout();
                }}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 cursor-pointer"
              >
                Sign Out
              </button>
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
