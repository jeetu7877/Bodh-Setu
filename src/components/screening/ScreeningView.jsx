import React, { useState } from 'react';
import { useApp } from '../../context/useApp';
import { screeningQuestions } from '../../data/mockData';
import { 
  ClipboardCheck, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  FileText
} from 'lucide-react';

export const ScreeningView = () => {
  const { selectedChild, addScreeningResult, screeningHistory, setActiveTab } = useApp();

  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1 = questionnaire, 2 = results
  const [submittedResult, setSubmittedResult] = useState(null);

  const handleSelectAnswer = (qId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: value,
    }));
  };

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = screeningQuestions.length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const calculateResult = () => {
    let totalScore = 0;
    const maxScore = totalQuestions * 10;

    screeningQuestions.forEach((q) => {
      const ans = answers[q.id];
      if (ans === 'yes') totalScore += 10;
      else if (ans === 'sometimes') totalScore += 5;
    });

    const percent = Math.round((totalScore / maxScore) * 100);
    let status = 'On Track';
    let summaryText = 'Development is progressing in expected milestones for this age cohort.';

    if (percent >= 80) {
      status = 'Optimal Milestone Development';
      summaryText = 'Child demonstrates strong developmental skills across communication, motor, and cognitive domains.';
    } else if (percent >= 60) {
      status = 'Mild Monitoring Recommended';
      summaryText = 'Child is progressing well overall. A few targeted play exercises in Speech & Fine Motor will build greater confidence.';
    } else {
      status = 'Early Intervention Consultation Advised';
      summaryText = 'Consider sharing this screening summary with your pediatrician or visiting a local District Early Intervention Centre (DEIC) for guidance.';
    }

    const resultObj = {
      id: 'scr-' + Date.now(),
      childId: selectedChild?.id || 'c1',
      date: new Date().toISOString().split('T')[0],
      totalQuestions,
      scorePercent: percent,
      status,
      answers,
      notes: summaryText,
    };

    setSubmittedResult(resultObj);
    addScreeningResult(resultObj);
    setCurrentStep(2);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setSubmittedResult(null);
  };

  return (
    <div className="space-y-6 pb-24 pt-2">
      {/* Intro Step */}
      {currentStep === 0 && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-indigo-100 mb-3">
                <ClipboardCheck className="w-4 h-4" />
                <span>Validated Pediatric Developmental Checklist</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Early Milestone Screening
              </h1>
              <p className="text-indigo-100 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                Adapted from standardized early childhood developmental domains (Communication, Motor, Problem Solving & Social-Emotional). Takes just 3-5 minutes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 text-xs sm:text-sm font-bold shadow-md hover:bg-indigo-50 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Start New Screening for {selectedChild?.name || 'Child'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Screening Guidelines Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-3">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-800">Observe Naturally</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Base answers on what you notice during daily play and routines rather than testing the child under pressure.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-3">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-800">Every Child is Unique</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Milestone windows have healthy variance. Screening identifies strengths and areas where fun practice can help.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-3">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-800">Actionable Guidance</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Receive specific play recommendations and government intervention resource references instantly.
              </p>
            </div>
          </div>

          {/* Past Screenings History */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Previous Screening Records
                </h3>
              </div>
              <span className="text-xs text-slate-500">{screeningHistory.length} Recorded</span>
            </div>

            <div className="space-y-3">
              {screeningHistory.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800">
                        Screening on {item.date}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.notes}</p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <div className="text-right">
                      <div className="text-lg font-black text-indigo-600">{item.scorePercent}%</div>
                      <div className="text-[10px] text-slate-400">Score</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Questionnaire Step */}
      {currentStep === 1 && (
        <div className="space-y-5">
          {/* Header & Sticky Progress */}
          <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Questionnaire Progress
              </div>
              <div className="text-sm font-extrabold text-slate-800">
                {answeredCount} of {totalQuestions} answered
              </div>
            </div>

            <div className="flex-1 max-w-xs">
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="text-[10px] text-right text-slate-500 mt-1 font-semibold">
                {progressPercent}% Complete
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              title="Cancel"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Question Cards */}
          <div className="space-y-4">
            {screeningQuestions.map((q, idx) => {
              const currentVal = answers[q.id];

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    currentVal
                      ? 'border-indigo-200 bg-indigo-50/10'
                      : 'border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      Domain: {q.domain}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Question {idx + 1}/{totalQuestions}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-800">
                    {q.question}
                  </h3>

                  {q.clarification && (
                    <p className="text-xs text-slate-500 mt-1 italic">
                      💡 {q.clarification}
                    </p>
                  )}

                  {/* Choice Buttons */}
                  <div className="grid grid-cols-3 gap-2.5 mt-4">
                    <button
                      type="button"
                      onClick={() => handleSelectAnswer(q.id, 'yes')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        currentVal === 'yes'
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <span>Yes, Often (10 pts)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectAnswer(q.id, 'sometimes')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        currentVal === 'sometimes'
                          ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                          : 'bg-slate-50 hover:bg-amber-50 text-slate-700 border-slate-200 hover:border-amber-300'
                      }`}
                    >
                      <span>Sometimes (5 pts)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectAnswer(q.id, 'not_yet')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        currentVal === 'not_yet'
                          ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                          : 'bg-slate-50 hover:bg-rose-50 text-slate-700 border-slate-200 hover:border-rose-300'
                      }`}
                    >
                      <span>Not Yet (0 pts)</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Action */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div className="text-xs text-slate-500">
              {answeredCount === totalQuestions
                ? 'All questions completed! You are ready to generate the developmental score.'
                : `Please answer all questions (${totalQuestions - answeredCount} remaining) for an accurate assessment.`}
            </div>

            <button
              type="button"
              disabled={answeredCount < totalQuestions}
              onClick={calculateResult}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                answeredCount === totalQuestions
                  ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
                  : 'bg-slate-300 cursor-not-allowed text-slate-500'
              }`}
            >
              <span>Submit & View Comprehensive Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Results Step */}
      {currentStep === 2 && submittedResult && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Screening Completed
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                {submittedResult.status}
              </h2>
              <div className="text-4xl font-black text-indigo-600 my-2">
                {submittedResult.scorePercent}%
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {submittedResult.notes}
              </p>
            </div>

            {/* Recommendations */}
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Recommended Next Steps:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-xs font-bold text-amber-900">1. Daily Play Focus</div>
                  <p className="text-[11px] text-amber-800 mt-1">
                    Try the "Sound Safari" and "Rainbow Rice" activities in the Activities tab to strengthen speech imitation and finger pincer grip.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200">
                  <div className="text-xs font-bold text-indigo-900">2. Free Support Available</div>
                  <p className="text-[11px] text-indigo-800 mt-1">
                    Under the Govt RBSK program, free developmental screenings and early therapy are provided at your nearest DEIC.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2 justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Back to History
              </button>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('activities')}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-xs cursor-pointer"
                >
                  Start Recommended Activities
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('progress')}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs cursor-pointer"
                >
                  View Updated Progress Radar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
