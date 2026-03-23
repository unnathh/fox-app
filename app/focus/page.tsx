import FocusTimerCard from "../../components/FocusTimerCard";
import StreakCard from "../../components/StreakCard";

export default function FocusPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white p-10 space-y-6">
      <h1 className="text-2xl font-semibold">Focus</h1>

      <FocusTimerCard />
      <StreakCard />
    </main>
  );
}