import React, { useState } from 'react';
import { 
  BookOpen, 
  PenTool, 
  Calculator, 
  ClipboardList, 
  GraduationCap, 
  Lightbulb, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  HelpCircle, 
  BarChart2, 
  Play,
  Layers
} from 'lucide-react';
import { MinimalIllustration } from '../components/MinimalIllustration';

export const HomePage = ({ user, onNavigateTab }) => {
  const [selectedModule, setSelectedModule] = useState(null); // null | 'Dyslexia' | 'Dysgraphia' | 'Dyscalculia'

  const isTeacher = user?.role === 'Teacher';
  const roleSubtitle = isTeacher
    ? "Create a more supportive learning environment."
    : "Support your child's learning journey.";

  // If a module is selected, render its clean placeholder
  if (selectedModule) {
    const moduleDetails = {
      Dyslexia: {
        title: 'Dyslexia Module',
        tagline: 'Reading, Letter Recognition & Word Understanding',
        description:
          'Structured approaches and multisensory techniques designed to support phonetic awareness, reading fluency, and comprehension.',
      },
      Dysgraphia: {
        title: 'Dysgraphia Module',
        tagline: 'Handwriting, Spelling & Written Expression',
        description:
          'Fine motor exercises, spatial coordination practices, and assistive strategies to make handwriting and written expression more comfortable.',
      },
      Dyscalculia: {
        title: 'Dyscalculia Module',
        tagline: 'Number Sense, Counting & Mathematical Concepts',
        description:
          'Visual representations of quantities, concrete mathematical manipulatives, and sequential problem-solving strategies for foundational numeracy.',
      },
    }[selectedModule];

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-24">
        {/* Breadcrumb Back Navigation */}
        <button
          type="button"
          onClick={() => setSelectedModule(null)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg mb-6 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        {/* Module Placeholder Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full mb-3">
            <span>Learning Area Module</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {moduleDetails.title}
          </h1>
          <p className="text-sm font-medium text-slate-600 mt-1">
            {moduleDetails.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed max-w-2xl">
            {moduleDetails.description}
          </p>

          {/* Clean Notice */}
          <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
            <HelpCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">Module Placeholder:</span>{' '}
              Diagnostic observational questionnaires, targeted developmental activities, and specialized learning materials for this area will be introduced in the upcoming phase.
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigateTab('Screening')}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Go to Screening
            </button>
            <button
              type="button"
              onClick={() => setSelectedModule(null)}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Return to Home Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 space-y-10">
      {/* 1. WELCOME SECTION */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Welcome Text Content */}
          <div className="md:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full">
              <span>{roleSubtitle}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome to Bodh Setu
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Every child learns differently. Let's make learning easier together.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Foundational Stage Support</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Inclusive Learning Focus</span>
              </div>
            </div>
          </div>

          {/* Subtle Educational Illustration */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <MinimalIllustration />
          </div>
        </div>
      </section>

      {/* 2. THREE LEARNING MODULES */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Explore Learning Modules
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Choose a learning area to understand and support individual learning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Dyslexia */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-teal-700 flex items-center justify-center mb-4">
                <BookOpen className="w-4 h-4" />
              </div>

              <h3 className="text-base font-bold text-slate-900">
                Dyslexia
              </h3>

              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed min-h-[3rem]">
                Support reading, letter recognition and word understanding.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedModule('Dyslexia')}
                className="w-full py-2 px-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explore Module</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Card 2: Dysgraphia */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-teal-700 flex items-center justify-center mb-4">
                <PenTool className="w-4 h-4" />
              </div>

              <h3 className="text-base font-bold text-slate-900">
                Dysgraphia
              </h3>

              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed min-h-[3rem]">
                Support handwriting, spelling and written expression.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedModule('Dysgraphia')}
                className="w-full py-2 px-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explore Module</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Card 3: Dyscalculia */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 text-teal-700 flex items-center justify-center mb-4">
                <Calculator className="w-4 h-4" />
              </div>

              <h3 className="text-base font-bold text-slate-900">
                Dyscalculia
              </h3>

              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed min-h-[3rem]">
                Support number recognition, counting and mathematical understanding.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedModule('Dyscalculia')}
                className="w-full py-2 px-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explore Module</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK ACCESS SECTION */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Quick Access
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Navigate directly to core platform areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Access 1: Screening */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
                <ClipboardList className="w-4 h-4 text-teal-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Screening</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Answer questionnaires to observe possible learning difficulties.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigateTab('Screening')}
              className="mt-4 w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Start Screening
            </button>
          </div>

          {/* Access 2: Activities */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
                <GraduationCap className="w-4 h-4 text-teal-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Activities</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Practice through interactive educational games and exercises.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigateTab('Activities')}
              className="mt-4 w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Explore Activities
            </button>
          </div>

          {/* Access 3: Resources */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4 text-teal-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Resources</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Access curated educational materials and learning guidance.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigateTab('Resources')}
              className="mt-4 w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              View Resources
            </button>
          </div>
        </div>
      </section>

      {/* 4. HOW BODH SETU WORKS */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            How Bodh Setu Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            A structured, 5-step approach to identify needs and support every learner.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {/* Step 1 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                  1
                </span>
                <Layers className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Select a Module
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Choose Dyslexia, Dysgraphia or Dyscalculia.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                  2
                </span>
                <ClipboardList className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Complete Screening
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Answer module-based questionnaires.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                  3
                </span>
                <HelpCircle className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Understand Observations
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                View screening results and awareness summaries.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                  4
                </span>
                <Play className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Practice Through Activities
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Improve learning through interactive exercises.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                  5
                </span>
                <BarChart2 className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Track Progress
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Monitor practice and learning progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DAILY LEARNING TIP */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Learning Tip of the Day
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              "Encourage children to learn at their own pace. Small steps and regular practice can make learning easier."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
