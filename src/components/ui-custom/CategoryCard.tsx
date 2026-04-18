import { ArrowUpRight } from 'lucide-react'

interface CategoryCardProps {
  name: string
  image: string
  itemCount?: number
  className?: string
}

export default function CategoryCard({ 
  name, 
  image, 
  itemCount,
  className = '' 
}: CategoryCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-suvtex-charcoal via-suvtex-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-suvtex-orange-light transition-colors duration-300">
              {name}
            </h3>
            {itemCount && (
              <p className="text-white/70 text-sm">
                {itemCount} products
              </p>
            )}
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Border on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-suvtex-orange/50 transition-colors duration-500"></div>
    </div>
  )
}
