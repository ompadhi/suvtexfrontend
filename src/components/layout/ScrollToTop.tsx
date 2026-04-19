import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  // 1. Handle immediate scroll to top on pathname change
  useEffect(() => {
    // Always scroll to top instantly on route change to prevent "scrolling up" feel
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  // 2. Handle hash scroll with a small delay for content to load
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '')
      
      const scrollToElement = () => {
        const element = document.getElementById(elementId)
        if (element) {
          const headerOffset = 100 // Height of your fixed header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }

      // Small delay to ensure DOM is ready and animations don't interfere with calculations
      const timer = setTimeout(scrollToElement, 500)
      return () => clearTimeout(timer)
    }
  }, [pathname, hash])

  return null
}
