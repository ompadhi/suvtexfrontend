import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

function MediaSlider() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      title: 'Modern Living Room'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      title: 'Property Tour'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&h=400&fit=crop',
      title: 'Cozy Bedroom'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      title: 'Modern Kitchen'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop',
      title: 'Amenities Overview'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      title: 'Study Area'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=600&h=400&fit=crop',
      title: 'Dining Space'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
      title: 'Community Events'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Explore Our Properties
            </h2>
            <p className="text-gray-600 max-w-xl">
              Take a virtual tour of our premium student accommodations. Swipe through photos and videos to see what awaits you.
            </p>
          </div>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 snap-start cursor-pointer group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src={item.type === 'image' ? item.src : item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-violet-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  {item.type === 'video' && (
                    <span className="text-white/80 text-sm">Watch Video</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {mediaItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-violet-600 w-6' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaSlider
