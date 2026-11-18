# Bodh Setu (बोध सेतु) - Phase 1

> **"Bridging Understanding, Unlocking Potential"**

Bodh Setu is an early developmental support and screening platform connecting parents and educators to unlock every learner's potential.

---

## 🏗️ Project Architecture

```
Bodh-Setu/
│
├── frontend/                     # React.js + Vite Client Application
│   ├── src/
│   │   ├── components/           # Header, BottomNavigation, EducationalIllustration
│   │   ├── pages/                # LoginPage, RoleSelectionPage, DashboardPage
│   │   ├── assets/               # Branding and styles
│   │   ├── App.jsx               # Client authentication state & view routing
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Soft pastel theme & Tailwind styles
│   ├── index.html                # HTML document shell
│   ├── vite.config.js            # Vite configuration
│   └── package.json              # Frontend dependencies and scripts
│
├── backend/                      # Node.js + Express.js API Server
│   ├── src/
│   │   ├── routes/               # Express route handlers (healthRoutes.js)
│   │   ├── controllers/          # Business logic controllers (healthController.js)
│   │   └── config/               # Environment & server config (index.js)
│   ├── server.js                 # Express server entry point
│   └── package.json              # Backend dependencies and scripts
│
├── .gitignore                    # Git ignore rules
└── README.md                     # Documentation
```

---

## 🚀 Running the Application

### 1. Frontend (React + Vite)
In a terminal, run:
```bash
cd frontend
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 2. Backend (Node.js + Express)
In a separate terminal, run:
```bash
cd backend
npm run dev
# or: npm start
```
The server will start on port `5000`.
Health-check endpoint: **[http://localhost:5000/api/health](http://localhost:5000/api/health)**

---

## 🌟 Phase 1 Implemented Features

1. **Login / Signup Page**:
   - Bodh Setu branding with tagline: *"Bridging Understanding, Unlocking Potential"*.
   - Welcome heading: *"Welcome to Bodh Setu"* & Subtitle: *"Every learner deserves a better way to learn."*
   - Email and Password input fields.
   - Show/Hide password toggle.
   - Create Account / Sign Up toggle with Name field.
   - Forgot Password demo modal.
   - Google Sign-In demo button.
   - Beautiful educational illustration in a soft pastel educational palette (lavender, sky blue, mint green, and white).

2. **Frontend-Only Demo Authentication**:
   - Registers new users and stores accounts in `localStorage`.
   - Remembers user session across browser refreshes.
   - Logout functionality clears session and resets to login.

3. **Parent / Teacher Role Selection**:
   - Interactive role selection cards for **Parent** and **Teacher**.
   - Persists selected role in `localStorage`.
   - Navigates seamlessly to the dashboard.

4. **Home Dashboard with Exactly 5 Empty Sections**:
   - Common Top Header: Bodh Setu logo, welcome message, user profile icon, Parent/Teacher role badge, and logout button.
   - Common Bottom Navigation with 5 clickable options:
     - **Home** (displays only the title "Home")
     - **Activities** (displays only the title "Activities")
     - **Screening** (displays only the title "Screening")
     - **Progress** (displays only the title "Progress")
     - **Resources** (displays only the title "Resources")
   - Smooth navigation transitions with active and inactive tab styling.
   - Completely clean main content area with zero dummy cards or premature modules.

5. **Express.js Backend Health API**:
   - `GET /api/health` returns status confirmation.
   - Modular architecture ready with `routes/`, `controllers/`, and `config/`.
