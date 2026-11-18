import React, { useState, useEffect } from 'react';
import { initialChildren, activitiesData, classroomStudents } from '../data/mockData';
import { AppContext } from './appContextInstance';

export const AppProvider = ({ children }) => {
  // Navigation tabs: Exactly 5 - 'home', 'activities', 'screening', 'progress', 'resources'
  const [activeTab, setActiveTab] = useState('home');

  // Selected child for Parent role
  const [childrenList, setChildrenList] = useState(() => {
    const saved = localStorage.getItem('bodh_children');
    return saved ? JSON.parse(saved) : initialChildren;
  });
  const [selectedChildId, setSelectedChildId] = useState(initialChildren[0].id);

  // Activities state
  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem('bodh_activities');
    return saved ? JSON.parse(saved) : activitiesData;
  });

  // Students for Teacher role
  const [students, setStudents] = useState(classroomStudents);

  // Screening submissions history
  const [screeningHistory, setScreeningHistory] = useState(() => {
    const saved = localStorage.getItem('bodh_screening_history');
    return saved ? JSON.parse(saved) : [
      {
        id: 'scr-1',
        childId: 'c1',
        date: '2026-10-24',
        totalQuestions: 9,
        scorePercent: 78,
        status: 'On Track - Mild Speech Focus',
        answers: {},
        notes: 'Child shows rapid gross motor skills; speech articulation can be reinforced through phonics play.'
      }
    ];
  });

  // Toast notification
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  useEffect(() => {
    localStorage.setItem('bodh_children', JSON.stringify(childrenList));
  }, [childrenList]);

  useEffect(() => {
    localStorage.setItem('bodh_activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem('bodh_screening_history', JSON.stringify(screeningHistory));
  }, [screeningHistory]);

  const selectedChild = childrenList.find((c) => c.id === selectedChildId) || childrenList[0];

  const toggleActivity = (activityId) => {
    setActivities((prev) =>
      prev.map((act) => {
        if (act.id === activityId) {
          const updated = !act.completed;
          showToast(
            updated ? `Marked "${act.title}" as completed! Great progress!` : `Unmarked "${act.title}"`,
            updated ? 'success' : 'info'
          );
          return { ...act, completed: updated };
        }
        return act;
      })
    );
  };

  const addScreeningResult = (result) => {
    setScreeningHistory((prev) => [result, ...prev]);
    setChildrenList((prev) =>
      prev.map((c) => {
        if (c.id === result.childId) {
          return {
            ...c,
            lastScreeningDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            screeningStatus: result.status,
            overallProgress: result.scorePercent,
          };
        }
        return c;
      })
    );
    showToast('Screening completed and saved successfully!', 'success');
  };

  const completedActivitiesCount = activities.filter((a) => a.completed).length;

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        childrenList,
        setChildrenList,
        selectedChildId,
        setSelectedChildId,
        selectedChild,
        activities,
        toggleActivity,
        completedActivitiesCount,
        students,
        setStudents,
        screeningHistory,
        addScreeningResult,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
