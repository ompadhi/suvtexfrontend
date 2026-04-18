import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Factory, 
  ClipboardCheck, 
  Users, 
  Shield, 
  Leaf, 
  Wrench, 
  Lock,
  TrendingUp,
  CheckCircle2,
  FileCheck,
  Search,
  Eye
} from 'lucide-react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import SectionTitle from '@/components/ui-custom/SectionTitle'
import ServiceCard from '@/components/ui-custom/ServiceCard'
import servicesHero from '@/assets/services.png'
import { factoryAuditServices, productServices } from '@/data/content'

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

export default function Services() {
  const auditIcons = [Users, Leaf, Wrench, Lock]
  const productIcons = [ClipboardCheck, FileCheck, Search, Eye, CheckCircle2, Shield, Factory, TrendingUp]

  return (
    <div className="pt-28 pb-8">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${servicesHero})`,
          }}
        >
          <div className="absolute inset-0 bg-suvtex-charcoal/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 container-premium">
          <SectionLabel text="What We Offer" variant="light" className="mb-6 drop-shadow-md" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            <span className="text-gradient">Services</span>
          </h1>
          <p className="text-white font-medium max-w-2xl text-lg drop-shadow-lg">
            Comprehensive inspection and audit solutions for your quality assurance needs
          </p>
        </div>
      </section>

      {/* Factory Audit Services */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                <Factory className="w-7 h-7" />
              </div>
              <div>
                <SectionLabel text="Audit Services" className="mb-2" />
                <h2 className="text-3xl font-bold text-gray-900">ISO Based Factory Audit Services</h2>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl ml-[72px]">
              Ensure your suppliers meet international standards with our comprehensive factory audit services.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {factoryAuditServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={auditIcons[index]} // Pass the component type directly
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Services */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-premium">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                <ClipboardCheck className="w-7 h-7" />
              </div>
              <div>
                <SectionLabel text="Inspection Services" className="mb-2" />
                <h2 className="text-3xl font-bold text-gray-900">Product Services</h2>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl ml-[72px]">
              From pre-production to final inspection, we ensure your products meet the highest quality standards.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productServices.map((service, index) => {
              const Icon = productIcons[index % productIcons.length]
              return (
                <ScrollReveal key={index} delay={index * 50}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={Icon} // pass the component itself
                  />
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text="Additional Services" className="mb-4" />
            <SectionTitle 
              title="Consultancy Services" 
              subtitle="Expert guidance to optimize your quality management processes"
              align="center"
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            <ScrollReveal className="h-full">
              <div className="h-full bg-gradient-to-br from-suvtex-charcoal to-suvtex-slate rounded-3xl p-8 text-white hover:shadow-premium hover:-translate-y-1 transition-all duration-500 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-suvtex-orange/20 flex items-center justify-center mb-6 flex-shrink-0">
                  <Factory className="w-8 h-8 text-suvtex-orange" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
                <p className="text-white/70 leading-relaxed flex-1">
                  Expert guidance on manufacturing processes, quality control systems, and production optimization to help you achieve operational excellence.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100} className="h-full">
              <div className="h-full bg-gradient-to-br from-suvtex-orange to-suvtex-gold rounded-3xl p-8 text-white hover:shadow-premium hover:-translate-y-1 transition-all duration-500 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sourcing Management</h3>
                <p className="text-white/90 leading-relaxed flex-1">
                  Comprehensive sourcing solutions to help you find reliable suppliers and manage your supply chain effectively across global markets.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Audits */}
      <section className="section-padding bg-gradient-to-br from-suvtex-cream via-white to-suvtex-cream">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text="Audit Types" className="mb-4" />
            <SectionTitle 
              title="Factory & Manufacturer Audit" 
              align="center"
            />
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Factory Audit', icon: Factory },
              { title: 'Social Compliance', icon: Users },
              { title: 'Environmental', icon: Leaf },
              { title: 'Technical', icon: Wrench },
              { title: 'Security', icon: Lock },
            ].map((audit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-suvtex-orange/30 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange/10 to-suvtex-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:from-suvtex-orange group-hover:to-suvtex-gold transition-all duration-500">
                    <audit.icon className="w-7 h-7 text-suvtex-orange group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{audit.title}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-premium">
          <ScrollReveal>
            <div className="relative bg-gradient-to-r from-suvtex-orange to-suvtex-gold rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Ensure Quality?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your inspection and audit requirements. Our team is ready to help you maintain the highest quality standards.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-suvtex-orange font-semibold rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
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
