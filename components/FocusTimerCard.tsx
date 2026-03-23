"use client";

import { useEffect, useRef, useState } from "react";

export default function FocusTimerCard() {
  const defaultSeconds = 25 * 60;

  const [timeLeft, setTimeLeft] = useState(defaultSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [focusMinutes, setFocusMinutes] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedFocus = localStorage.getItem("fox_focus_minutes");
    if (savedFocus) {
      setFocusMinutes(Number(savedFocus));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fox_focus_minutes", String(focusMinutes));
  }, [focusMinutes]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          setFocusMinutes((mins) => mins + 25);
          return defaultSeconds;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(defaultSeconds);
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">Focus Timer</h3>
      <p className="mt-1 text-sm text-zinc-400">Enter deep work mode.</p>

      <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Pomodoro</p>
        <p className="mt-3 text-5xl font-semibold tracking-tight">
          {formatTime(timeLeft)}
        </p>

        <div className="mt-5 flex justify-center gap-3">
          {!isRunning ? (
            <button
              onClick={handleStart}
              className="rounded-2xl bg-orange-500 px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="rounded-2xl bg-orange-500 px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              Pause
            </button>
          )}

          <button
            onClick={handleReset}
            className="rounded-2xl border border-white/10 bg-white/10 px-5 py-2.5 text-sm transition hover:bg-white/15"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs text-zinc-500">Focus Time Today</p>
        <p className="mt-1 text-2xl font-semibold">{focusMinutes} mins</p>
      </div>
    </div>
  );
}