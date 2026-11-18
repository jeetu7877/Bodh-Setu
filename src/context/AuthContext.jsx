import React, { useState, useEffect } from 'react';
import { AuthContext } from './authContextInstance';

const DEMO_PARENT = {
  id: 'usr-parent-1',
  name: 'Priya Sharma',
  email: 'priya.sharma@example.com',
  phone: '+91 98765 43210',
  role: 'parent',
  childName: 'Aarav Sharma',
  childAge: '3 Years 6 Months',
  location: 'Bengaluru, India',
  avatar: '👩',
  relationship: 'Mother',
};

const DEMO_TEACHER = {
  id: 'usr-teacher-1',
  name: 'Ananya Roy',
  email: 'ananya.roy@vidyaschool.edu.in',
  phone: '+91 98111 22334',
  role: 'teacher',
  schoolName: 'Vidya Early Learning Centre',
  designation: 'Lead Educator (Foundational Stage)',
  classroom: 'KG-1 Sunflower Section',
  studentsCount: 18,
  avatar: '👩‍🏫',
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('bodh_setu_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEMO_PARENT;
      }
    }
    return DEMO_PARENT;
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('bodh_setu_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('bodh_setu_user');
    }
  }, [currentUser]);

  const loginAsDemoParent = () => {
    setCurrentUser(DEMO_PARENT);
    setAuthModalOpen(false);
  };

  const loginAsDemoTeacher = () => {
    setCurrentUser(DEMO_TEACHER);
    setAuthModalOpen(false);
  };

  const login = (email, _password, role = 'parent') => {
    const user = role === 'teacher' ? { ...DEMO_TEACHER, email } : { ...DEMO_PARENT, email };
    setCurrentUser(user);
    setAuthModalOpen(false);
  };

  const signup = (userData) => {
    const newUser = {
      id: 'usr-' + Date.now(),
      name: userData.name || (userData.role === 'teacher' ? 'Educator User' : 'Parent User'),
      email: userData.email,
      phone: userData.phone || '',
      role: userData.role || 'parent',
      childName: userData.childName || 'Child',
      childAge: userData.childAge || '3 Years',
      schoolName: userData.schoolName || 'Early Childhood Center',
      classroom: userData.classroom || 'Foundational Grade',
      studentsCount: userData.studentsCount || 15,
      avatar: userData.role === 'teacher' ? '👩‍🏫' : '👩',
      location: 'India',
    };
    setCurrentUser(newUser);
    setAuthModalOpen(false);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const switchRole = (newRole) => {
    if (newRole === 'teacher') {
      setCurrentUser(DEMO_TEACHER);
    } else {
      setCurrentUser(DEMO_PARENT);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        role: currentUser?.role || 'parent',
        isAuthenticated: !!currentUser,
        loginAsDemoParent,
        loginAsDemoTeacher,
        login,
        signup,
        logout,
        switchRole,
        authModalOpen,
        setAuthModalOpen,
        authMode,
        setAuthMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
