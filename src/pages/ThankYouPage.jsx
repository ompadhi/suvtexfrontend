import { Link } from 'react-router-dom'
import { CheckCircle, Home, Phone, MessageCircle } from 'lucide-react'

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-violet-200">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Your enquiry has been submitted successfully
        </p>
        <p className="text-gray-500 mb-8">
          Our team will contact you within 24 hours to help you find your perfect home.
        </p>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Call from our expert</p>
                <p className="text-sm text-gray-500">Within 2 hours on working days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Home className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Property tour</p>
                <p className="text-sm text-gray-500">Virtual or in-person visit</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Personalized recommendations</p>
                <p className="text-sm text-gray-500">Based on your preferences</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl border-2 border-violet-200 hover:border-violet-300 hover:bg-violet-50 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us Now
          </a>
        </div>

        {/* Contact Info */}
        <p className="mt-8 text-gray-500">
          Need immediate assistance?{' '}
          <a href="tel:+919876543210" className="text-violet-600 font-medium hover:underline">
            +91 98765 43210
          </a>
        </p>
      </div>
    </div>
  )
}

export default ThankYouPage
