"use client";
import { generateFakeTrade, Trade } from "@/lib/FakeTradeBots";
import React, { useEffect, useState } from "react";

const TradeList = () => {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrades((prev) => [generateFakeTrade(), ...prev.slice(0, 20)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Live Trading Simulation</h1>
      <div className="bg-gray-900 text-white rounded-xl p-4 shadow-lg">
        <div className="grid grid-cols-4 text-sm border-b border-gray-700 pb-2 mb-2">
          <span>Time</span>
          <span>Side</span>
          <span>Amount</span>
          <span>Price</span>
        </div>
        {trades.map((t) => (
          <div
            key={t.id}
            className="grid grid-cols-4 text-sm border-b border-gray-800 py-1"
          >
            <span>{t.time}</span>
            <span
              className={t.side === "BUY" ? "text-green-400" : "text-red-400"}
            >
              {t.side}
            </span>
            <span>{t.amount} BTC</span>
            <span>${t.price.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeList;
