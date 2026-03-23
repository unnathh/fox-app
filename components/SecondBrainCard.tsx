"use client";

import { useEffect, useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function SecondBrainCard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("fox_second_brain");
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fox_second_brain", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle && !trimmedContent) return;

    const newNote: Note = {
      id: Date.now(),
      title: trimmedTitle || "Untitled Note",
      content: trimmedContent,
    };

    setNotes((prev) => [newNote, ...prev]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">Second Brain</h3>
      <p className="mt-1 text-sm text-zinc-400">
        Store ideas, notes, and thoughts in one place.
      </p>

      <div className="mt-4 space-y-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          className="h-28 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orange-400"
        />

        <button
          onClick={addNote}
          className="rounded-2xl bg-orange-500 px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
        >
          Save Note
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {notes.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-4 text-sm text-zinc-500">
            No notes yet. Save your first idea.
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{note.title}</p>
                  <p className="mt-1 text-xs text-zinc-500 whitespace-pre-wrap">
                    {note.content}
                  </p>
                </div>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 hover:bg-white/10"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}