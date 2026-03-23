"use client";

import { useEffect, useState } from "react";

const quotes = [
  "Consistency beats motivation.",
  "Small progress still counts.",
  "Discipline creates freedom.",
  "Focus is a superpower in a distracted world.",
  "You do not need more time. You need more intention.",
  "Build quietly. Let results make the noise.",
  "A calm mind works deeper.",
];

export default function QuoteCard() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const day = new Date().getDate();
    setQuote(quotes[day % quotes.length]);
  }, []);

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">Quote of the Day</h3>
      <p className="mt-4 text-base leading-7 text-zinc-300">“{quote}”</p>
    </div>
  );
}