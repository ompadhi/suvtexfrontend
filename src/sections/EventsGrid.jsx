import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

function EventsGrid() {
  const events = [
    {
      id: 1,
      title: 'Freshers Welcome Party',
      date: 'Aug 15, 2025',
      location: 'Union House - North Campus',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
      attendees: 120,
      category: 'Social'
    },
    {
      id: 2,
      title: 'Career Networking Night',
      date: 'Sep 5, 2025',
      location: 'Scholar Suites - South Delhi',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
      attendees: 85,
      category: 'Professional'
    },
    {
      id: 3,
      title: 'Diwali Celebration',
      date: 'Oct 20, 2025',
      location: 'All Properties',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=600&h=400&fit=crop',
      attendees: 500,
      category: 'Cultural'
    },
    {
      id: 4,
      title: 'Yoga & Wellness Morning',
      date: 'Every Sunday',
      location: 'Campus Nest - Noida',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      attendees: 40,
      category: 'Wellness'
    },
    {
      id: 5,
      title: 'Movie Night Under Stars',
      date: 'Aug 25, 2025',
      location: 'Student Haven - Greater Noida',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
      attendees: 150,
      category: 'Entertainment'
    },
    {
      id: 6,
      title: 'Hackathon 2025',
      date: 'Nov 10-12, 2025',
      location: 'Elite Residency - Gurugram',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      attendees: 200,
      category: 'Tech'
    }
  ]

  const categoryColors = {
    'Social': 'bg-pink-100 text-pink-700',
    'Professional': 'bg-blue-100 text-blue-700',
    'Cultural': 'bg-orange-100 text-orange-700',
    'Wellness': 'bg-green-100 text-green-700',
    'Entertainment': 'bg-purple-100 text-purple-700',
    'Tech': 'bg-indigo-100 text-indigo-700'
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-100 px-4 py-2 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">Community Events</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Life at Union Living
            </h2>
            <p className="text-gray-600 max-w-xl">
              Join our vibrant community events and make lifelong friends. There's always something exciting happening!
            </p>
          </div>
          <button className="mt-6 md:mt-0 inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors">
            View All Events
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Tag */}
                <div className={`absolute top-4 left-4 ${categoryColors[event.category]} text-xs font-semibold px-3 py-1 rounded-full`}>
                  {event.category}
                </div>
                
                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                  <Calendar className="w-4 h-4 text-violet-600 mx-auto mb-1" />
                  <span className="text-sm font-semibold text-gray-900">{event.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-violet-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-violet-500" />
                    {event.attendees}+ attending
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 border-2 border-violet-200 text-violet-600 font-semibold rounded-xl hover:bg-violet-50 hover:border-violet-300 transition-all">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-violet-600 mb-1">50+</div>
            <div className="text-gray-600 text-sm">Events Per Year</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-violet-600 mb-1">5000+</div>
            <div className="text-gray-600 text-sm">Community Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-violet-600 mb-1">15+</div>
            <div className="text-gray-600 text-sm">Clubs & Activities</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-violet-600 mb-1">98%</div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsGrid
