"use client";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type ChartData = {
  time: string;
  price: number;
};

export default function TradingChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [trendColor, setTrendColor] = useState("#22c55e"); // green by default

  async function fetchBTCPrice() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const json = await res.json();
      const price = json.bitcoin.usd;
      const time = new Date().toLocaleTimeString();

      setData((prev) => {
        const updated = [...prev.slice(-19), { time, price }];

        // Change line color based on movement
        if (prev.length > 0) {
          const lastPrice = prev[prev.length - 1].price;
          if (price > lastPrice) setTrendColor("#22c55e"); // green
          else if (price < lastPrice) setTrendColor("#ef4444"); // red
        }

        return updated;
      });
    } catch (err) {
      console.error("Error fetching BTC price:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBTCPrice();
    const interval = setInterval(fetchBTCPrice, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading && data.length === 0)
    return (
      <div className="bg-gray-900 p-6 rounded-xl text-gray-400 text-center">
        Loading live chart...
      </div>
    );

  const latestPrice = data[data.length - 1]?.price;

  return (
    <div className="bg-gray-900 p-4 rounded-sm max-w-7xl shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-white">BTC/USD Live Chart</h2>
        {data.length > 0 && (
          <p className="text-2xl flex items-center space-x-2 text-white">
            <span>Latest:</span>
            <span
              className={`${
                trendColor === "#22c55e" ? "text-green-400" : "text-red-400"
              } transition-all`}
            >
              ${latestPrice?.toLocaleString()}
            </span>
          </p>
        )}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="time" tick={{ fill: "#aaa", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "#aaa", fontSize: 12 }}
            domain={["auto", "auto"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "none",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={trendColor}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
