import { Star, Quote } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      college: 'Delhi University',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Union Living made my transition to college life so smooth. The room is spacious, WiFi is super fast, and the community events helped me make friends instantly!'
    },
    {
      name: 'Priya Patel',
      college: 'Amity University',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Best decision I made! The location is perfect - just 10 minutes from campus. The staff is incredibly helpful and maintenance issues are resolved within hours.'
    },
    {
      name: 'Arjun Kumar',
      college: 'IP University',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'I was worried about finding safe accommodation as a student, but Union Living exceeded all expectations. 24/7 security and the food is amazing too!'
    },
    {
      name: 'Sneha Gupta',
      college: 'Sharda University',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The amenities are top-notch - gym, study rooms, common area with TV. It feels like a home away from home. Highly recommend to all students!'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-violet-600 fill-violet-600" />
            <span className="text-sm font-medium text-violet-700">Student Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Residents Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from thousands of students who found their perfect home with Union Living.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-violet-200" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold">4.9/5</div>
              <div className="text-violet-200 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">10K+</div>
              <div className="text-violet-200 text-sm">Happy Residents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">95%</div>
              <div className="text-violet-200 text-sm">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">4.8/5</div>
              <div className="text-violet-200 text-sm">Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
