"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import Link from "next/link";
import SecondBrainCard from "../components/SecondBrainCard";
import ReflectionCard from "../components/ReflectionCard";
import StreakCard from "../components/StreakCard";
import FocusTimerCard from "../components/FocusTimerCard";
import TasksCard from "../components/TasksCard";
import QuoteCard from "../components/QuoteCard";
import HeroStats from "../components/HeroStats";

export default function Home() {
  const router = useRouter();

useEffect(() => {
  checkUser();
}, []);

async function checkUser() {
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    router.push("/auth");
  }
}
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex w-72 flex-col justify-between border-r border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="p-6">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-xl">
                🦊
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-wide">FOX</h1>
                <p className="text-xs text-zinc-400">Focus • Organize • Execute</p>
              </div>
            </div>

            <nav className="space-y-2">

  <Link
    href="/"
    className="block w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/15"
  >
    Dashboard
  </Link>

  <Link
    href="/tasks"
    className="block w-full rounded-2xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
  >
    Tasks
  </Link>

  <Link
    href="/focus"
    className="block w-full rounded-2xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
  >
    Focus Timer
  </Link>

  <Link
    href="/brain"
    className="block w-full rounded-2xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
  >
    Second Brain
  </Link>

  <Link
    href="/settings"
    className="block w-full rounded-2xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
  >
    Settings
  </Link>

</nav>
          </div>

          <div className="p-6">
            <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-4">
              <p className="mb-1 text-sm font-medium text-orange-300">Current Tier</p>
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-xs text-zinc-400">
                Keep showing up daily to level up.
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1">
          {/* Top bar */}
          <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-6 py-5 md:px-10">
              <div>
                <p className="text-sm text-zinc-400">Welcome back</p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Your focus dashboard
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10">
                  Today
                </button>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold">
                  U
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="px-6 py-8 md:px-10">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-black/30 md:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-orange-300">
                    Stay consistent
                  </p>
                  <h1 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
                    Build discipline quietly, one focused day at a time.
                  </h1>
                  <p className="mt-3 max-w-xl text-sm text-zinc-400 md:text-base">
                    FOX is your private command center for deep work, daily structure,
                    and long-term consistency.
                  </p>
                </div>

                <HeroStats />
              </div>
            </section>

            {/* Grid */}
            <section className="mt-8 grid gap-6 xl:grid-cols-3">
              {/* Left column */}
              <div className="space-y-6 xl:col-span-2">
                <TasksCard />

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Reflection */}
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                    <ReflectionCard />
                    <p className="mt-1 text-sm text-zinc-400">
                      What mattered today? What needs work tomorrow?
                    </p>

                    <textarea
                      placeholder="Write your thoughts..."
                      className="mt-4 h-40 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400"
                    />

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm text-zinc-400">Reflection streak: 5 days</p>
                      <button className="rounded-2xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/15">
                        Save
                      </button>
                    </div>
                  </div>

                  {/* Second Brain */}
                  <SecondBrainCard />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <FocusTimerCard />
                <StreakCard />

                {/* Quote */}
                <QuoteCard />

                {/* Habits */}
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Habits</h3>
                    <span className="text-xs text-zinc-500">This week</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Deep Work</span>
                        <span className="text-zinc-500">4/7</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[57%] rounded-full bg-orange-500" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Reflection</span>
                        <span className="text-zinc-500">5/7</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[71%] rounded-full bg-orange-500" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Reading</span>
                        <span className="text-zinc-500">3/7</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[42%] rounded-full bg-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold">Progress</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs text-zinc-500">Weekly Hours</p>
                      <p className="mt-1 text-2xl font-semibold">18.4</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs text-zinc-500">Completed Tasks</p>
                      <p className="mt-1 text-2xl font-semibold">26</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}