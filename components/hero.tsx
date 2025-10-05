"use client"

export default function Hero() {
  return (
    <section className="relative py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-start gap-3 mb-4">
          <span className="px-3 py-1 text-xs bg-[#39FF14] text-black font-bold uppercase tracking-wide">
            Available for PRO
          </span>
          <span className="text-gray-500 text-sm uppercase tracking-wide">trending token</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white max-w-4xl leading-tight">
          SNIPR Algorithm identifies trending token every 20 minutes
        </h1>

        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-3xl leading-relaxed">
          Based on data from over 20,000 market insiders and professional traders (with 60%+ win rates) and 30+ other
          metrics.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1">days old</span>
            <span className="text-3xl font-bold text-white">72</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1">avg ROI</span>
            <span className="text-3xl font-bold text-white">62%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1">avg ATH ROI</span>
            <span className="text-3xl font-bold text-white">130%</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-800">
            <span className="text-sm text-gray-400">score</span>
            <span className="text-xl font-bold text-white">+13</span>
          </div>
        </div>
      </div>
    </section>
  )
}
