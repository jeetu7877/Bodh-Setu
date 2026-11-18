import React, { useState } from 'react';
import { useApp } from '../../context/useApp';
import { useAuth } from '../../context/useAuth';
import { developmentalDomains } from '../../data/mockData';
import { 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Printer
} from 'lucide-react';

export const ProgressView = () => {
  const { selectedChild, students } = useApp();
  const { role } = useAuth();
  const [activeTab, setActiveTabFilter] = useState('domains'); // 'domains' | 'milestones' | 'classroom'

  const milestonesList = [
    { id: 'm1', domain: 'Gross Motor', title: 'Jumps forward 24 inches on both feet', status: 'Achieved', date: 'Oct 2026' },
    { id: 'm2', domain: 'Communication', title: 'Identifies 5 common everyday objects by name', status: 'Achieved', date: 'Sep 2026' },
    { id: 'm3', domain: 'Problem Solving', title: 'Matches 4 primary geometric colors and shapes', status: 'Achieved', date: 'Nov 2026' },
    { id: 'm4', domain: 'Speech & Language', title: 'Speaks in 4-to-5 word sentences consistently', status: 'In Progress', progress: 75 },
    { id: 'm5', domain: 'Fine Motor', title: 'Cuts paper along a straight line with safety scissors', status: 'In Progress', progress: 60 },
    { id: 'm6', domain: 'Social-Emotional', title: 'Takes turns sharing a toy with a peer for 5 minutes', status: 'Next Target', progress: 30 },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-24 pt-2">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-rose-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-purple-100 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>Developmental Radar & Milestones</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {role === 'parent' ? `${selectedChild?.name}'s Progress Report` : 'Classroom Developmental Analytics'}
            </h1>
            <p className="text-purple-100 text-xs sm:text-sm mt-1 max-w-lg">
              {role === 'parent' 
                ? 'Holistic multi-domain developmental profile mapping communication, motor, cognitive, and social milestones.' 
                : 'Aggregated developmental spectrum for 18 foundational stage learners.'}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white text-indigo-700 text-xs font-bold shadow-md hover:bg-indigo-50 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Domain Score Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-slate-900">
            5 Core Developmental Domains
          </h2>
          <span className="text-xs text-slate-500">Benchmark: 70%+ On Track</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {developmentalDomains.map((dom) => (
            <div
              key={dom.name}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-800">{dom.name}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${dom.bg} ${dom.text} border ${dom.border}`}>
                  {dom.status}
                </span>
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <span className="text-3xl font-black text-slate-900">{dom.score}%</span>
                <span className="text-xs text-slate-400">Target: 75%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${dom.color} h-full rounded-full transition-all duration-700`}
                  style={{ width: `${dom.score}%` }}
                />
              </div>

              <div className="mt-3 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{dom.score >= 75 ? '✓ Meeting age expectations' : '⚡ Guided play recommended'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Milestone Roadmap */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Milestone Achievement Timeline
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Track recent completions and current target skills
            </p>
          </div>

          <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl self-start">
            <button
              type="button"
              onClick={() => setActiveTabFilter('domains')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'domains' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              Timeline View
            </button>
            {role === 'teacher' && (
              <button
                type="button"
                onClick={() => setActiveTabFilter('classroom')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'classroom' ? 'bg-white text-purple-600 shadow-xs' : 'text-slate-600'
                }`}
              >
                Classroom Roster
              </button>
            )}
          </div>
        </div>

        {activeTab === 'classroom' && role === 'teacher' ? (
          /* Classroom Roster */
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Age</th>
                  <th className="py-3 px-4">Overall Score</th>
                  <th className="py-3 px-4">Development Status</th>
                  <th className="py-3 px-4">Attendance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <span>{st.avatar}</span>
                      <span>{st.name}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{st.age}</td>
                    <td className="py-3 px-4 font-extrabold text-indigo-600">{st.score}%</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                        st.status.includes('On Track') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {st.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500">{st.attendance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Timeline Cards */
          <div className="space-y-3">
            {milestonesList.map((m) => (
              <div
                key={m.id}
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className={`mt-0.5 sm:mt-0 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    m.status === 'Achieved'
                      ? 'bg-emerald-100 text-emerald-600'
                      : m.status === 'In Progress'
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {m.status === 'Achieved' ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{m.title}</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                      <span className="font-semibold text-indigo-600">{m.domain}</span>
                      <span>•</span>
                      <span>{m.status} {m.date ? `(${m.date})` : ''}</span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  {m.progress ? (
                    <div className="w-28">
                      <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                        <span>Progress</span>
                        <span>{m.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-indigo-600 h-full rounded-full"
                          style={{ width: `${m.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      ✓ Mastered
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
