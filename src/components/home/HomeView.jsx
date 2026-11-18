import React from 'react';
import { useAuth } from '../../context/useAuth';
import { useApp } from '../../context/useApp';
import { 
  Sparkles, 
  ClipboardCheck, 
  TrendingUp, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  Award,
  ChevronRight,
  Lightbulb,
  Heart
} from 'lucide-react';

export const HomeView = () => {
  const { currentUser, role } = useAuth();
  const { 
    selectedChild, 
    setActiveTab, 
    activities, 
    students,
    toggleActivity 
  } = useApp();

  const completedCount = activities.filter(a => a.completed).length;

  return (
    <div className="space-y-6 pb-24 pt-2">
      {/* Welcome & Role Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 via-purple-700 to-rose-600 p-6 text-white shadow-xl">
        {/* Background decorative circles */}
        <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-44 h-44 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-semibold text-amber-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{role === 'parent' ? 'Nurturing Early Milestones' : 'Classroom Growth Hub'}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Namaste, {currentUser?.name?.split(' ')[0] || 'Friend'}! 👋
              </h1>
              <p className="text-indigo-100 text-sm mt-1 max-w-lg leading-relaxed">
                {role === 'parent'
                  ? `Here is your developmental overview for ${selectedChild?.name || 'your child'}. Every small milestone is a giant leap.`
                  : `Classroom monitor for ${currentUser?.classroom || 'KG-1'}. 18 learners are actively progressing.`}
              </p>
            </div>

            {/* Role Badge Indicator */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-3 self-start sm:self-auto">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-xl">
                {role === 'parent' ? '🏡' : '🏫'}
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">
                  Current View
                </div>
                <div className="text-sm font-bold text-white capitalize">
                  {role === 'parent' ? 'Parent & Home' : 'Educator & School'}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Child Status Card (if Parent) */}
          {role === 'parent' && selectedChild && (
            <div className="mt-5 pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                <span className="text-2xl">{selectedChild.avatar}</span>
                <div>
                  <div className="text-xs text-indigo-200">Selected Child</div>
                  <div className="text-sm font-bold text-white">{selectedChild.name}</div>
                  <div className="text-[11px] text-indigo-100">{selectedChild.age}</div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/30 flex items-center justify-center text-emerald-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-indigo-200">Screening Status</div>
                  <div className="text-xs font-bold text-white">{selectedChild.screeningStatus}</div>
                  <div className="text-[11px] text-emerald-200">Last: {selectedChild.lastScreeningDate}</div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-indigo-200">Milestone Score</div>
                  <div className="text-lg font-black text-white">{selectedChild.overallProgress}%</div>
                  <div className="text-[11px] text-indigo-200">Standardized Target: 75%</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('progress')}
                  className="px-3 py-1.5 rounded-lg bg-white text-indigo-700 text-xs font-bold hover:bg-indigo-50 transition-colors cursor-pointer"
                >
                  View Chart
                </button>
              </div>
            </div>
          )}

          {/* Teacher Summary Metrics (if Teacher) */}
          {role === 'teacher' && (
            <div className="mt-5 pt-4 border-t border-white/20 grid grid-cols-3 gap-3">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-white">18</div>
                <div className="text-xs text-indigo-100 font-medium">Total Students</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-emerald-300">14</div>
                <div className="text-xs text-indigo-100 font-medium">On Track</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-amber-300">4</div>
                <div className="text-xs text-indigo-100 font-medium">Speech/Motor Focus</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5 Bottom Nav Quick Action Launchers */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-slate-900">
            Platform Core Modules
          </h2>
          <span className="text-xs text-slate-500">5 Essential Sections</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div
            onClick={() => setActiveTab('activities')}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              Activities
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              Play-based exercises for motor, speech & sensory growth.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-amber-600">
              <span>{completedCount} Completed</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('screening')}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              Screening
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              Validated ASQ-3 & PRASHO early checklist questionnaires.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-indigo-600">
              <span>Take Screening</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('progress')}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              Progress
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              Domain radar reports, milestone logs & IEP tracking.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-purple-600">
              <span>View Analytics</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          <div
            onClick={() => setActiveTab('resources')}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              Resources
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              Govt schemes (RBSK), verified helplines & toolkits.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-emerald-600">
              <span>Browse Guides</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Daily Tip Card */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-4 sm:p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Daily Developmental Wisdom
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200/60 font-semibold text-amber-900">
              Today
            </span>
          </div>
          <h4 className="text-sm font-bold text-slate-800 mt-1">
            "The Power of Expansion: Turn single words into vivid sentences"
          </h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            When a child says <em>"Car!"</em>, respond enthusiastically with: <em>"Yes, that is a fast red car zooming down the road!"</em>. This adds descriptors without correcting them and boosts receptive vocabulary by 3x.
          </p>
        </div>
      </div>

      {/* Role-Specific Sections */}
      {role === 'parent' ? (
        /* PARENT SPECIFIC CONTENT */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Active IEP / Developmental Goals */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <h3 className="text-sm font-bold text-slate-900">
                  {selectedChild?.name}'s Focus Milestones
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setActiveTab('progress')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                View All
              </button>
            </div>

            <div className="space-y-3.5">
              {selectedChild?.iepGoals.map((goal) => (
                <div key={goal.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-800">{goal.title}</span>
                    <span className="font-bold text-indigo-600">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Next pediatric review in 12 days
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('screening')}
                className="font-bold text-indigo-600 hover:underline cursor-pointer"
              >
                Log Screening
              </button>
            </div>
          </div>

          {/* Today's Recommended Activities */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">
                  Today's Play Missions
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setActiveTab('activities')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                Explore More ({activities.length})
              </button>
            </div>

            <div className="space-y-3">
              {activities.slice(0, 3).map((act) => (
                <div
                  key={act.id}
                  className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/70 flex items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => toggleActivity(act.id)}
                      className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition-all cursor-pointer ${
                        act.completed
                          ? 'bg-emerald-600 text-white'
                          : 'border-2 border-slate-300 hover:border-emerald-500'
                      }`}
                    >
                      {act.completed && <CheckCircle className="w-3.5 h-3.5" />}
                    </button>
                    <div>
                      <div className={`text-xs font-bold ${act.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {act.title}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                        <span className="font-medium text-indigo-600">{act.domain}</span>
                        <span>•</span>
                        <span>{act.duration}</span>
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    act.completed ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {act.completed ? 'Done' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveTab('activities')}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Open Full Activity Catalog
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* TEACHER SPECIFIC CONTENT */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Classroom Student Observations */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Students Needing Support Attention
                </h3>
              </div>
              <span className="text-xs bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded-full">
                {currentUser?.classroom}
              </span>
            </div>

            <div className="space-y-3">
              {students.slice(0, 4).map((student) => (
                <div
                  key={student.id}
                  className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{student.avatar}</span>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{student.name}</div>
                      <div className="text-[11px] text-slate-500">{student.age} • Attendance: {student.attendance}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      student.status.includes('On Track')
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {student.status}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-1">Score: {student.score}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">6 students screened this week</span>
              <button
                type="button"
                onClick={() => setActiveTab('screening')}
                className="text-xs font-bold text-purple-600 hover:text-purple-800 cursor-pointer"
              >
                Screen Next Student →
              </button>
            </div>
          </div>

          {/* Teacher Inclusive Circle Time Recommendations */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Inclusive Circle Time Lesson Plan
                </h3>
              </div>
              <span className="text-xs text-indigo-600 font-semibold">NEP 2020 Aligned</span>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-2">
              <div className="text-xs font-bold text-indigo-900">
                Theme: Multi-Sensory Storytelling & Rhyme Imitation
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Incorporate visual emotion flashcards and tactile textured props during the story to support students with sensory processing or speech delays.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-indigo-200 text-indigo-700 font-semibold">
                  Visual Prompts
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-indigo-200 text-indigo-700 font-semibold">
                  Bilingual Pauses
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-indigo-200 text-indigo-700 font-semibold">
                  Peer Partnering
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button
                type="button"
                onClick={() => setActiveTab('resources')}
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Educator Resource Toolkit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
