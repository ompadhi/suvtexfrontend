import { useEffect, useRef, useState } from 'react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import ngoBg from '@/assets/BACKGROUND/NGO.webp'
import socialImg1 from '@/assets/SOCIAL/1.png'
import socialImg2 from '@/assets/SOCIAL/2.png'
import socialImg3 from '@/assets/SOCIAL/3.png'
import socialImg4 from '@/assets/SOCIAL/4.png'
import socialImg5 from '@/assets/SOCIAL/5.png'
import socialImg6 from '@/assets/SOCIAL/6.png'
import socialImg7 from '@/assets/SOCIAL/7.png'
import socialImg8 from '@/assets/SOCIAL/8.png'
import socialImg9 from '@/assets/SOCIAL/9.png'
import { Phone, MapPin, Calendar, Target } from 'lucide-react'

// ============================================================================
// Scroll Reveal
// ============================================================================

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
    <div id={undefined} className={className}>
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

// ============================================================================
// Data
// ============================================================================

const GALLERY = [
  { src: socialImg1, caption: 'Skill Development Training' },
  { src: socialImg2, caption: 'Vocational Programs' },
  { src: socialImg3, caption: 'Community Engagement' },
  { src: socialImg4, caption: 'Special Education' },
  { src: socialImg5, caption: 'Certificate Programs' },
  { src: socialImg6, caption: 'Self-Employment Support' },
  { src: socialImg7, caption: 'Meal Program' },
  { src: socialImg8, caption: 'Art & Craft Activities' },
  { src: socialImg9, caption: 'Educational Workshops' },
]

const PILLARS = [
  {
    number: '01',
    title: 'Skill Development',
    desc: 'Structured vocational training programs that equip specially-abled individuals with practical, employable skills.',
  },
  {
    number: '02',
    title: 'Rehabilitation Support',
    desc: 'Holistic rehabilitation systems ensuring physical, emotional, and social well-being for every beneficiary.',
  },
  {
    number: '03',
    title: 'Self-Reliance',
    desc: 'Pathways to self-employment and dignified livelihood, enabling full integration into society.',
  },
]

// ============================================================================
// Main Component
// ============================================================================

export default function SocialService() {
  return (
    <main className="pt-28 pb-20 bg-white">
      {/* ── Hero ── */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ngoBg})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/80 via-suvtex-charcoal/40 to-transparent" />
        </div>
        <div className="relative z-10 container-premium">
          <ScrollReveal>
            <SectionLabel text="Social Initiative" variant="light" className="mb-4 drop-shadow-md" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Akanksha <span className="text-gradient">Mahila Sanstha</span>
            </h1>
            <p className="text-white font-semibold mt-4 max-w-2xl text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Empowering specially-abled individuals through skill development, 
              vocational training, and self-employment since 2010.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Intro Strip ── */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <ScrollReveal className="flex-1">
            <p className="text-xs font-bold tracking-[0.2em] text-suvtex-orange uppercase mb-2">
              Sumani Vocational Training & Divyang Children's Center
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              An initiative by Akanksha Mahila Sanstha, fostering dignity, independence, 
              and sustainable futures for specially-abled individuals since 2010.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="flex gap-10 shrink-0">
            {[
              { icon: <MapPin className="w-4 h-4 text-suvtex-orange" />, label: 'Location', value: 'Mumbai, India' },
              { icon: <Calendar className="w-4 h-4 text-suvtex-orange" />, label: 'Founded', value: '2010' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-2.5">
                <div className="mt-0.5">{icon}</div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{label}</p>
                  <p className="text-gray-800 font-semibold text-sm">{value}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── About ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-[0.2em] text-suvtex-orange uppercase mb-5">
              About the Organization
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-[1.2] mb-8">
              Empowering through<br />Education & Vocation
            </h2>
            <div className="w-10 h-[2px] bg-suvtex-orange mb-8" />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
              Akanksha Mahila Sanstha is a registered non-profit organization dedicated to the 
              empowerment and holistic development of specially-abled individuals. The organization 
              focuses on fostering self-confidence, independence, and sustainable livelihood 
              opportunities through structured education, vocational training, and inclusive 
              support systems.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The Sumani Vocational Training & Divyang Children's Center serves as a nurturing 
              platform providing skill development, rehabilitation support, and a safe learning 
              environment — enabling beneficiaries to integrate into society with dignity and 
              self-reliance.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} className="space-y-5">
            {PILLARS.map(({ number, title, desc }, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:border-orange-100 hover:bg-orange-50/30 transition-all duration-300"
              >
                <span className="text-[11px] font-black tracking-widest text-suvtex-orange/40 mt-0.5 shrink-0">
                  {number}
                </span>
                <div>
                  <h3 className="text-gray-800 font-bold text-sm md:text-base mb-1.5">{title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Suvtex Commitment ── */}
      <section className="bg-gray-950 mx-6 md:mx-12 lg:mx-20 rounded-3xl overflow-hidden mb-20 md:mb-28">
        <ScrollReveal>
          <div className="px-10 md:px-16 py-14 md:py-18 grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-suvtex-orange/70 uppercase mb-5">
                Suvtex India — Social Responsibility
              </p>
              <blockquote className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl">
                "As part of its commitment to social responsibility, Suvtex India extends its 
                support by contributing towards essential care, educational resources, and 
                nutritional needs of the children — reflecting a shared vision of inclusive 
                growth and sustainable community development."
              </blockquote>
            </div>
            <div className="flex flex-col gap-3 md:items-end shrink-0">
              <div className="flex items-center gap-2.5">
                <Target className="w-4 h-4 text-gray-600" />
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">Reg. No.</p>
                  <p className="text-gray-400 font-mono text-xs">MUM/WR/GNL/O/2196/2010–11</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Gallery ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20 md:mb-28">
        <ScrollReveal className="mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-suvtex-orange uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Programs in Action
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((item, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="border border-gray-100 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-suvtex-orange uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Adv. Nita Parab Padhi
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Akanksha Mahila Sanstha, Mumbai</p>
            </div>
            <a
              href="tel:+919967700093"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold text-sm transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              99677 00093
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}