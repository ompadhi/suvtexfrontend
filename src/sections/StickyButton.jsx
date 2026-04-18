import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

function StickyButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    // Show button after scrolling 300px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToForm = () => {
    const formElement = document.getElementById('enquiry-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Sticky Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap animate-bounce">
            <div className="flex items-center gap-2">
              <span>Have questions? Enquire now!</span>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={scrollToForm}
          className="group flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-violet-300 hover:shadow-violet-400 hover:scale-105 transition-all duration-300"
        >
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="font-semibold pr-2">Enquire Now</span>
        </button>
      </div>

      {/* Mobile Bottom Bar (only visible on mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 md:hidden">
        <button
          onClick={scrollToForm}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold py-3 rounded-xl"
        >
          <MessageCircle className="w-5 h-5" />
          Enquire Now - Free Consultation
        </button>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="h-20 md:hidden"></div>
    </>
  )
}

export default StickyButton
