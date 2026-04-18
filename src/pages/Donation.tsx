import { useEffect, useRef, useState } from 'react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import { Heart, Gift, Coffee, HeartHandshake } from 'lucide-react'

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-smooth ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export default function Donation() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?w=1920&h=600&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/90 via-suvtex-charcoal/70 to-transparent"></div>
        </div>
        <div className="relative z-10 container-premium">
          <SectionLabel text="Support Us" variant="light" className="mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Make a <span className="text-gradient">Donation</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg md:text-xl">
            Your support helps us maintain our high standards of quality and service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <SectionLabel text="Our Cause" className="mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Quality and Sustainability</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Suvtex India, we are committed to promoting sustainable and ethical practices in the global supply chain. Your donation supports our initiatives to educate manufacturers, improve worker conditions, and ensure product safety worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-xl bg-suvtex-orange/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-suvtex-orange" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Community Support</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-xl bg-suvtex-orange/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-suvtex-orange" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Educational Grants</h4>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Support Our Mission</h3>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { icon: Coffee, label: 'Small Gesture', amount: '$5' },
                    { icon: Heart, label: 'Quality Supporter', amount: '$25' },
                    { icon: HeartHandshake, label: 'Sustainability Partner', amount: '$100' },
                  ].map((option, i) => (
                    <button
                      key={i}
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-suvtex-orange hover:shadow-soft transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-suvtex-orange/10 flex items-center justify-center transition-colors">
                          <option.icon className="w-5 h-5 text-gray-400 group-hover:text-suvtex-orange" />
                        </div>
                        <span className="font-semibold text-gray-700">{option.label}</span>
                      </div>
                      <span className="text-xl font-bold text-suvtex-orange">{option.amount}</span>
                    </button>
                  ))}
                </div>
                <button className="btn-primary w-full justify-center py-5">
                  Custom Donation
                </button>
                <p className="text-center text-gray-400 text-sm mt-6">
                  Secure transaction. All donations are tax-deductible.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
