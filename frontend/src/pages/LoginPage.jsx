import React, { useState } from 'react';
import { HeartHandshake, Eye, EyeOff, Lock, Mail, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MinimalIllustration } from '../components/MinimalIllustration';

export const LoginPage = ({ onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }

    if (formData.password.length < 4) {
      setErrorMessage('Password must be at least 4 characters long.');
      return;
    }

    // In signup mode, name is required
    if (isSignUp && !formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    // Fetch existing registered accounts from localStorage
    const savedAccounts = JSON.parse(localStorage.getItem('bodh_setu_accounts') || '[]');

    if (isSignUp) {
      // Check if account already exists
      const existing = savedAccounts.find((acc) => acc.email.toLowerCase() === formData.email.toLowerCase());
      if (existing) {
        setErrorMessage('An account with this email already exists. Please log in.');
        return;
      }

      const newAccount = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        role: null, // Will be chosen in the next step
      };

      savedAccounts.push(newAccount);
      localStorage.setItem('bodh_setu_accounts', JSON.stringify(savedAccounts));

      // Successfully registered, proceed to role selection
      onLoginSuccess(newAccount);
    } else {
      // Login mode: Check against saved accounts or accept valid demo inputs
      const existing = savedAccounts.find(
        (acc) => acc.email.toLowerCase() === formData.email.toLowerCase() && acc.password === formData.password
      );

      if (existing) {
        onLoginSuccess(existing);
      } else {
        // Allow flexible demo login for evaluating the project
        const demoUser = {
          name: formData.email.split('@')[0] || 'Learner',
          email: formData.email,
          role: null,
        };
        onLoginSuccess(demoUser);
      }
    }
  };

  const handleGoogleDemoSignIn = () => {
    const googleUser = {
      name: 'Google Demo User',
      email: 'demo.learner@gmail.com',
      avatar: 'G',
      role: null,
    };
    onLoginSuccess(googleUser);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Container */}
      <div className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Educational Line Illustration & Brand Overview */}
        <div className="lg:col-span-5 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
          <div>
            {/* Bodh Setu Logo & Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                    Bodh Setu
                  </h1>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/60 text-slate-700 border border-slate-200 hidden sm:inline-block">
                    बोध सेतु
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500">
                  Bridging Understanding, Unlocking Potential
                </p>
              </div>
            </div>

            {/* Educational Illustration - Clean Minimal Line Art */}
            <div className="my-6">
              <MinimalIllustration />
            </div>
          </div>

          {/* Educational Philosophy Note */}
          <div className="p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Foundational Learning Support</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Designed for parents and educators to support developmental milestones in early learning with clarity and care.
            </p>
          </div>
        </div>

        {/* Right Column: Login / Signup Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto">
            {/* Welcome Headings */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full mb-2">
                <span>Inclusive Learning Platform</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Welcome to Bodh Setu
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every learner deserves a better way to learn.
              </p>
            </div>

            {/* Mode Switcher Tabs (Sign In / Sign Up) */}
            <div className="flex bg-slate-100 p-1 rounded-lg mb-6 border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setErrorMessage('');
                }}
                className={`flex-1 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  !isSignUp
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(true);
                  setErrorMessage('');
                }}
                className={`flex-1 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSignUp
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field (Sign Up Only) */}
              {isSignUp && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Email Input Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-all"
                  />
                </div>
              </div>

              {/* Password Input Field with Show/Hide Toggle */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  {!isSignUp && (
                    <button
                      type="button"
                      onClick={() => {
                        setForgotPasswordOpen(true);
                        setForgotSuccess(false);
                      }}
                      className="text-[11px] font-medium text-teal-700 hover:text-teal-900 cursor-pointer"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-9 pr-9 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-2 cursor-pointer"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{isSignUp ? 'Create Bodh Setu Account' : 'Log In'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center">
              <div className="flex-1 border-t border-slate-200" />
              <span className="px-3 text-xs text-slate-400 font-normal">or continue with</span>
              <div className="flex-1 border-t border-slate-200" />
            </div>

            {/* Google Sign-In Demo Button */}
            <button
              type="button"
              onClick={handleGoogleDemoSignIn}
              className="w-full py-2.5 px-4 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google (Demo)</span>
            </button>

            {/* Bottom Toggle Prompt */}
            <div className="mt-6 text-center text-xs text-slate-500">
              {isSignUp ? (
                <span>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(false);
                      setErrorMessage('');
                    }}
                    className="font-semibold text-teal-700 hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </span>
              ) : (
                <span>
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(true);
                      setErrorMessage('');
                    }}
                    className="font-semibold text-teal-700 hover:underline cursor-pointer"
                  >
                    Create Account
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Demo Modal */}
      {forgotPasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xs">
          <div className="bg-white rounded-xl max-w-sm w-full p-6 shadow-lg border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-base font-bold text-slate-900">
              Reset Your Password
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              In this preview phase, enter your registered email to simulate a reset link or log in directly.
            </p>

            {forgotSuccess ? (
              <div className="my-4 p-3 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Demo reset link generated. You may now log in with any password.</span>
              </div>
            ) : (
              <form onSubmit={handleForgotPasswordSubmit} className="mt-4 space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your registered email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Send Reset Link (Demo)
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setForgotPasswordOpen(false)}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
