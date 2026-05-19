import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, TrendingUp, Target, Award, Globe, Eye, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import SectionTitle from '@/components/ui-custom/SectionTitle'
import FeatureCard from '@/components/ui-custom/FeatureCard'
import ValueCard from '@/components/ui-custom/ValueCard'
import satyavanAbout from '../assets/satyavan_about.png'
import aboutBg from '../assets/BACKGROUND/ABOUT US.png'
import { hardlineProducts, softlineProducts, values, priorities } from '@/data/content'

function ScrollReveal({ children, className = '', delay = 0, id }: { children: React.ReactNode, className?: string, delay?: number, id?: string }) {
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
    <div id={id} className={className}>
      <div
        ref={ref}
        className="transition-all duration-700 ease-smooth"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: `${delay}ms`
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="pt-28 pb-8">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/50 via-suvtex-charcoal/20 to-transparent"></div>
        </div>
        <div className="relative z-10 container-premium">
          <SectionLabel text="About Us" variant="light" className="mb-4 drop-shadow-md" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            About <span className="text-gradient">Suvtex India</span>
          </h1>
          <p className="text-white font-semibold mt-4 max-w-2xl text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Your trusted partner for quality inspection and assurance services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-premium">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                <p className="text-lg md:text-xl text-gray-900 font-medium leading-snug">
                  SUVTEX INDIA is a trusted independent third-party audit and inspection agency based in Mumbai - India, delivering reliable quality assurance, compliance, and sourcing solutions to global clients.
                </p>
                <p className="text-sm md:text-base">
                  We operate in alignment with internationally recognized standards, including ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and ISO 45001 (Occupational Health & Safety) , ensuring a structured, transparent, and consistent approach across all our services.
                </p>
                <p className="text-sm md:text-base">
                  With over two decades of industry experience, SUVTEX specializes in product inspections, factory audits, and end-to-end sourcing support across apparel, consumer goods, and industrial product categories. We work closely with manufacturers, suppliers, and buyers to ensure that every product meets defined specifications, regulatory requirements, and quality expectations.
                </p>
                <p className="text-sm md:text-base">
                  Our strength lies in our technical expertise, strong vendor network across India, and a deep understanding of international compliance standards. We act as your reliable on-ground partner, helping you minimize risks, maintain product integrity, and achieve consistent quality in every shipment.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/services" className="btn-primary px-6 py-3 text-sm">
                    Our Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="btn-secondary px-6 py-3 text-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="relative flex justify-center">
              <div className="relative z-10 w-full max-w-[350px]">
                <div className="absolute -inset-4 bg-suvtex-orange/10 rounded-[3rem] blur-3xl opacity-50"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                  <img
                    src={satyavanAbout}
                    alt="About Suvtex"
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-suvtex-charcoal/20 to-transparent"></div>
                </div>
                
                {/* Accent element */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-suvtex-gold/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-suvtex-orange/10 rounded-full blur-2xl"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="why-choose-us" className="section-padding bg-gradient-to-br from-gray-50 to-white scroll-mt-36">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Why Us" className="mb-4" />
            <SectionTitle title="Why Choose Suvtex India?" align="center" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Expertise', description: 'Our team comprises seasoned professionals with in-depth knowledge of both hardline and Softline goods, ensuring a thorough and accurate assessment of your products.', icon: Award },
              { title: 'Services', description: 'From factory inspections and product testing to quality control and compliance checks, we offer a comprehensive suite of services designed to safeguard your brand reputation.', icon: CheckCircle2 },
              { title: 'Global Reach', description: 'Suvtex India operates on a global scale, providing inspection services across borders. We understand the complexities of international trade.', icon: Globe },
              { title: 'Transparency', description: 'We believe in transparent communication and provide detailed inspection reports that offer insights into the quality and compliance of your products.', icon: Eye },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Features Grid */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-premium">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Quality Assurance',
                description: 'The Suvtex Technicians all have a manufacturing background & they have technical solutions. The Suvtex ensure the quality, safety and sustainability of your products.',
              },
              {
                icon: Award,
                title: 'Professional Standards',
                description: 'The Suvtex staff members maintain integrity, professional competence, confidentiality, professional behaviour, and high ethical standards in their day-to-day business activities.',
              },
              {
                icon: TrendingUp,
                title: 'Comprehensive Services',
                description: 'We offer you comprehensive services for a wide range of consumer goods including hardline and Softline goods inspected as per legal metrology rules & regulations.',
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-500 border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange/10 to-suvtex-gold/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-suvtex-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES, VISION & MISSION ──────────────────────────────── */}
      <section id="values-vision-mission" className="section-padding bg-white border-t border-gray-100 scroll-mt-36">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Our Values" className="mb-4 justify-center" />
            <SectionTitle title="Our Values" align="center" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
              Our values inspire us to work hard with honesty and also provide direction to move forward.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ValueCard 
                  title={value.title} 
                  description={value.description} 
                  items={value.items}
                  index={index} 
                />
              </ScrollReveal>
            ))}
          </div>

          <div id="vision-mission" className="grid md:grid-cols-2 gap-8 mb-16 scroll-mt-36">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-suvtex-charcoal to-suvtex-slate rounded-3xl p-8 md:p-10 text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-suvtex-orange/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-suvtex-orange" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To be a trusted global partner in quality assurance, delivering sustainable, unbiased, and reliable inspection and audit services across industries.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-suvtex-orange to-suvtex-gold rounded-3xl p-8 md:p-10 text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  To deliver accurate, timely, and value-driven inspection and audit services, ensuring product quality, compliance, and customer satisfaction through zero-defect execution and transparent reporting.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal id="priorities" className="scroll-mt-40">
            <div className="text-center mb-16">
              <SectionLabel text="Our Priorities" className="mb-4 justify-center" />
              <SectionTitle title="Our Priorities - What Drives Us Forward" align="center" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {priorities.map((priority, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-soft hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-suvtex-orange/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-suvtex-orange/10 to-suvtex-gold/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-suvtex-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{priority.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{priority.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="section-padding bg-gradient-to-br from-suvtex-cream via-white to-suvtex-cream">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Products" className="mb-4" />
            <SectionTitle title="Our Products" align="center" />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardline Products */}
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Hardline Products</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {hardlineProducts.slice(0, 12).map((product, index) => (
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
                  <Link to="/products" className="text-suvtex-orange font-medium hover:underline inline-flex items-center gap-2">
                    View All Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Softline Products */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Softline Products</h3>
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
                  <Link to="/products" className="text-suvtex-orange font-medium hover:underline inline-flex items-center gap-2">
                    View All Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
