"use client"

export default function SmartWalletsFeatures() {
  return (
    <section className="relative py-16 px-4 bg-[#0a0a0f]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - DEGEN MODE Box */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#39FF14] to-[#2de00f] rounded-2xl p-12 text-black">
              <h3 className="text-5xl font-bold mb-4 uppercase tracking-tight">DEGEN MODE</h3>
              <p className="text-lg mb-6">
                Access the database of profitable wallet patterns and copy-trade with the best traders in the market.
              </p>
              <button className="px-6 py-3 bg-black text-[#39FF14] font-bold rounded-lg hover:bg-gray-900 transition-colors">
                Try it now for free
              </button>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wide">
                SMART WALLETS' DATA IN EVERY SNIPR DISCOVERY
              </h2>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#39FF14] to-[#2de00f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Smart wallets' patterns analytics</h4>
                  <p className="text-gray-400 leading-relaxed">
                    We analyze over 20,000 smart wallets' data (win rate, PNL, average hold time, and more).
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#39FF14] to-[#2de00f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Great for copy-trading</h4>
                  <p className="text-gray-400 leading-relaxed">
                    We give you the most successful and accurate indicators of profitable wallets on the market. You can
                    easily find and copy the best traders.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#39FF14] to-[#2de00f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Trade each discovery with confidence</h4>
                  <p className="text-gray-400 leading-relaxed">
                    These patterns or smart wallets help you decide if it's worth to take a trade and how long the
                    average for each token.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
