import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Target, Award, Shield, X, ZoomIn } from 'lucide-react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import SectionTitle from '@/components/ui-custom/SectionTitle'
import { hardlineProducts, softlineProducts, detailedProductCategories } from '@/data/content'
import productsBg from '@/assets/BACKGROUND/PRODUCTS.png'

type LightboxItem = {
  image: string
  title: string
  items: string[]
}

function Lightbox({ item, onClose }: { item: LightboxItem; onClose: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(t)
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 280)
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        backgroundColor: visible ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)',
        backdropFilter: visible ? 'blur(8px)' : 'blur(0px)',
        transition: 'background-color 0.28s ease, backdrop-filter 0.28s ease',
      }}
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full"
        style={{
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(24px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.32s cubic-bezier(0.34,1.15,0.64,1), opacity 0.28s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Full-size image container */}
        <div className="bg-gray-50 flex items-center justify-center p-8 md:p-12 lg:p-16" style={{ height: '75vh' }}>
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl rounded-2xl bg-white p-4"
          />
        </div>

        {/* Info panel */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {item.items.map((it, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                <CheckCircle2 className="w-4 h-4 text-suvtex-orange flex-shrink-0" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body
  )
}

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

export default function Products() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null)

  return (
    <div className="pt-28 pb-16">
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${productsBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/50 via-suvtex-charcoal/20 to-transparent"></div>
        </div>
        <div className="relative z-10 container-premium">
          <SectionLabel text="Product Expertise" variant="light" className="mb-4 drop-shadow-md" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Product <span className="text-gradient">Categories</span>
          </h1>
          <p className="text-white font-bold mt-4 max-w-2xl text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Comprehensive quality inspection across diverse product lines
          </p>
        </div>
      </section>

      {/* Detailed Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Products" className="mb-4" />
            <SectionTitle 
              title="Product Categories" 
              subtitle="Expert inspection services across diverse product categories"
              align="center"
            />
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedProductCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-suvtex-orange/40 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 cursor-zoom-in"
                  onClick={() => setLightbox(category)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110 shadow-sm rounded-lg"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300" />
                    {/* Zoom icon + label — fades + scales in */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                      <span className="text-white text-xs font-semibold tracking-widest uppercase drop-shadow">Click to enlarge</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-suvtex-orange transition-colors">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.slice(0, 3).map((item, i) => (
                        <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-suvtex-orange/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {category.items.length > 3 && (
                      <p className="text-suvtex-orange text-sm mt-3 font-medium">
                        +{category.items.length - 3} more items
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Split */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Expertise" className="mb-4" />
            <SectionTitle title="Our Products" align="center" />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardline Products */}
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-hover transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Hardline Products</h3>
                    <p className="text-gray-500 text-sm">Durable goods & household items</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {hardlineProducts.slice(0, 16).map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-600 hover:text-suvtex-orange transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-suvtex-orange flex-shrink-0" />
                      <span className="text-sm">{product}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link to="/contact" className="text-suvtex-orange font-medium hover:underline inline-flex items-center gap-2">
                    Request Inspection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Softline Products */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-hover transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Softline Products</h3>
                    <p className="text-gray-500 text-sm">Textiles, apparel & accessories</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {softlineProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-600 hover:text-suvtex-orange transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-suvtex-orange flex-shrink-0" />
                      <span className="text-sm">{product}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link to="/contact" className="text-suvtex-orange font-medium hover:underline inline-flex items-center gap-2">
                    Request Inspection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Process" className="mb-4" />
            <SectionTitle 
              title="Our Inspection Process" 
              subtitle="A systematic approach to quality assurance"
              align="center"
            />
          </ScrollReveal>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-suvtex-orange/20 via-suvtex-orange to-suvtex-orange/20"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Initial Consultation', description: 'Understanding your requirements' },
                { step: '2', title: 'Sample Inspection', description: 'Evaluating product samples' },
                { step: '3', title: 'Factory Audit', description: 'Assessing manufacturing facilities' },
                { step: '4', title: 'Production Monitoring', description: 'Ongoing quality checks' },
                { step: '5', title: 'Final Report', description: 'Detailed inspection report' },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-glow relative z-10">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-suvtex-charcoal text-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text="Standards" variant="light" className="mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">International Quality Standards</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              We adhere to international quality standards and protocols to ensure that your products meet global requirements.
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'ISO 9001', 'ISO 14001', 'SA 8000', 'BSCI',
              'SEDEX', 'WRAP', 'GOTS', 'OEKO-TEX',
            ].map((standard, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <Shield className="w-6 h-6 text-suvtex-orange mx-auto mb-2" />
                  <span className="font-semibold">{standard}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-suvtex-cream via-white to-suvtex-cream">
        <div className="container-premium">
          <ScrollReveal>
            <div className="relative bg-gradient-to-r from-suvtex-orange to-suvtex-gold rounded-3xl p-12 md:p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Product Inspection?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your product inspection requirements. Our team of experts is ready to help you ensure quality and compliance.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-suvtex-orange font-semibold rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}