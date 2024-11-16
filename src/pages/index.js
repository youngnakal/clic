import Navbar from "../components/Navbar";
import Miner from "../components/Miner";
import BottomNav from "../components/BottomNav";
import { useState } from "react";

export default function Home() {
  const [coin, setCoin] = useState(0);

  const handleMine = async () => {
    setCoin(coin + 1);

    try {
      const response = await fetch("/api/reward", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coin: 1 }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Mining error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-6">YoungFi</h1>
        <Miner onMine={handleMine} />
        <p className="mt-4 text-2xl">Total Coin: {coin}</p>
      </main>
      {/* Add Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
