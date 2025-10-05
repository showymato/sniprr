"use client"

import { useTrendingTokens } from "@/hooks/use-token-data"

export default function TrendingTicker() {
  const { tokens, loading } = useTrendingTokens()

  // Create a display array with token names
  const displayTokens =
    tokens.length > 0 ? tokens.slice(0, 7).map((coin) => coin.item?.name || "TOKEN") : ["LOADING..."]

  // Repeat tokens to create seamless scroll
  const repeatedTokens = [...displayTokens, ...displayTokens, ...displayTokens]

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#39FF14]/10 via-[#00D9FF]/10 to-[#39FF14]/10 border-y border-[#39FF14]/30 py-3">
      <div className="flex animate-scroll whitespace-nowrap">
        {repeatedTokens.map((tokenName, i) => (
          <span key={i} className="inline-block mx-8 text-[#39FF14] font-bold text-sm tracking-wider font-mono">
            {loading ? "LOADING..." : `${tokenName.toUpperCase()} 🔥`}
          </span>
        ))}
      </div>
    </div>
  )
}
