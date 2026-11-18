import React from 'react';
import { useApp } from '../../context/useApp';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isInfo = toast.type === 'info';

  return (
    <div className="fixed top-20 right-4 z-50 animate-in fade-in slide-in-from-top-4 duration-300 max-w-sm">
      <div className={`flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-xl border text-xs font-semibold ${
        isSuccess
          ? 'bg-slate-900 text-white border-slate-700'
          : isInfo
          ? 'bg-indigo-900 text-white border-indigo-700'
          : 'bg-rose-900 text-white border-rose-700'
      }`}>
        {isSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
        {isInfo && <Info className="w-4 h-4 text-indigo-400 shrink-0" />}
        {!isSuccess && !isInfo && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
