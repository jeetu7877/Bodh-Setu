import React, { useState } from 'react';
import { resourcesData } from '../../data/mockData';
import { 
  BookOpen, 
  Search, 
  PhoneCall, 
  X,
  ChevronRight
} from 'lucide-react';

export const ResourcesView = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeResourceModal, setActiveResourceModal] = useState(null);

  const categories = ['All', 'Government & Rights', 'Parenting Guide', 'Educator Toolkit', 'Sensory Support', 'Directory'];

  const filteredResources = resourcesData.filter((res) => {
    const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const helplines = [
    { name: 'Childline India (National Emergency)', number: '1098', hours: '24x7 Toll-Free' },
    { name: 'Kiran Mental Health / Support Helpline', number: '1800-599-0019', hours: '24x7 Toll-Free' },
    { name: 'NIMHANS Child & Adolescent Psychiatry', number: '080-26995000', hours: 'Mon-Sat 9 AM - 5 PM' },
    { name: 'DEPwD National Institute Helpline (NIEPID)', number: '1800-425-4566', hours: 'Govt Working Hours' },
  ];

  return (
    <div className="space-y-6 pb-24 pt-2">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-emerald-100 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge, Govt Schemes & Support Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Resources & Intervention Support
          </h1>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
            Verified guidance, early intervention pathways (RBSK / DEIC), preschool toolkits, and accredited specialist directories.
          </p>
        </div>
      </div>

      {/* Verified Emergency Helplines Callout */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <PhoneCall className="w-4 h-4 text-emerald-600" />
          <h3 className="text-sm font-bold text-slate-900">
            National Early Childhood & Care Helplines (India)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {helplines.map((hl, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-bold text-slate-800 line-clamp-1">{hl.name}</div>
              <div className="text-sm font-black text-emerald-700 mt-1">{hl.number}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{hl.hours}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter and Search */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search guides, government schemes, speech tips, sensory sheets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all shadow-2xs"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === c
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${res.badgeColor}`}>
                  {res.badge}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">{res.readTime}</span>
              </div>

              <h3 
                onClick={() => setActiveResourceModal(res)}
                className="text-base font-bold text-slate-900 hover:text-emerald-700 cursor-pointer transition-colors"
              >
                {res.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                {res.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1">
                {res.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                {res.type}
              </span>
              <button
                type="button"
                onClick={() => setActiveResourceModal(res)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
              >
                <span>{res.linkText}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resource Detail Modal */}
      {activeResourceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div 
            role="dialog"
            aria-modal="true"
            className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeResourceModal.badgeColor}`}>
                    {activeResourceModal.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {activeResourceModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveResourceModal(null)}
                  aria-label="Close dialog"
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4 text-xs text-slate-600 leading-relaxed">
                <p className="text-sm font-medium text-slate-800">
                  {activeResourceModal.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="font-bold text-slate-900">Key Takeaways & Protocol:</div>
                  <ul className="list-disc pl-4 space-y-1.5">
                    <li>Early identification before age 6 yields the greatest neuroplastic adaptation and functional milestones.</li>
                    <li>Always cross-check developmental checklists over a 2-4 week observational window before clinical referrals.</li>
                    <li>Government District Early Intervention Centres (DEIC) under the National Health Mission offer speech therapy, occupational therapy, and pediatric evaluations without any cost.</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeResourceModal.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveResourceModal(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
