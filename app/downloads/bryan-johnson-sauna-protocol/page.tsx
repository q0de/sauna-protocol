import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bryan Johnson's Sauna Protocol - Printable PDF",
  description: 'Download or print the complete Bryan Johnson 200°F sauna protocol',
}

export default function ProtocolPDFPage() {
  return (
    <div className="min-h-screen bg-white p-8 print:p-0">
      <div className="max-w-4xl mx-auto">
        {/* Print Button - Hidden when printing */}
        <div className="print:hidden mb-8 text-center">
          <button
            onClick={() => window.print()}
            className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg"
          >
            Print or Save as PDF
          </button>
        </div>

        {/* PDF Content */}
        <div className="space-y-8">
          {/* Header */}
          <header className="text-center border-b-4 border-[#ff6b6b] pb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Bryan Johnson's 200°F Sauna Protocol
            </h1>
            <p className="text-xl text-gray-600">
              Complete 90-Day Implementation Guide
            </p>
            <p className="text-sm text-gray-500 mt-2">
              From SaunaProtocol.com
            </p>
          </header>

          {/* Protocol Specifications */}
          <section>
            <h2 className="text-2xl font-bold text-[#ff6b6b] mb-4 border-b-2 border-gray-200 pb-2">
              Protocol Specifications
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-bold text-lg text-gray-900">Temperature</div>
                <div className="text-2xl font-bold text-[#ff6b6b]">200°F (93°C)</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-bold text-lg text-gray-900">Duration</div>
                <div className="text-2xl font-bold text-[#2196f3]">20-25 minutes</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-bold text-lg text-gray-900">Frequency</div>
                <div className="text-2xl font-bold text-[#f59e0b]">4-7x per week</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-bold text-lg text-gray-900">Type</div>
                <div className="text-2xl font-bold text-green-600">Dry Finnish</div>
              </div>
            </div>
          </section>

          {/* Key Results */}
          <section>
            <h2 className="text-2xl font-bold text-[#ff6b6b] mb-4 border-b-2 border-gray-200 pb-2">
              Measured Results (90 Days)
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <span className="font-bold">Blood Pressure:</span> 138/82 → 118/72 mmHg (5.83% reduction in 7 days)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <span className="font-bold">Arterial Flexibility:</span> 25-50% improvement (10-year vascular de-aging)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <span className="font-bold">Toxins:</span> Multiple compounds became undetectable by day 21
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <span className="font-bold">HRV (Heart Rate Variability):</span> +38% increase by week 12
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <span className="font-bold">VEGF:</span> 5x boost (new blood vessel formation)
                </div>
              </div>
            </div>
          </section>

          {/* Progressive Timeline */}
          <section className="break-inside-avoid">
            <h2 className="text-2xl font-bold text-[#ff6b6b] mb-4 border-b-2 border-gray-200 pb-2">
              90-Day Progressive Timeline
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-bold text-lg">Week 1-2: Adaptation Phase</div>
                <div className="text-gray-700">Temperature: 170-180°F | Duration: 15-20 min</div>
                <div className="text-sm text-gray-600">Focus on building heat tolerance</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-bold text-lg">Week 3-4: Progression Phase</div>
                <div className="text-gray-700">Temperature: 180-190°F | Duration: 20-22 min</div>
                <div className="text-sm text-gray-600">First improvements in sleep quality</div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="font-bold text-lg">Week 5-8: Target Protocol</div>
                <div className="text-gray-700">Temperature: 190-200°F | Duration: 22-25 min</div>
                <div className="text-sm text-gray-600">Blood pressure improvements measurable</div>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-bold text-lg">Week 9-12: Optimization Phase</div>
                <div className="text-gray-700">Temperature: 200°F | Duration: 25 min</div>
                <div className="text-sm text-gray-600">Maximum benefits, HRV improvements peak</div>
              </div>
            </div>
          </section>

          {/* Safety Essentials */}
          <section className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg break-inside-avoid">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">
              ⚠️ Safety Essentials
            </h2>
            <div className="space-y-2 text-gray-800">
              <div className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><strong>Men:</strong> Use BPA-free ice packs for testicular cooling (prevents 50% fertility reduction)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><strong>Hydration:</strong> 16-20 oz water before + electrolytes, 20-24 oz after</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><strong>Cool-down:</strong> Wait 10-15 minutes post-workout before entering</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><strong>Breathing:</strong> 4-second inhale, 6-second exhale pattern</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><strong>Exit immediately:</strong> If dizzy, nauseous, or uncomfortable</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><strong>Clothing:</strong> Cotton only (no synthetics that may off-gas)</span>
              </div>
            </div>
          </section>

          {/* Equipment Needed */}
          <section className="break-inside-avoid">
            <h2 className="text-2xl font-bold text-[#ff6b6b] mb-4 border-b-2 border-gray-200 pb-2">
              Equipment Needed
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Traditional Finnish sauna (can reach 200°F)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Accurate thermometer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Timer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Electrolyte supplements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>BPA-free ice packs (men)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Cotton towels/clothing</span>
              </div>
            </div>
          </section>

          {/* Session Protocol */}
          <section className="break-inside-avoid">
            <h2 className="text-2xl font-bold text-[#ff6b6b] mb-4 border-b-2 border-gray-200 pb-2">
              Step-by-Step Session Protocol
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-bold text-blue-900 mb-2">1. Pre-Sauna (5 min)</div>
                <div className="text-sm text-gray-700">• Drink 16-20 oz water with electrolytes (50% of extra dose)</div>
                <div className="text-sm text-gray-700">• Wear cotton clothing or go naked</div>
                <div className="text-sm text-gray-700">• Prepare ice packs (men)</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="font-bold text-orange-900 mb-2">2. Cool-Down After Workout (10-15 min)</div>
                <div className="text-sm text-gray-700">• Light walking or stretching</div>
                <div className="text-sm text-gray-700">• Let heart rate drop below 120 bpm</div>
                <div className="text-sm text-gray-700">• Begin sipping water</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-bold text-red-900 mb-2">3. Sauna Session (20-25 min)</div>
                <div className="text-sm text-gray-700">• Apply ice pack protection (men)</div>
                <div className="text-sm text-gray-700">• Practice 4-6 breathing pattern</div>
                <div className="text-sm text-gray-700">• No water on rocks (toxin concerns)</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-bold text-green-900 mb-2">4. Post-Sauna Recovery (15 min)</div>
                <div className="text-sm text-gray-700">• Shower immediately to wash off toxins</div>
                <div className="text-sm text-gray-700">• Hydrate with 20-24 oz water + remaining electrolytes</div>
                <div className="text-sm text-gray-700">• Allow body to cool naturally</div>
              </div>
            </div>
          </section>

          {/* Tracking Template */}
          <section className="break-inside-avoid">
            <h2 className="text-2xl font-bold text-[#ff6b6b] mb-4 border-b-2 border-gray-200 pb-2">
              Session Tracking Log
            </h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Date</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Temp (°F)</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Duration</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 px-3 py-2 h-10"></td>
                    <td className="border border-gray-300 px-3 py-2"></td>
                    <td className="border border-gray-300 px-3 py-2"></td>
                    <td className="border border-gray-300 px-3 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 pt-6 border-t-2 border-gray-200 mt-8">
            <p className="mb-2">For the complete guide with detailed results, visit:</p>
            <p className="font-bold text-[#ff6b6b]">SaunaProtocol.com/protocols/bryan-johnson</p>
            <p className="mt-4 text-xs">
              Disclaimer: Consult with a healthcare professional before starting any sauna protocol.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

