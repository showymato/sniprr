"use client"

const performers = [
  { name: "PEPE", icon: "🐸", roi: "+247%", volume: "$890M", launched: "2d ago" },
  { name: "WOJAK", icon: "😢", roi: "+189%", volume: "$450M", launched: "5d ago" },
  { name: "SHIB", icon: "🐕", roi: "+156%", volume: "$1.2B", launched: "1w ago" },
  { name: "DOGE2", icon: "🚀", roi: "+134%", volume: "$320M", launched: "3d ago" },
]

export default function TopPerformers() {
  return (
    <section className="relative py-16 px-4 bg-[#0a0a0f]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wide">TOP PERFORMERS OF THE MONTH</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performers.map((token, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-950 to-black border border-gray-900 rounded-xl p-6 hover:border-[#39FF14] transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#39FF14] to-[#2de00f] rounded-lg flex items-center justify-center text-2xl">
                  {token.icon}
                </div>
                <div className="font-bold text-xl text-white">{token.name}</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">ROI</span>
                  <span className="text-lg font-bold text-[#39FF14] font-mono">{token.roi}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Volume</span>
                  <span className="text-sm font-mono text-white">{token.volume}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Launched</span>
                  <span className="text-sm text-gray-400">{token.launched}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
