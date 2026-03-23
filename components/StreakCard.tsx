"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function StreakCard() {
  const [streak, setStreak] = useState(0);
  const [tier, setTier] = useState("Starter");

  useEffect(() => {
    const tasks: Task[] = JSON.parse(localStorage.getItem("fox_tasks") || "[]");
    const focusMinutes = Number(localStorage.getItem("fox_focus_minutes") || "0");

    const completedTasks = tasks.filter((task) => task.completed).length;
    const isActiveToday = completedTasks >= 1 || focusMinutes >= 25;

    const today = new Date().toDateString();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toDateString();

    let savedStreak = Number(localStorage.getItem("fox_streak") || "0");
    const lastActiveDate = localStorage.getItem("fox_last_active_date");

    if (isActiveToday) {
      if (lastActiveDate === today) {
        // already counted today
      } else if (lastActiveDate === yesterday) {
        savedStreak += 1;
        localStorage.setItem("fox_streak", String(savedStreak));
        localStorage.setItem("fox_last_active_date", today);
      } else if (!lastActiveDate) {
        savedStreak = 1;
        localStorage.setItem("fox_streak", "1");
        localStorage.setItem("fox_last_active_date", today);
      } else {
        savedStreak = 1;
        localStorage.setItem("fox_streak", "1");
        localStorage.setItem("fox_last_active_date", today);
      }
    } else {
      if (lastActiveDate && lastActiveDate !== today && lastActiveDate !== yesterday) {
        savedStreak = 0;
        localStorage.setItem("fox_streak", "0");
      }
    }

    setStreak(savedStreak);
    setTier(getTier(savedStreak));
  }, []);

  function getTier(streak: number) {
    if (streak >= 91) return "Elite Focus";
    if (streak >= 31) return "Disciplined";
    if (streak >= 8) return "Consistent";
    return "Starter";
  }

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">Streak</h3>
      <p className="mt-1 text-sm text-zinc-400">Consistency compounds quietly.</p>

      <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Current Streak</p>
        <p className="mt-3 text-5xl font-semibold tracking-tight">🔥 {streak}</p>

        <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4">
          <p className="text-xs text-orange-300">Current Tier</p>
          <p className="mt-1 text-xl font-semibold">{tier}</p>
        </div>
      </div>
    </div>
  );
}