import React, { useState, useEffect } from 'react';
import { LoginPage } from './pages/LoginPage';
import { RoleSelectionPage } from './pages/RoleSelectionPage';
import { DashboardPage } from './pages/DashboardPage';

export function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('bodh_setu_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Save session to localStorage whenever currentUser updates
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('bodh_setu_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('bodh_setu_user');
    }
  }, [currentUser]);

  const handleLoginSuccess = (userObj) => {
    setCurrentUser(userObj);
  };

  const handleRoleSelected = (role) => {
    const updatedUser = {
      ...currentUser,
      role,
    };
    setCurrentUser(updatedUser);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // 1. If not logged in -> Show Login / Signup Page
  if (!currentUser) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  // 2. If logged in but role not selected -> Show Role Selection Page
  if (!currentUser.role) {
    return <RoleSelectionPage user={currentUser} onRoleSelected={handleRoleSelected} />;
  }

  // 3. Logged in and role selected -> Show Dashboard Page with empty sections & functional 5-tab navigation
  return <DashboardPage user={currentUser} onLogout={handleLogout} />;
}

export default App;
