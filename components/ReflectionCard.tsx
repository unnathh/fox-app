"use client";

import { useEffect, useState } from "react";

export default function ReflectionCard() {
  const todayKey = new Date().toDateString();
  const storageKey = `fox_reflection_${todayKey}`;

  const [text, setText] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setText(saved);
    }
  }, [storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, text);
    setSavedMessage("Saved for today.");
    setTimeout(() => setSavedMessage(""), 2000);
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">Daily Reflection</h3>
      <p className="mt-1 text-sm text-zinc-400">
        What mattered today? What needs work tomorrow?
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts..."
        className="mt-4 h-40 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400"
      />

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          {savedMessage ? savedMessage : "Your note is private on this browser."}
        </p>
        <button
          onClick={handleSave}
          className="rounded-2xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/15"
        >
          Save
        </button>
      </div>
    </div>
  );
}