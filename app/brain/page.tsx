import SecondBrainCard from "../../components/SecondBrainCard";
import ReflectionCard from "../../components/ReflectionCard";

export default function BrainPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white p-10 space-y-6">
      <h1 className="text-2xl font-semibold">Second Brain</h1>

      <ReflectionCard />
      <SecondBrainCard />
    </main>
  );
}