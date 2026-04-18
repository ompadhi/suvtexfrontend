import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
  stat?: string
}

export default function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  className = '',
  stat
}: FeatureCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 text-center overflow-hidden transition-all duration-500 hover:shadow-hover hover:border-suvtex-orange/20 hover:-translate-y-1 ${className}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-suvtex-orange/5 via-transparent to-suvtex-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-suvtex-orange/10 to-suvtex-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:from-suvtex-orange group-hover:to-suvtex-gold group-hover:shadow-glow transition-all duration-500">
          <Icon className="w-8 h-8 text-suvtex-orange group-hover:text-white transition-colors duration-500" />
        </div>
        
        {/* Stat */}
        {stat && (
          <div className="text-3xl font-bold text-suvtex-orange mb-2">
            {stat}
          </div>
        )}
        
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-suvtex-orange to-suvtex-gold group-hover:w-1/2 transition-all duration-500 rounded-full"></div>
    </div>
  )
}
