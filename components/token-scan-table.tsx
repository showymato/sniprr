"use client"

import { useTopTokens } from "@/hooks/use-token-data"
import { formatNumber, formatPrice } from "@/lib/api"

export default function TokenScanTable() {
  const { tokens, loading } = useTopTokens(10)

  if (loading) {
    return (
      <section className="relative py-12 px-4 bg-[#0a0a0f]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">TRENDING TOKEN SCAN</h2>
          <div className="text-center py-12 text-gray-500">Loading token data...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-12 px-4 bg-[#0a0a0f]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">TRENDING TOKEN SCAN</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-900">
                <th className="text-left py-3 px-3 text-xs text-gray-500 font-normal uppercase">Token</th>
                <th className="text-left py-3 px-3 text-xs text-gray-500 font-normal uppercase">Rank</th>
                <th className="text-left py-3 px-3 text-xs text-gray-500 font-normal uppercase">Price</th>
                <th className="text-left py-3 px-3 text-xs text-gray-500 font-normal uppercase">24h Change</th>
                <th className="text-left py-3 px-3 text-xs text-gray-500 font-normal uppercase">Market Cap</th>
                <th className="text-left py-3 px-3 text-xs text-gray-500 font-normal uppercase">Volume 24h</th>
                <th className="text-left py-3 px-3 text-xs text-gray-500 font-normal uppercase">Circulating Supply</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, i) => (
                <tr key={token.id} className="border-b border-gray-900 hover:bg-gray-950 transition-colors">
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center overflow-hidden">
                        {token.image ? (
                          <img
                            src={token.image || "/placeholder.svg"}
                            alt={token.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xl">🪙</span>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-white">{token.name}</div>
                        <div className="text-xs text-gray-500 font-mono uppercase">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-3 font-mono text-[#39FF14]">#{token.market_cap_rank}</td>
                  <td className="py-4 px-3 font-mono text-white">{formatPrice(token.current_price)}</td>
                  <td className="py-4 px-3">
                    <span
                      className={`font-mono ${token.price_change_percentage_24h >= 0 ? "text-[#39FF14]" : "text-red-500"}`}
                    >
                      {token.price_change_percentage_24h >= 0 ? "+" : ""}
                      {token.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                  </td>
                  <td className="py-4 px-3 font-mono text-white">{formatNumber(token.market_cap)}</td>
                  <td className="py-4 px-3 font-mono text-[#39FF14]">{formatNumber(token.total_volume)}</td>
                  <td className="py-4 px-3 font-mono text-gray-400">
                    {token.circulating_supply ? `${(token.circulating_supply / 1e6).toFixed(2)}M` : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
