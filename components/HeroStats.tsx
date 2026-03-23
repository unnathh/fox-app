"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function HeroStats() {
  const [streak, setStreak] = useState(0);
  const [focusMinutes, setFocusMinutes] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    const savedTasks: Task[] = JSON.parse(localStorage.getItem("fox_tasks") || "[]");
    const savedFocus = Number(localStorage.getItem("fox_focus_minutes") || "0");
    const savedStreak = Number(localStorage.getItem("fox_streak") || "0");

    setTaskCount(savedTasks.length);
    setFocusMinutes(savedFocus);
    setStreak(savedStreak);
  }, []);

  const focusHours = (focusMinutes / 60).toFixed(1);

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center">
        <p className="text-xs text-zinc-400">Streak</p>
        <p className="mt-1 text-xl font-semibold">{streak}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center">
        <p className="text-xs text-zinc-400">Focus</p>
        <p className="mt-1 text-xl font-semibold">{focusHours}h</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center">
        <p className="text-xs text-zinc-400">Tasks</p>
        <p className="mt-1 text-xl font-semibold">{taskCount}</p>
      </div>
    </div>
  );
}