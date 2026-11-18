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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#FAF8FF] via-[#F4F7FF] to-[#F0FDF9]">
      <div className="w-full max-w-xl">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 text-white shadow-lg shadow-indigo-500/20 mb-3">
            <HeartHandshake className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Select Your Role
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-sm mx-auto">
            Choose how you will be using Bodh Setu to get started.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Parent Card */}
          <div
            onClick={() => setSelectedRole('Parent')}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer bg-white ${
              selectedRole === 'Parent'
                ? 'border-indigo-600 bg-indigo-50/30 shadow-md ring-2 ring-indigo-500/20'
                : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
            }`}
          >
            {selectedRole === 'Parent' && (
              <div className="absolute top-4 right-4 text-indigo-600">
                <CheckCircle2 className="w-5 h-5 fill-indigo-100" />
              </div>
            )}
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Baby className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Parent</h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Support your child's learning journey, follow developmental guidance, and nurture potential at home.
            </p>
          </div>

          {/* Teacher Card */}
          <div
            onClick={() => setSelectedRole('Teacher')}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer bg-white ${
              selectedRole === 'Teacher'
                ? 'border-sky-600 bg-sky-50/30 shadow-md ring-2 ring-sky-500/20'
                : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
            }`}
          >
            {selectedRole === 'Teacher' && (
              <div className="absolute top-4 right-4 text-sky-600">
                <CheckCircle2 className="w-5 h-5 fill-sky-100" />
              </div>
            )}
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Teacher</h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Observe classroom learning, support foundational skill development, and collaborate with families.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Continue to Dashboard</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
