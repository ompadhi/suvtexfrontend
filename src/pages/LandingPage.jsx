import HeroSection from '../sections/HeroSection.jsx'
import MediaSlider from '../sections/MediaSlider.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import PropertiesGrid from '../sections/PropertiesGrid.jsx'
import Comparison from '../sections/Comparison.jsx'
import EventsGrid from '../sections/EventsGrid.jsx'
import StickyButton from '../sections/StickyButton.jsx'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MediaSlider />
      <Testimonials />
      <PropertiesGrid />
      <Comparison />
      <EventsGrid />
      <StickyButton />
    </div>
  )
}

export default LandingPage
