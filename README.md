# 🦊 FOX — Focus. Organize. Execute.

FOX is a modern productivity web app designed to help users build discipline, stay focused, and manage their daily workflow — all in one clean, distraction-free dashboard.

---

##  Live Demo

 https://fox-app-flame.vercel.app/

---

##  Features

###  Productivity Dashboard

* Clean, minimal UI for deep focus
* Real-time stats: streak, focus time, tasks

### ⏱ Focus Timer

* Start / Pause / Reset timer
* Tracks focus sessions
* Stores focus time locally

###  Task Manager (Connected to Database)

* Add / delete / complete tasks
* Tasks persist using Supabase
* User-specific data (secure)

###  Streak System

* Tracks consistency
* Encourages daily usage

###  Daily Reflection

* Write daily thoughts
* Builds self-awareness habit

###  Second Brain

* Save ideas, notes, and learning
* Stored locally (expandable to DB)

###  Quote of the Day

* Dynamic motivational quotes

---

##  Authentication

* Email + Password login/signup
* Supabase Authentication
* Protected routes (no login → no access)

---

##  Tech Stack

* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Supabase (Auth + Database)
* **Deployment:** Vercel
* **Language:** TypeScript

---

##  Project Structure

```
fox-app/
├── app/
│   ├── page.tsx
│   ├── tasks/
│   ├── focus/
│   ├── brain/
│   ├── settings/
│   └── auth/
├── components/
│   ├── TasksCard.tsx
│   ├── FocusTimerCard.tsx
│   ├── StreakCard.tsx
│   ├── SecondBrainCard.tsx
│   ├── ReflectionCard.tsx
│   ├── HeroStats.tsx
│   └── QuoteCard.tsx
├── lib/
│   └── supabase.ts
```

---

##  Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_publishable_key
```

---

##  Getting Started

### 1. Clone the repo

```
git clone https://github.com/unnathh/fox-app.git
cd fox-app
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

##  Database (Supabase)

### Table: `tasks`

| Column     | Type      |
| ---------- | --------- |
| id         | uuid (PK) |
| user_id    | uuid      |
| text       | text      |
| completed  | boolean   |
| created_at | timestamp |

### Security

* Row Level Security (RLS) enabled
* Users can only access their own data

---

##  Future Improvements

*  Analytics dashboard (charts & insights)
*  Save focus timer to database
*  Search & tagging in Second Brain
*  Mobile responsiveness improvements
*  Community features (shared thoughts)
*  Monetization (premium features)

---

##  Contributing

Contributions are welcome!
Feel free to fork the repo and submit a PR.

---

##  License

This project is open-source and available 

---

##  Author

**Unnath**

* GitHub: https://github.com/unnathh

---

##  Vision

FOX is built to be more than a productivity tool —
it’s a **daily system for building discipline and clarity**.

> “Consistency beats motivation.”

---
