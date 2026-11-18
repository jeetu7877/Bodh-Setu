# Bodh Setu (बोध सेतु)

**Bodh Setu** is an early developmental screening, observation, and intervention platform bridging parents, educators, and early child specialists. It is aligned with Indian foundational stage developmental guidelines (NEP-2020 & RBSK).

---

## 🚀 Quick Start

To run Bodh Setu locally on your laptop:

```bash
cd "Desktop\Bodh-Setu"
npm run dev
```

Open your web browser and go to:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🌟 Key Features

1. **Role Selection (Parent & Educator Modes)**:
   - **Parent / Guardian View**: Tracks individual child developmental milestones (e.g. Aarav Sharma, 3.5 yrs), active IEP goals, and play missions.
   - **Educator / Teacher View**: Classroom overview (e.g. KG-1 Sunflower Section, 18 students), attendance, student screening tracking, and inclusive circle time lesson plans.
   - **Instant Demo Switcher**: Instant one-click demo login buttons for both roles without typing credentials.

2. **Five Bottom Navigation Modules**:
   - **Home**: Daily developmental wisdom, child/classroom summary, priority milestones, and today's play missions.
   - **Activities**: Evidence-based play activities categorized by domain (Fine Motor, Gross Motor, Communication, Sensory, Problem-Solving, Social-Emotional) with step-by-step instructions and completion tracking.
   - **Screening**: Interactive 9-question standardized early milestone questionnaire (inspired by ASQ-3 & PRASHO) with instant percentage scoring, developmental status assessment, and clinical recommendations.
   - **Progress**: Multi-domain progress radar (Communication, Gross Motor, Fine Motor, Cognitive, Personal-Social), milestone achievement timeline, and printable summary report.
   - **Resources**: Verified directory of Indian national helplines (Childline 1098, Kiran, NIMHANS, NIEPID), RBSK / DEIC early intervention guidance, and preschool inclusive checklists.

---

## 📁 Project Structure

```
Bodh-Setu/
├── public/                 # Static assets & SVG icons
├── src/
│   ├── assets/             # Images and styles
│   ├── components/
│   │   ├── common/         # Header, BottomNavigation, Toast
│   │   ├── auth/           # AuthModal, RoleSelector
│   │   ├── home/           # HomeView (Parent & Teacher views)
│   │   ├── activities/     # ActivitiesView & Activity details modal
│   │   ├── screening/      # ScreeningView, Questionnaire & Results
│   │   ├── progress/       # ProgressView, Domain radar & Timeline
│   │   └── resources/      # ResourcesView & Helpline directory
│   ├── context/            # AuthContext, AppContext & custom hooks
│   ├── data/               # Mock developmental & screening datasets
│   ├── App.jsx             # Main application container
│   ├── main.jsx            # React root entry point
│   └── index.css           # Tailwind CSS directives
├── index.html              # HTML shell & font definitions
├── vite.config.js          # Vite configuration with Tailwind plugin
└── package.json            # Scripts & project dependencies
```

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Code Quality**: Oxlint (0 warnings, 0 errors)
