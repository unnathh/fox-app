import TasksCard from "../../components/TasksCard";

export default function TasksPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white p-10">
      <h1 className="text-2xl font-semibold mb-6">Tasks</h1>
      <TasksCard />
    </main>
  );
}