import TrendingTicker from "@/components/trending-ticker"
import Hero from "@/components/hero"
import MainTokenCard from "@/components/main-token-card"
import TokenScanTable from "@/components/token-scan-table"
import AlgoStats from "@/components/algo-stats"
import SmartWalletsFeatures from "@/components/smart-wallets-features"
import TrendingTokenLarge from "@/components/trending-token-large"
import TopPerformers from "@/components/top-performers"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-gray-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#39FF14] tracking-tight">SNIPR</div>
            <span className="px-2 py-0.5 text-[10px] bg-[#39FF14] text-black font-bold uppercase">ONLINE</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              App
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full"></span>
              SNIPR PRO
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Stats
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Docs
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              $SNIPR (soon)
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Retail
            </a>
            <button className="text-gray-400 hover:text-white transition-colors">Login</button>
          </nav>
        </div>
      </header>

      <div className="pt-16">
        <TrendingTicker />
        <Hero />
        <MainTokenCard />
        <TokenScanTable />
        <AlgoStats />
        <SmartWalletsFeatures />
        <TrendingTokenLarge />
        <TopPerformers />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © 2025 SNIPR. AI-Powered Token Discovery & Smart-Wallet Intelligence.
        </div>
      </footer>
    </main>
  )
}
