"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const chartData = [
  { date: "Oct 1", value: 2.4 },
  { date: "Oct 5", value: 3.1 },
  { date: "Oct 10", value: 2.9 },
  { date: "Oct 15", value: 3.8 },
  { date: "Oct 20", value: 4.2 },
  { date: "Oct 25", value: 4.9 },
  { date: "Oct 30", value: 5.2 },
]

const algoData = [
  { name: "PancakeStrategy", launched: "1h ago", invested: "$2,000M", current: "$2,200M", roi: "110.0%" },
  { name: "Solana Plays", launched: "2h ago", invested: "$1,500M", current: "$1,800M", roi: "120.6%" },
  { name: "Medium Super Smart Chain", launched: "5h ago", invested: "$1,200M", current: "$1,500M", roi: "102.03%" },
  { name: "TrendingStrategy", launched: "7h ago", invested: "$900M", current: "$1,100M", roi: "95.21%" },
  { name: "Algo5", launched: "1d ago", invested: "$800M", current: "$950M", roi: "91.25%" },
]

export default function AlgoStats() {
  return (
    <section className="relative py-12 px-4 bg-[#0a0a0f]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">OG ALGO STATS</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Chart Section */}
          <div className="bg-black border border-gray-900 rounded-xl p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">Total Value</div>
                <div className="text-4xl font-bold text-white font-mono">$5.2M</div>
                <div className="text-sm text-[#39FF14] mt-1">+33.27%</div>
              </div>
              <div className="flex gap-2">
                {["1M", "3M", "6M", "1Y", "ALL"].map((period) => (
                  <button key={period} className="px-2 py-1 text-xs text-gray-500 hover:text-white transition-colors">
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="date" stroke="#333" style={{ fontSize: "11px" }} />
                <YAxis stroke="#333" style={{ fontSize: "11px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#000",
                    border: "1px solid #39FF14",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#39FF14"
                  strokeWidth={2}
                  dot={{ fill: "#39FF14", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black border border-gray-900 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">24h</div>
              <div className="text-2xl font-bold text-white">$2.4M</div>
            </div>
            <div className="bg-black border border-gray-900 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">7d</div>
              <div className="text-2xl font-bold text-white">$8.1M</div>
            </div>
            <div className="bg-black border border-gray-900 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">30d</div>
              <div className="text-2xl font-bold text-white">$31.2M</div>
            </div>
            <div className="bg-black border border-gray-900 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">All time</div>
              <div className="text-2xl font-bold text-white">$156M</div>
            </div>
          </div>
        </div>

        {/* Algo Performance Table */}
        <div className="bg-black border border-gray-900 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-900">
                <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase">Algorithm</th>
                <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase">Launched</th>
                <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase">Invested</th>
                <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase">Current</th>
                <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase">ROI</th>
                <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {algoData.map((algo, i) => (
                <tr key={i} className="border-b border-gray-900 hover:bg-gray-950 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#39FF14] to-[#00D9FF] rounded-lg"></div>
                      <span className="font-bold text-white">{algo.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{algo.launched}</td>
                  <td className="py-4 px-4 font-mono text-white">{algo.invested}</td>
                  <td className="py-4 px-4 font-mono text-white">{algo.current}</td>
                  <td className="py-4 px-4 font-mono text-[#39FF14] font-bold">{algo.roi}</td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-xs text-gray-400 hover:text-white transition-colors">Share</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="py-3 px-4 text-center">
            <button className="text-sm text-gray-500 hover:text-white transition-colors">Load more</button>
          </div>
        </div>
      </div>
    </section>
  )
}
