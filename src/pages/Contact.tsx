import { useState, useEffect, useRef } from 'react'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import { footerLinks } from '@/data/content'
import contactBg from '@/assets/BACKGROUND/CONTACT US.webp'
import contactUsImg from '@/assets/contact us suvtex.webp'

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

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="pt-28 pb-8">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/50 via-suvtex-charcoal/20 to-transparent"></div>
        </div>
        <div className="relative z-10 container-premium">
          <SectionLabel text="Get In Touch" variant="light" className="mb-6 drop-shadow-md" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-white font-bold max-w-2xl text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Get in touch with us for all your inspection and quality assurance needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-white">
        <div className="container-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MapPin,
                title: 'Address',
                content: 'MUMBAI, INDIA',
              },
              {
                icon: Mail,
                title: 'Email',
                content: footerLinks.contact.email,
                link: `mailto:${footerLinks.contact.email}`,
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 8108140336 / 7977810455',
                link: 'tel:+918108140336',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                content: 'Everyday: 9:00 AM – 6:00 PM (IST)',
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-suvtex-orange/30 hover:shadow-soft hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-suvtex-orange/10 to-suvtex-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:from-suvtex-orange group-hover:to-suvtex-gold transition-all duration-500">
                    <item.icon className="w-7 h-7 text-suvtex-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 text-sm hover:text-suvtex-orange transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Content */}
            <ScrollReveal>
              <div className="relative h-full min-h-[350px] rounded-3xl overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={contactUsImg}
                  alt="Contact Us"
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>
            </ScrollReveal>

            {/* Right Form */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-3xl p-5 md:p-6 shadow-premium">
                <SectionLabel text="Contact Form" className="mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
                <p className="text-gray-500 mb-4 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h4>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name <span className="text-suvtex-orange">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="e.g. John"
                          required
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name <span className="text-suvtex-orange">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Smith"
                          required
                          className="input-premium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-suvtex-orange">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        required
                        className="input-premium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-suvtex-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +00 0000000000"
                        required
                        className="input-premium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Your message..."
                        className="input-premium resize-none"
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-suvtex-orange focus:ring-suvtex-orange"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive emails from Suvtex about quality inspection services.
                      </label>
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send className="w-5 h-5" />
                      Submit Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  )
}
