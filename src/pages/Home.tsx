import parliament from '../assets/parliament.png'
import homepageAbout from '../assets/homepage about.png'
import isoLogo from '../assets/ISO LOGO.png'
import cqiIrcaLogo from '../assets/CQI IRCA LOGO.png'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Loader2
} from 'lucide-react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import SectionTitle from '@/components/ui-custom/SectionTitle'
import ServiceCard from '@/components/ui-custom/ServiceCard'
import LogoMarquee from '@/components/ui-custom/LogoMarquee'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import {
  factoryAuditServices,
  productServices,
} from '@/data/content'

function useScrollReveal() {
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

  return { ref, isVisible }
}

function ScrollReveal({ children, className = '', delay = 0, id }: { children: React.ReactNode, className?: string, delay?: number, id?: string }) {
  const { ref, isVisible } = useScrollReveal()
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

export default function Home() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })

  useEffect(() => {
    setIsHeroLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      toast.error('Please agree to receive communications.')
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Suvtex Admin',
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      toast.success('Message sent successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">

      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative h-[650px] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <img src={parliament} alt="Parliament" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-[1200px] mx-auto mt-[100px] pt-28 pb-24">
          <div className="max-w-2xl flex flex-col gap-4">

            {/* ── Accreditation Badges ── */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 ${
                isHeroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* ISO Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1.5 flex-shrink-0 shadow-soft">
                  <img src={isoLogo} alt="ISO" className="w-full h-full object-contain" />
                </div>
                <span className="text-white text-sm font-semibold tracking-wide">
                   Accredited by ISO 9001 | 14001 | 45001
                </span>
              </div>

              {/* CQI IRCA Badge */}
              <div className="inline-flex items-center px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-transform hover:scale-105 duration-300">
                <img
                  src={cqiIrcaLogo}
                  alt="CQI IRCA"
                  className="h-7 w-auto object-cover"
                />
              </div>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-700 delay-100 ${
                isHeroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Welcome to{" "}
               <span className="text-gradient drop-shadow-none">SUVTEX</span> India
              <span className="block text-xl md:text-2xl font-semibold text-white mt-4 tracking-wide drop-shadow-lg">
                Your Trusted Inspection Partner
              </span>
            </h1>

            <div className="space-y-4 max-w-2xl">
              <p
                className={`text-white text-lg md:text-xl leading-relaxed font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-all duration-700 delay-200 ${
                  isHeroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                We specialize in Softline & Hardline merchandise, delivering reliable third-party audit and AQL inspection services to ensure global quality standards.
              </p>

              <p
                className={`text-white text-lg md:text-xl leading-relaxed font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-all duration-700 delay-300 ${
                  isHeroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Every inspection we conduct is Sustainable, Unbiased, and Verified, giving you complete confidence in your product quality.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
                isHeroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                to="/services" 
                className="btn-primary group"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2.5 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT SUVTEX ─────────────────────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-suvtex-orange rounded-full text-white text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                About Suvtex
              </div>
              <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                Your Trusted Partner in Quality Inspection & Compliance in Mumbai, India <br />
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>We offer third Party inspection and audit services to assess product quality, ensuring adherence to international standards.</p>
                <p>Our specialists provide tailored technical solutions for both hardline and Softline products, enhancing their quality and safety.</p>
                <p>Specializing in various audits including Manufacturing, Social Compliance, Building Safety, Environmental, and Technical audits.</p>
              </div>
              <div className="mt-10">
                <Link to="/about" className="btn-primary px-8 py-4">
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="relative">
              <div className="relative z-10">
                <div className="absolute -inset-4 bg-suvtex-orange/10 rounded-[2rem] blur-2xl"></div>
                <img 
                  src={homepageAbout} 
                  alt="Quality Inspection" 
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-video lg:aspect-auto" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-suvtex-gold/10 rounded-full blur-3xl"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── QUICK LINKS ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-hover hover:border-suvtex-orange/20 border border-transparent transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider">About SUVTEX</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { name: 'Why Choose Suvtex India?', path: '/about#why-choose-us' },
                    { name: 'Our Values', path: '/about#values-vision-mission' },
                    { name: 'Our Vision / Mission', path: '/about#vision-mission' },
                    { name: 'Our Priorities', path: '/about#priorities' },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} className="flex items-center gap-3 text-gray-600 hover:text-suvtex-orange transition-colors group/item">
                        <span className="w-2 h-2 rounded-full bg-suvtex-orange/30 group-hover/item:bg-suvtex-orange transition-colors"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-hover hover:border-suvtex-orange/20 border border-transparent transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">EXPERT TEAM</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { name: 'Textiles Technologists', path: '/expert-team#textiles' },
                    { name: 'Leather Technologists', path: '/expert-team#leather' },
                    { name: 'Utensils Technologists', path: '/expert-team#utensils' },
                    { name: 'Plastics Technologists', path: '/expert-team#plastics' },
                    { name: 'Non stick ware Technologists', path: '/expert-team#non-stick' },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} className="flex items-center gap-3 text-gray-600 hover:text-suvtex-orange transition-colors group/item">
                        <span className="w-2 h-2 rounded-full bg-suvtex-orange/30 group-hover/item:bg-suvtex-orange transition-colors"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-hover hover:border-suvtex-orange/20 border border-transparent transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-suvtex-orange to-suvtex-gold flex items-center justify-center text-white shadow-soft">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wider">Expertise</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { name: 'Product Categories', path: '/products' },
                    { name: 'Strategic Sourcing Solutions', path: '/sourcing' },
                    { name: 'ISO Based Factory Audit Services', path: '/services#factory-audits' },
                    { name: 'Product Services', path: '/services#product-services' },
                    { name: 'Consultancy Services', path: '/services#consultancy' },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} className="flex items-center gap-3 text-gray-600 hover:text-suvtex-orange transition-colors group/item">
                        <span className="w-2 h-2 rounded-full bg-suvtex-orange/30 group-hover/item:bg-suvtex-orange transition-colors"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── LOGO MARQUEE ─────────────────────────────────────────── */}
      <LogoMarquee />

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Our Services" className="mb-4" />
            <SectionTitle
              title="Comprehensive Inspection Solutions"
              subtitle="From factory audits to final product inspection, we cover every aspect of quality assurance"
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-12">
              <Link 
                to="/services#factory-audits" 
                className="flex items-center gap-4 mb-8 group/title inline-flex hover:opacity-80 transition-opacity"
              >
                <div className="decorative-line group-hover/title:w-16 transition-all duration-500"></div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover/title:text-suvtex-orange transition-colors">
                  ISO Based Factory Audit Services
                </h3>
                <ArrowRight className="w-5 h-5 text-suvtex-orange opacity-0 -translate-x-4 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300" />
              </Link>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {factoryAuditServices.map((service, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <ServiceCard 
                      title={service.title} 
                      description={service.description} 
                      icon={service.icon} 
                      to={`/services#audit-${index}`} 
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <Link 
                to="/services#product-services" 
                className="flex items-center gap-4 mb-8 group/title inline-flex hover:opacity-80 transition-opacity"
              >
                <div className="decorative-line group-hover/title:w-16 transition-all duration-500"></div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover/title:text-suvtex-orange transition-colors">
                  Product Services
                </h3>
                <ArrowRight className="w-5 h-5 text-suvtex-orange opacity-0 -translate-x-4 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300" />
              </Link>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productServices.slice(0, 4).map((service, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <ServiceCard 
                      title={service.title} 
                      description={service.description} 
                      icon={service.icon} 
                      to={`/services#product-${index}`} 
                    />
                  </ScrollReveal>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link to="/services" className="btn-secondary">
                  View All Services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT FORM ─────────────────────────────────────────── */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-suvtex-orange/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Information Column */}
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <SectionLabel text="Contact Us" className="mb-6" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Ready to Ensure Your <span className="text-suvtex-orange">Global Quality Standards?</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Have questions about our inspection services? We're here to help you ensure the highest quality standards for your products.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-suvtex-orange group-hover:shadow-glow transition-all duration-500">
                      <Phone className="w-6 h-6 text-suvtex-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Directly</h4>
                      <p className="text-xl font-bold text-gray-900 hover:text-suvtex-orange transition-colors cursor-pointer">+91 8108140336</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-suvtex-orange group-hover:shadow-glow transition-all duration-500">
                      <Mail className="w-6 h-6 text-suvtex-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Our Experts</h4>
                      <p className="text-xl font-bold text-gray-900 hover:text-suvtex-orange transition-colors cursor-pointer">padhisatyavan@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-suvtex-orange group-hover:shadow-glow transition-all duration-500">
                      <MapPin className="w-6 h-6 text-suvtex-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Our Office</h4>
                      <p className="text-lg font-bold text-gray-900 leading-snug">Mumbai, India</p>
                      <p className="text-gray-500 mt-1">Total Independent Third Party Quality Control</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-premium border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-suvtex-orange/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                    <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you within 24 hours.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">First Name <span className="text-suvtex-orange">*</span></label>
                          <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John" 
                            required 
                            className="input-premium" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Last Name <span className="text-suvtex-orange">*</span></label>
                          <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Smith" 
                            required 
                            className="input-premium" 
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email <span className="text-suvtex-orange">*</span></label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com" 
                            required 
                            className="input-premium" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Whatsapp Number <span className="text-suvtex-orange">*</span></label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000" 
                            required 
                            className="input-premium" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4} 
                          placeholder="How can we help you?" 
                          className="input-premium resize-none"
                        ></textarea>
                      </div>
                      <div className="flex items-center gap-3 py-2">
                        <input 
                          type="checkbox" 
                          name="consent"
                          id="home-consent" 
                          checked={formData.consent}
                          onChange={handleChange}
                          className="w-5 h-5 rounded-md border-gray-300 text-suvtex-orange focus:ring-suvtex-orange cursor-pointer" 
                        />
                        <label htmlFor="home-consent" className="text-sm text-gray-600 cursor-pointer select-none">
                          I agree to receive communications from SUVTEX about quality services.
                        </label>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center text-lg py-5 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Your Message 
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}