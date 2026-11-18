import React, { useState } from 'react';
import { Baby, GraduationCap, ArrowRight, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const RoleSelectionPage = ({ user, onRoleSelected }) => {
  const [selectedRole, setSelectedRole] = useState(user?.role || 'Parent');

  const handleConfirm = () => {
    if (selectedRole) {
      onRoleSelected(selectedRole);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-slate-50">
      <div className="w-full max-w-xl">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 text-white shadow-2xs mb-3">
            <HeartHandshake className="w-5 h-5 text-teal-400" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Bodh Setu
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/60 text-slate-700 border border-slate-200">
              बोध सेतु
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Select Your Role
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
            Choose how you will be using Bodh Setu to personalize your experience.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Parent Card */}
          <div
            onClick={() => setSelectedRole('Parent')}
            className={`relative p-6 rounded-xl border transition-all duration-150 cursor-pointer bg-white ${
              selectedRole === 'Parent'
                ? 'border-slate-900 bg-slate-50/60 shadow-2xs ring-1 ring-slate-900'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            {selectedRole === 'Parent' && (
              <div className="absolute top-4 right-4 text-slate-900">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            )}
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-teal-800 flex items-center justify-center mb-4 border border-slate-200/60">
              <Baby className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Parent</h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Support your child's learning journey, follow developmental guidance, and nurture potential at home.
            </p>
          </div>

          {/* Teacher Card */}
          <div
            onClick={() => setSelectedRole('Teacher')}
            className={`relative p-6 rounded-xl border transition-all duration-150 cursor-pointer bg-white ${
              selectedRole === 'Teacher'
                ? 'border-slate-900 bg-slate-50/60 shadow-2xs ring-1 ring-slate-900'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            {selectedRole === 'Teacher' && (
              <div className="absolute top-4 right-4 text-slate-900">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            )}
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-teal-800 flex items-center justify-center mb-4 border border-slate-200/60">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Teacher</h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Observe classroom learning, support foundational skill development, and collaborate with families.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full py-3 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Continue to Dashboard</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
