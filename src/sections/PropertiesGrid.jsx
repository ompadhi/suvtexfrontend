import { MapPin, Bed, Bath, Users, ArrowRight, Heart } from 'lucide-react'
import { useState } from 'react'

function PropertiesGrid() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const properties = [
    {
      id: 1,
      name: 'Union House - North Campus',
      location: 'North Delhi, Near DU',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      price: '₹12,000',
      period: '/month',
      beds: 2,
      baths: 1,
      occupants: 2,
      tag: 'Most Popular'
    },
    {
      id: 2,
      name: 'Scholar Suites - South Delhi',
      location: 'South Delhi, Near LSR',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      price: '₹15,000',
      period: '/month',
      beds: 1,
      baths: 1,
      occupants: 1,
      tag: 'Premium'
    },
    {
      id: 3,
      name: 'Campus Nest - Noida',
      location: 'Sector 62, Noida',
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&h=400&fit=crop',
      price: '₹10,500',
      period: '/month',
      beds: 3,
      baths: 2,
      occupants: 3,
      tag: 'Best Value'
    },
    {
      id: 4,
      name: 'Student Haven - Greater Noida',
      location: 'Knowledge Park, Greater Noida',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      price: '₹9,500',
      period: '/month',
      beds: 3,
      baths: 2,
      occupants: 3,
      tag: 'New'
    },
    {
      id: 5,
      name: 'Elite Residency - Gurugram',
      location: 'Sector 14, Gurugram',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      price: '₹18,000',
      period: '/month',
      beds: 1,
      baths: 1,
      occupants: 1,
      tag: 'Luxury'
    },
    {
      id: 6,
      name: 'Youth Hub - East Delhi',
      location: 'Laxmi Nagar, East Delhi',
      image: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=600&h=400&fit=crop',
      price: '₹11,000',
      period: '/month',
      beds: 2,
      baths: 1,
      occupants: 2,
      tag: 'Trending'
    }
  ]

  const tagColors = {
    'Most Popular': 'bg-orange-500',
    'Premium': 'bg-purple-500',
    'Best Value': 'bg-green-500',
    'New': 'bg-blue-500',
    'Luxury': 'bg-amber-500',
    'Trending': 'bg-pink-500'
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-100 px-4 py-2 rounded-full mb-4">
              <Bed className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">Featured Properties</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Available Accommodations
            </h2>
            <p className="text-gray-600 max-w-xl">
              Browse our handpicked selection of premium student accommodations near top colleges and universities.
            </p>
          </div>
          <button className="mt-6 md:mt-0 inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors">
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Tag */}
                <div className={`absolute top-4 left-4 ${tagColors[property.tag]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {property.tag}
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${favorites.includes(property.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                  />
                </button>
                
                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="text-2xl font-bold text-violet-600">{property.price}</span>
                  <span className="text-gray-500 text-sm">{property.period}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {property.name}
                </h3>
                
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-5">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} BHK</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{property.occupants} Person</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#enquiry-form"
                  className="block w-full py-3 bg-violet-600 text-white text-center font-semibold rounded-xl hover:bg-violet-700 transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertiesGrid
