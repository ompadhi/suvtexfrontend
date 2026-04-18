import { useState } from 'react'
import { CheckCircle2, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProductCategoryCardProps {
  title: string
  image: string
  items: string[]
  className?: string
}

export default function ProductCategoryCard({
  title,
  image,
  items = [],
  className = '',
}: ProductCategoryCardProps) {
  const [expanded, setExpanded] = useState(false)
  const extraCount = items.length - 3

  return (
    <div
      onMouseLeave={() => setExpanded(false)}
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-suvtex-orange/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${className}`}
    >
      {/* Image with Zoom Effect */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-[4/3] overflow-hidden shrink-0 relative cursor-zoom-in">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[100vw] w-screen h-screen p-0 m-0 overflow-hidden bg-transparent border-none shadow-none rounded-none">
          <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-full flex items-center justify-center bg-transparent">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300 shadow-none"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Body */}
      <div className="p-5 flex flex-col grow">
        <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-suvtex-orange transition-colors duration-300">
          {title}
        </h3>

        {/* Visible items (first 3) */}
        <ul className="space-y-2">
          {items.slice(0, 3).map((item, i) => (
            <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-suvtex-orange/60 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Expandable items (rest) */}
        <div 
          className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-2">
            {items.slice(3).map((item, i) => (
              <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-suvtex-orange/60 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {extraCount > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-1 text-suvtex-orange text-sm font-medium hover:underline transition-all w-fit"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" /> Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> +{extraCount} more items
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
