import React, { useState } from 'react';
import { useApp } from '../../context/useApp';
import { 
  Sparkles, 
  Circle, 
  Clock, 
  ChevronRight, 
  X, 
  Check,
  Search
} from 'lucide-react';

export const ActivitiesView = () => {
  const { activities, toggleActivity, completedActivitiesCount } = useApp();

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalActivity, setActiveModalActivity] = useState(null);

  const categories = ['All', 'Fine Motor', 'Gross Motor', 'Communication', 'Sensory & Motor', 'Cognitive', 'Social-Emotional'];

  const filteredActivities = activities.filter((act) => {
    const matchesCategory = selectedFilter === 'All' || act.domain === selectedFilter || act.category === selectedFilter;
    const matchesSearch = act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          act.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          act.domain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const completionPercent = Math.round((completedActivitiesCount / activities.length) * 100);

  return (
    <div className="space-y-6 pb-24 pt-2">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold text-amber-100 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Targeted Play & Developmental Milestones</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Developmental Activities
            </h1>
            <p className="text-amber-100 text-xs sm:text-sm mt-1 max-w-md">
              Evidence-based, playful exercises designed to stimulate fine motor, speech, sensory, and problem-solving milestones.
            </p>
          </div>

          {/* Progress Widget */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 sm:min-w-[190px]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-amber-100 font-medium">Activities Goal</span>
              <span className="font-bold text-white">{completedActivitiesCount} of {activities.length}</span>
            </div>
            <div className="w-full bg-white/30 h-2.5 rounded-full overflow-hidden mb-1">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <div className="text-[10px] text-amber-100 text-right font-semibold">
              {completionPercent}% Completed
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search activities by skill or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition-all shadow-2xs"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium self-end sm:self-auto">
            Showing {filteredActivities.length} activities
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === cat
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredActivities.map((act) => (
          <div
            key={act.id}
            className={`rounded-2xl border transition-all duration-200 bg-white p-5 flex flex-col justify-between ${
              act.completed 
                ? 'border-emerald-200 bg-emerald-50/20 shadow-2xs' 
                : 'border-slate-200 hover:border-amber-300 hover:shadow-md'
            }`}
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80">
                  {act.domain}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{act.duration}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 
                onClick={() => setActiveModalActivity(act)}
                className="text-base font-bold text-slate-900 hover:text-amber-600 cursor-pointer transition-colors"
              >
                {act.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                {act.description}
              </p>

              {/* Materials Pills */}
              <div className="mt-3 flex flex-wrap gap-1">
                {act.materials.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                  >
                    • {item}
                  </span>
                ))}
                {act.materials.length > 3 && (
                  <span className="text-[10px] text-slate-400 font-medium self-center">
                    +{act.materials.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setActiveModalActivity(act)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>View Steps & Benefits</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => toggleActivity(act.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  act.completed
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700'
                }`}
              >
                {act.completed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-3.5 h-3.5 text-slate-400" />
                    <span>Mark Done</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Details Modal */}
      {activeModalActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div 
            role="dialog"
            aria-modal="true"
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 px-2 py-0.5 rounded-md bg-amber-50">
                    {activeModalActivity.category} • {activeModalActivity.ageGroup}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    {activeModalActivity.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalActivity(null)}
                  aria-label="Close dialog"
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Instructions */}
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Materials Needed:
                  </h4>
                  <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {activeModalActivity.materials.map((m, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Step-by-Step Instructions:
                  </h4>
                  <ol className="space-y-2 text-xs text-slate-600">
                    {activeModalActivity.instructions.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50">
                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                          {idx + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Developmental Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalActivity.benefits.map((b, idx) => (
                      <span key={idx} className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg font-medium">
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalActivity(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    toggleActivity(activeModalActivity.id);
                    setActiveModalActivity(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold text-white shadow-xs transition-all ${
                    activeModalActivity.completed
                      ? 'bg-slate-700 hover:bg-slate-800'
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                >
                  {activeModalActivity.completed ? 'Mark as Incomplete' : 'Complete Activity Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
