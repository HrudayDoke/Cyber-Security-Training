# AI-Powered Cybersecurity Training Platform

## Overview

The AI-Powered Cybersecurity Training Platform is an interactive learning management system (LMS) designed to educate users about cybersecurity concepts through modules, quizzes, badges, certificates, and AI-powered assistance.

The platform provides a modern and engaging cybersecurity learning experience with gamification features such as achievements, progress tracking, badges, and certification.

---

# Features

## Authentication System

* User Registration
* Secure Login System
* Session Persistence using Local Storage
* Email and Password Validation

---

## Interactive Dashboard

* Personalized User Dashboard
* Progress Tracking
* Module Completion Tracking
* Earned Badge Overview
* Certificate Access

---

## Cybersecurity Learning Modules

The platform includes multiple cybersecurity learning modules such as:

* Phishing Awareness
* Passwords & 2FA
* Malware & Ransomware
* Social Engineering
* Secure Browsing
* Network Security

Each module contains:

* Learning content
* Detailed explanations
* Interactive quizzes

---

## Quiz System

* Dynamic MCQ-based quizzes
* 10 questions per module
* Score calculation
* Instant evaluation
* Badge unlocking system

---

## Badge & Achievement System

Users unlock badges after scoring 10/10 in quizzes.

Features:

* Achievement popup system
* Badge tracking
* Completed module indicators
* Gamified learning experience

---

## Certificate System

* Dynamic certificate generation
* Personalized certificate with registered username
* Certificate unlock after all badges are earned

---

## AI Cybersecurity Assistant

Integrated AI assistant powered by Google Gemini API.

Capabilities:

* Answer cybersecurity questions
* Explain phishing attacks
* Explain malware and ransomware
* Provide cybersecurity awareness guidance
* Beginner-friendly cybersecurity mentoring

---

# Tech Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

## Backend

* Next.js API Routes

## AI Integration

* Google Gemini API
* @google/generative-ai SDK

## UI & Icons

* Lucide React Icons

## State Management

* React Hooks
* Local Storage

---

# AI-Assisted Development Workflow

This project was developed using AI-assisted development practices.

AI tools were utilized for:

* UI implementation guidance
* Debugging assistance
* Component architecture refinement
* Dynamic routing setup
* React and Next.js troubleshooting
* Feature ideation
* Code optimization
* Development workflow acceleration

The project followed an iterative AI-assisted engineering workflow where features were progressively designed, implemented, tested, and refined.

---

# Project Structure

```bash
src/
│
├── app/
│   ├── (main)/
│   │   ├── dashboard/
│   │   ├── modules/
│   │   ├── quiz/
│   │   ├── badges/
│   │   ├── certificate/
│   │   └── assistant/
│   │
│   └── api/
│       └── chat/
│
├── components/
│   └── dashboard/
│
├── data/
│   ├── moduleContent.ts
│   └── quizData.ts
│
└── lib/
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/HrudayDoke/Cyber-Security-Training.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Create Environment File

Create:

```bash
.env.local
```

Add:

```env
NEXT_PUBLIC_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Future Improvements

Potential future enhancements:

* Real database integration
* Admin dashboard
* PDF certificate download
* AI-generated quizzes
* Threat simulation exercises
* User analytics dashboard
* Leaderboard system
* Email verification system

---

# Deployment

The project can be deployed using:

* Vercel
* Netlify

---

# Author

Hrudaynath Doke

GitHub:
https://github.com/HrudayDoke
