"use client"

export default function TrendingTokenLarge() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-[#39FF14]/10 via-black to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-[#1a3a0f] to-black border-2 border-[#39FF14] rounded-2xl p-12 relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#39FF14]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs bg-[#39FF14] text-black font-bold uppercase tracking-wide">
                Available for PRO
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white uppercase tracking-tight">TRENDING TOKEN</h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              Our algorithm has identified over 20,000 market insiders and professional traders (with 60%+ win rates)
              and 30+ other metrics.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-black/60 border border-[#39FF14]/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-2">days old</div>
                <div className="text-4xl font-bold text-white">72</div>
              </div>
              <div className="bg-black/60 border border-[#39FF14]/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-2">avg ROI</div>
                <div className="text-4xl font-bold text-white">62%</div>
              </div>
              <div className="bg-black/60 border border-[#39FF14]/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-2">avg ATH ROI</div>
                <div className="text-4xl font-bold text-white">130%</div>
              </div>
              <div className="bg-black/60 border border-[#39FF14]/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-2">score</div>
                <div className="text-4xl font-bold text-[#39FF14]">+13</div>
              </div>
            </div>

            <button className="px-8 py-4 bg-[#39FF14] text-black font-bold text-lg rounded-lg hover:bg-[#2de00f] transition-colors">
              GET PRO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
