"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TasksCard() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  // 🧠 Get logged-in user
  async function getUser() {
    const { data, error } = await supabase.auth.getUser();

    console.log("USER:", data?.user, error);

    if (data?.user) {
      setUserId(data.user.id);
      fetchTasks(data.user.id);
    } else {
      console.log("No user logged in");
    }
  }

  // 🧠 Fetch tasks
  async function fetchTasks(uid: string) {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", uid)
      .order("created_at", { ascending: false });

    console.log("FETCH TASKS:", data, error);

    if (error) {
      console.log("Fetch error:", error.message);
      return;
    }

    if (data) setTasks(data);
  }

  // 🧠 Add task
  async function addTask() {
    if (!taskInput.trim() || !userId) {
      console.log("Missing input or userId", { taskInput, userId });
      return;
    }

    const { data, error } = await supabase.from("tasks").insert([
      {
        text: taskInput,
        completed: false,
        user_id: userId,
      },
    ]);

    console.log("INSERT RESULT:", data, error);

    if (error) {
      alert(error.message);
      return;
    }

    setTaskInput("");
    fetchTasks(userId);
  }

  // 🧠 Toggle task
  async function toggleTask(task: Task) {
    const { error } = await supabase
      .from("tasks")
      .update({ completed: !task.completed })
      .eq("id", task.id);

    if (error) {
      console.log("Update error:", error.message);
      return;
    }

    if (userId) fetchTasks(userId);
  }

  // 🧠 Delete task
  async function deleteTask(id: string) {
    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      console.log("Delete error:", error.message);
      return;
    }

    if (userId) fetchTasks(userId);
  }

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold mb-4">Tasks</h3>

      <div className="flex gap-3 mb-4">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 p-3 bg-black/20 border border-white/10 rounded-xl"
        />
        <button
          onClick={addTask}
          className="bg-orange-500 px-4 rounded-xl text-black"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between bg-black/20 p-3 rounded-xl"
          >
            <span
              onClick={() => toggleTask(task)}
              className={
                task.completed
                  ? "line-through text-zinc-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}