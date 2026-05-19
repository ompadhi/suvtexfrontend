import { Linkedin, Mail } from 'lucide-react'

interface TeamCardProps {
  title: string
  description: string
  image?: string
  className?: string
}

export default function TeamCard({ 
  title, 
  description, 
  image,
  className = '' 
}: TeamCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-hover hover:border-suvtex-orange/20 hover:-translate-y-1 ${className}`}
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            crossOrigin="anonymous"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-suvtex-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Social Links */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-suvtex-orange transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-suvtex-orange transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-suvtex-orange transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-suvtex-orange to-suvtex-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  )
}
