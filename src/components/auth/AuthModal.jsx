import React, { useState } from 'react';
import { useAuth } from '../../context/useAuth';
import { useApp } from '../../context/useApp';
import { 
  X, 
  Baby, 
  GraduationCap, 
  Sparkles, 
  Mail, 
  Lock, 
  User, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const AuthModal = () => {
  const { 
    authModalOpen, 
    setAuthModalOpen, 
    authMode, 
    setAuthMode, 
    login, 
    signup, 
    loginAsDemoParent, 
    loginAsDemoTeacher 
  } = useAuth();
  
  const { showToast } = useApp();

  const [selectedRole, setSelectedRole] = useState('parent'); // 'parent' | 'teacher'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    childName: '',
    childAge: '3-4 Years',
    schoolName: '',
    classroom: 'KG-1 / Foundational',
  });

  if (!authModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      login(formData.email || 'user@example.com', formData.password, selectedRole);
      showToast(`Logged in successfully as ${selectedRole === 'parent' ? 'Parent' : 'Teacher'}!`, 'success');
    } else {
      signup({
        ...formData,
        role: selectedRole,
      });
      showToast(`Welcome to Bodh Setu! Account created.`, 'success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity overflow-y-auto">
      <div 
        role="dialog" 
        aria-modal="true" 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 p-6 text-white relative">
          <button
            type="button"
            onClick={() => setAuthModalOpen(false)}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-white/20 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </span>
            <span className="text-xs uppercase tracking-widest font-bold text-amber-200">
              Bodh Setu • बोध सेतु
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight">
            {authMode === 'login' ? 'Welcome Back!' : 'Join the Developmental Bridge'}
          </h2>
          <p className="text-indigo-100 text-xs mt-1">
            {authMode === 'login'
              ? 'Access early screening, activity tracking, and milestone guides.'
              : 'Empowering parents & early educators to support every child.'}
          </p>

          {/* Quick Demo Login Pills */}
          <div className="mt-4 pt-3 border-t border-white/20">
            <div className="text-[11px] font-semibold text-indigo-100 mb-2 flex items-center gap-1.5">
              <span>⚡ One-Click Instant Demo Login:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={loginAsDemoParent}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white text-indigo-700 text-xs font-bold shadow-md hover:bg-indigo-50 active:scale-98 transition-all cursor-pointer"
              >
                <Baby className="w-4 h-4 text-rose-500" />
                <span>Demo Parent</span>
              </button>
              <button
                type="button"
                onClick={loginAsDemoTeacher}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white text-purple-700 text-xs font-bold shadow-md hover:bg-purple-50 active:scale-98 transition-all cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-purple-600" />
                <span>Demo Teacher</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Mode Switcher Tabs */}
          <div className="flex border-b border-slate-200 mb-5">
            <button
              type="button"
              onClick={() => setAuthMode('login')}
              className={`flex-1 pb-3 text-sm font-semibold text-center border-b-2 transition-all cursor-pointer ${
                authMode === 'login'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setAuthMode('signup')}
              className={`flex-1 pb-3 text-sm font-semibold text-center border-b-2 transition-all cursor-pointer ${
                authMode === 'signup'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Role Selection Option */}
          <div className="mb-5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Your Role:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => setSelectedRole('parent')}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedRole === 'parent'
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Baby className="w-4 h-4" />
                  </div>
                  {selectedRole === 'parent' && (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  )}
                </div>
                <div className="text-xs font-bold text-slate-800">Parent / Guardian</div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Track your child's milestones & screenings
                </p>
              </div>

              <div
                onClick={() => setSelectedRole('teacher')}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedRole === 'teacher'
                    ? 'border-purple-600 bg-purple-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  {selectedRole === 'teacher' && (
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  )}
                </div>
                <div className="text-xs font-bold text-slate-800">Educator / Teacher</div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Manage classroom observations & reports
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder={selectedRole === 'parent' ? 'e.g. Priya Sharma' : 'e.g. Ms. Ananya Roy'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address or Phone
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Extra Role-Specific Signup Fields */}
            {authMode === 'signup' && selectedRole === 'parent' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Child's Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Aarav"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Child's Age Group
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
                  >
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="2-3 Years">2 - 3 Years</option>
                    <option value="3-4 Years">3 - 4 Years</option>
                    <option value="4-6 Years">4 - 6 Years</option>
                    <option value="6-8 Years">6 - 8 Years</option>
                  </select>
                </div>
              </div>
            )}

            {authMode === 'signup' && selectedRole === 'teacher' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    School / Center Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vidya School"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Grade / Section
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nursery / KG-1"
                    value={formData.classroom}
                    onChange={(e) => setFormData({ ...formData, classroom: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-2.5 px-4 rounded-xl text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 mt-2 transition-all cursor-pointer ${
                selectedRole === 'teacher'
                  ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/25'
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/25'
              }`}
            >
              <span>{authMode === 'login' ? 'Sign In' : 'Complete Setup & Enter'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>DPDP & NEP-2020 Aligned Early Developmental Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};
