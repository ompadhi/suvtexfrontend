import { ArrowUpRight } from 'lucide-react'
import type { ElementType } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: ElementType
  className?: string
  href?: string
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  className = '',
  href = '#'
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={`group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 block transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-suvtex-orange/20 ${className}`}
    >
      {/* Icon */}
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange/10 to-suvtex-gold/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:from-suvtex-orange group-hover:to-suvtex-gold">
          <Icon className="w-6 h-6 text-suvtex-orange transition-colors duration-300 group-hover:text-white" />
        </div>
      )}
      
      {/* Title */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-suvtex-orange">{title}</h3>
        <ArrowUpRight className="w-5 h-5 text-gray-400 flex-shrink-0 transition-all duration-300 group-hover:text-suvtex-orange group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </a>
  )
}