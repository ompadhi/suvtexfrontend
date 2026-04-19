import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  Factory,
  FlaskConical,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
  Target
} from 'lucide-react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import SectionTitle from '@/components/ui-custom/SectionTitle'
import sourcingBg from '@/assets/BACKGROUND/SOURCING.png'
import sourcingAdvantage from '@/assets/sourcing 2.png'

// ─── Scroll Reveal (same pattern used across the site) ───────────────────────
function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-smooth ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const sourcingServices = [
  {
    icon: Search,
    title: 'Supplier Identification',
    description:
      'We identify and vet reliable manufacturers that align with your product requirements, price targets, and compliance standards.',
  },
  {
    icon: Factory,
    title: 'Factory Evaluation',
    description:
      'On-ground audits assessing infrastructure, social compliance, and technical capabilities before any commitment is made.',
  },
  {
    icon: FlaskConical,
    title: 'Product Development',
    description:
      'Expert management of the sampling process, ensuring your design specifications are translated perfectly into physical products.',
  },
  {
    icon: Activity,
    title: 'Production Oversight',
    description:
      'Comprehensive monitoring of production milestones to ensure timeline adherence and consistent quality throughout the run.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Integrating our core inspection expertise directly into the sourcing workflow for end-to-end risk mitigation.',
  },
]

const methodologySteps = [
  {
    title: 'Needs Analysis',
    desc: 'Deep dive into your product requirements, volume, and target market standards.',
    icon: Target
  },
  {
    title: 'Strategic Matching',
    desc: 'Connecting you with pre-vetted factories that specialize in your specific category.',
    icon: Users
  },
  {
    title: 'Execution & Control',
    desc: 'Rigorous oversight of sampling, production, and final quality verification.',
    icon: ShieldCheck
  }
]

export default function Sourcing() {
  return (
    <div className="pt-28 pb-8">
      {/* Hero Banner */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${sourcingBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/50 via-suvtex-charcoal/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container-premium">
          <ScrollReveal className="max-w-3xl">
            <SectionLabel text="Global Sourcing" variant="light" className="mb-6 drop-shadow-md" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Strategic <span className="text-gradient">Sourcing</span>
            </h1>
            <p className="text-white font-bold max-w-2xl text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Connecting global buyers with India's finest manufacturers while ensuring quality and compliance at every step.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Strategic Advantage Section ──────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionLabel text="Sourcing Excellence" className="mb-6" />
              <SectionTitle 
                title="Strategic Sourcing Solutions" 
                subtitle="Reliable partnerships built on a foundation of trust and technical expertise."
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Navigating the complex landscape of global sourcing requires local expertise and a zero-compromise approach to quality. We manage the entire lifecycle—from identifying the right factory to final shipment oversight—ensuring your supply chain remains resilient and high-performing.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Verified & Audited Suppliers',
                  'Pan-India On-Ground Presence',
                  'Transparent Reporting',
                  'Ethical Labor Practices'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-suvtex-orange" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary group inline-flex">
                Inquire Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200} className="relative lg:ml-auto">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] max-w-md mx-auto lg:mx-0">
                <img 
                  src={sourcingAdvantage} 
                  alt="Sourcing Advantage and Quality Control" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-suvtex-orange/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-suvtex-gold/10 rounded-full blur-3xl -z-10"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Service Grid Section ─────────────────────────────────── */}
      <section className="section-padding bg-suvtex-charcoal relative overflow-hidden rounded-[4rem] mx-4 mb-12">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="container-premium relative z-10">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Our Capabilities" variant="light" className="mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-suvtex-orange">Sourcing</span> Management
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-suvtex-orange/30 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-suvtex-orange/15 flex items-center justify-center mb-6 group-hover:bg-suvtex-orange group-hover:shadow-glow transition-all duration-500">
                    <service.icon className="w-7 h-7 text-suvtex-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-suvtex-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Methodology Section ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Methodology" className="mb-4" />
            <SectionTitle title="Our Sourcing Workflow" align="center" />
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {methodologySteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="relative">
                <div className="text-center px-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-suvtex-orange to-suvtex-gold mx-auto flex items-center justify-center text-white shadow-glow mb-8 relative z-10">
                    <step.icon className="w-9 h-9" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-suvtex-charcoal text-white text-xs font-bold flex items-center justify-center border-4 border-white">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-suvtex-orange/30 to-transparent -z-0"></div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="container-premium">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-suvtex-charcoal to-suvtex-slate rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-suvtex-orange/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
                  Optimize Your Supply Chain with a <span className="text-suvtex-orange">Reliable Partner</span>
                </h3>
                <p className="text-white/70 text-lg mb-12">
                  Ready to discover the potential of Indian manufacturing? Let our experts guide you to the right suppliers and ensure uncompromising quality at every step.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link to="/contact" className="btn-primary px-10 py-5 text-lg group">
                    Start Sourcing Today
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center gap-3 px-8 py-5 rounded-xl border-2 border-white/10 bg-white/5 text-white font-semibold">
                    <Briefcase className="w-5 h-5 text-suvtex-orange" />
                    Professional Solutions
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
