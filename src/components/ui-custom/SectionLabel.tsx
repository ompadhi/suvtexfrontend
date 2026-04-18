interface SectionLabelProps {
  text: string
  className?: string
  variant?: 'default' | 'outline' | 'light'
}

export default function SectionLabel({ 
  text, 
  className = '',
  variant = 'default'
}: SectionLabelProps) {
  const variants = {
    default: 'bg-gradient-to-r from-suvtex-orange to-suvtex-gold text-white shadow-soft',
    outline: 'bg-transparent border-2 border-suvtex-orange text-suvtex-orange',
    light: 'bg-suvtex-orange/10 text-suvtex-orange',
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full tracking-wide ${variants[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
      {text}
    </span>
  )
}
