"use client"

import { AreaChart, Area, ResponsiveContainer } from "recharts"
import { useTopTokens } from "@/hooks/use-token-data"
import { formatPrice, formatNumber } from "@/lib/api"
import { useTrendingTokens } from "@/hooks/use-token-data"

export default function MainTokenCard() {
  const { tokens: topTokens, loading } = useTopTokens(1)
  const { tokens: trendingTokens } = useTrendingTokens()

  const featuredToken = topTokens[0]

  // Generate chart data based on 24h price change
  const generateChartData = (priceChange: number) => {
    const points = 8
    const data = []
    for (let i = 0; i < points; i++) {
      const progress = i / (points - 1)
      const value = 50 + priceChange * progress * 5
      data.push({ value: Math.max(20, Math.min(100, value)) })
    }
    return data
  }

  const chartData = featuredToken ? generateChartData(featuredToken.price_change_percentage_24h || 0) : [{ value: 50 }]

  // Create ticker with trending token names
  const tickerTokens =
    trendingTokens.length > 0
      ? trendingTokens.slice(0, 7).map((coin) => coin.item?.symbol || "TOKEN")
      : ["TRENDING", "TOKEN"]

  const repeatedTicker = [...tickerTokens, ...tickerTokens, ...tickerTokens]

  return (
    <section className="relative py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-gray-950 to-black border-2 border-[#39FF14] rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 overflow-hidden border-b border-[#39FF14]/30 py-2">
            <div className="flex animate-scroll whitespace-nowrap">
              {repeatedTicker.map((symbol, i) => (
                <span key={i} className="inline-block mx-6 text-[#39FF14] font-bold text-xs tracking-wider uppercase">
                  {symbol} 🔥
                </span>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="mt-12 text-center py-12 text-gray-500">Loading token data...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 overflow-hidden">
                    {featuredToken?.image ? (
                      <img
                        src={featuredToken.image || "/placeholder.svg"}
                        alt={featuredToken.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-[#39FF14] rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-500 uppercase">Unlock with</span>
                      <span className="px-2 py-0.5 text-[10px] bg-gray-900 text-white font-bold uppercase border border-gray-700">
                        SNIPR PRO
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">TOKEN DATA</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Token name</span>
                      <span className="text-white font-mono">{featuredToken?.name || "***"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Symbol</span>
                      <span className="text-white font-mono uppercase">{featuredToken?.symbol || "***"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Price</span>
                      <span className="text-[#39FF14] font-mono">
                        {featuredToken ? formatPrice(featuredToken.current_price) : "***"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Market Cap</span>
                      <span className="text-white font-mono">
                        {featuredToken ? formatNumber(featuredToken.market_cap) : "***"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Full details</span>
                      <span className="px-2 py-0.5 text-[10px] bg-gray-900 text-white font-bold uppercase border border-gray-700">
                        SNIPR PRO
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">24H PRICE MOVEMENT</h3>
                <div className="relative h-48 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#ff6b00" />
                          <stop offset="50%" stopColor="#ffaa00" />
                          <stop offset="100%" stopColor="#39FF14" />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="url(#colorGradient)"
                        strokeWidth={3}
                        fill="url(#colorGradient)"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-lg font-bold ${featuredToken?.price_change_percentage_24h >= 0 ? "text-[#39FF14]" : "text-red-500"}`}
                      >
                        {featuredToken?.price_change_percentage_24h >= 0 ? "+" : ""}
                        {featuredToken?.price_change_percentage_24h?.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">MARKET ACTIVITY</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-900">
                    <span className="text-sm text-gray-500">24h Volume</span>
                    <span className="text-[#39FF14] font-mono">
                      {featuredToken ? formatNumber(featuredToken.total_volume) : "***"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-900">
                    <span className="text-sm text-gray-500">24h High</span>
                    <span className="text-white font-mono">
                      {featuredToken ? formatPrice(featuredToken.high_24h) : "***"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-900">
                    <span className="text-sm text-gray-500">24h Low</span>
                    <span className="text-white font-mono">
                      {featuredToken ? formatPrice(featuredToken.low_24h) : "***"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-900">
                    <span className="text-sm text-gray-500">ATH</span>
                    <span className="text-white font-mono">
                      {featuredToken ? formatPrice(featuredToken.ath) : "***"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
