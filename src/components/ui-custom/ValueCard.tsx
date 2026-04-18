import { CheckCircle2 } from 'lucide-react'

interface ValueCardProps {
  title: string
  description: string
  items?: string[]
  index?: number
  className?: string
}

export default function ValueCard({ 
  title, 
  description, 
  items = [],
  index = 0,
  className = '' 
}: ValueCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-3xl p-8 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-premium hover:border-suvtex-orange/20 hover:-translate-y-2 flex flex-col h-full ${className}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-suvtex-orange/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Number Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white font-bold text-lg shadow-glow">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="flex-1 ml-4 h-px bg-gradient-to-r from-suvtex-orange/20 to-transparent"></div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-suvtex-orange transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        {/* List items */}
        {items.length > 0 && (
          <div className="mt-auto space-y-3">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group/item">
                <div className="mt-1 w-5 h-5 rounded-full bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-suvtex-orange transition-colors duration-300">
                  <CheckCircle2 className="w-3 h-3 text-suvtex-orange group-hover/item:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover/item:text-gray-900 transition-colors duration-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Side Accent Line */}
      <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-suvtex-orange to-suvtex-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  )
}
