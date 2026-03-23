"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) alert(error.message);
    else alert("Check your email to confirm!");
  };

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message);
    else alert("Logged in!");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-80 space-y-4">
        <h1 className="text-xl font-semibold">FOX Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-zinc-900"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-zinc-900"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} className="w-full bg-orange-500 p-3 text-black">
          Login
        </button>

        <button onClick={signUp} className="w-full bg-white p-3 text-black">
          Sign Up
        </button>
      </div>
    </main>
  );
}