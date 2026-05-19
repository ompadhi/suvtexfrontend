import { Check, X } from 'lucide-react'

function Comparison() {
  const comparisons = [
    {
      feature: 'Fully Furnished Rooms',
      unionLiving: true,
      traditionalPG: false,
      description: 'Ready to move in with bed, wardrobe, study table'
    },
    {
      feature: 'High-Speed WiFi',
      unionLiving: true,
      traditionalPG: false,
      description: 'Unlimited 100 Mbps internet for seamless studying'
    },
    {
      feature: 'Daily Housekeeping',
      unionLiving: true,
      traditionalPG: false,
      description: 'Professional cleaning staff for common areas'
    },
    {
      feature: '24/7 Security',
      unionLiving: true,
      traditionalPG: true,
      description: 'CCTV surveillance and security guards'
    },
    {
      feature: 'Community Events',
      unionLiving: true,
      traditionalPG: false,
      description: 'Regular networking and fun activities'
    },
    {
      feature: 'App-Based Services',
      unionLiving: true,
      traditionalPG: false,
      description: 'Raise complaints, pay rent, book amenities'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 px-4 py-2 rounded-full mb-4">
            <Check className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Union Living vs Traditional PG
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why thousands of students prefer Union Living over conventional paying guest accommodations.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-left">
              <span className="text-gray-500 font-medium">Features</span>
            </div>
            <div className="text-center bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl py-4 px-6">
              <span className="text-white font-bold text-lg">Union Living</span>
            </div>
            <div className="text-center bg-gray-100 rounded-xl py-4 px-6">
              <span className="text-gray-700 font-bold text-lg">Traditional PG</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center bg-gray-50 rounded-xl p-4 hover:bg-violet-50 transition-colors"
              >
                {/* Feature */}
                <div>
                  <h4 className="font-semibold text-gray-900">{item.feature}</h4>
                  <p className="text-sm text-gray-500 hidden md:block">{item.description}</p>
                </div>

                {/* Union Living */}
                <div className="flex justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.unionLiving ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {item.unionLiving ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>

                {/* Traditional PG */}
                <div className="flex justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.traditionalPG ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {item.traditionalPG ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-200"
            >
              Experience the Difference
              <Check className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison
