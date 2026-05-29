# AI Cybersecurity Training Platform

## Overview

AI Cybersecurity Training Platform is a modern cybersecurity learning application that combines interactive training modules, quizzes, gamification, and AI-powered cybersecurity assistance.

The platform helps users learn cybersecurity concepts through structured learning paths while leveraging Generative AI to provide contextual guidance and threat analysis.

---

## Source Code Repository

GitHub Repository:

https://github.com/HrudayDoke/Cyber-Security-Training

---

## Deployment

Deployment Link:

https://cyber-security-training-pqlw.vercel.app

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### AI & Backend

* Google Gemini API
* @google/generative-ai SDK
* REST API Architecture

### Deployment & DevOps

* GitHub
* Vercel

---

## Features

### Learning Management System

* Cybersecurity learning modules
* Interactive quizzes
* Progress tracking
* Achievement badges
* Certificate generation

### AI Features

#### CyberAI Assistant

A Retrieval-Augmented Generation (RAG) inspired cybersecurity assistant that provides contextual cybersecurity guidance using the platform knowledge base.

#### AI Phishing Analyzer

Analyzes suspicious emails and messages and provides:

* Threat Level
* Attack Indicators
* Explanation
* Recommendations

#### AI Quiz Generator

Generates module-specific cybersecurity quizzes using Gemini AI.

Fallback Strategy:
When AI services are unavailable, the application automatically loads predefined quizzes to maintain uninterrupted user experience.

---

## Architecture

### Learning Flow

```text
User
 ↓
Cybersecurity Module
 ↓
Learning Content
 ↓
Quiz Assessment
 ↓
Badges & Certificate
```

### CyberAI Flow

```text
User Question
 ↓
Knowledge Base Retrieval
 ↓
Context Construction
 ↓
Gemini API
 ↓
Cybersecurity Response
```

### Phishing Analyzer Flow

```text
Email / Message
 ↓
Prompt Engineering Layer
 ↓
Gemini Analysis
 ↓
Threat Assessment
```

---

## AI-Assisted Development Process

AI-assisted development was used throughout the project lifecycle.

### Areas Where AI Assistance Was Used

* UI component generation
* Application architecture planning
* TypeScript code generation
* API integration workflows
* Debugging and troubleshooting
* Prompt engineering
* Cybersecurity content generation
* RAG workflow design

### Human Contributions

* Architecture decisions
* Feature implementation
* Application integration
* Testing and debugging
* UI customization
* Deployment preparation

---

## Key Implementation Decisions

### 1. Next.js App Router

Selected for:

* Modern React architecture
* Scalability
* Server and Client Component support
* API route integration

### 2. Modular Learning Structure

Each cybersecurity topic is designed as an independent module for easier maintenance and future expansion.

### 3. AI-Powered Learning

Implemented:

* CyberAI Assistant
* AI Phishing Detection
* AI Quiz Generation

### 4. Fallback Mechanism

Because external AI services may become unavailable due to quota limits or service interruptions, fallback content ensures continuous usability.

### 5. Gamification

Added:

* Badges
* Progress tracking
* Certificates

to improve learner engagement.

---

## Prompt Engineering Examples

### CyberAI Assistant

```text
You are a cybersecurity expert.

Answer the question using the provided cybersecurity knowledge base.

Provide:
- Explanation
- Real-world example
- Prevention tips
```

### Phishing Analyzer

```text
Analyze the following email or message.

Return:
- Threat Level
- Indicators
- Explanation
- Recommendation
```

### Quiz Generator

```text
Generate 10 cybersecurity multiple-choice questions.

Return only valid JSON.

Each question must contain:
- Question
- Four options
- Correct answer
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/HrudayDoke/Cyber-Security-Training.git
cd Cyber-Security-Training
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create:

```env
.env.local
```

Add:

```env
NEXT_PUBLIC_GEMINI_API_KEY=YOUR_API_KEY
```

### Run Application

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Future Enhancements

* Full vector-database RAG implementation
* Semantic search over cybersecurity content
* Personalized learning recommendations
* Real-time threat intelligence integration
* Advanced phishing detection models
* Adaptive AI-generated learning paths

---

## Author

Hrudaynath Doke

AI Engineer Candidate

GitHub:
https://github.com/HrudayDoke
