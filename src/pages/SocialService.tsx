import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import ngoBg from '@/assets/BACKGROUND/NGO.png'
import { 
  Phone, 
  MapPin, 
  X, 
  ZoomIn, 
  Heart,
  Calendar,
  CheckCircle2
} from 'lucide-react'

type LightboxItem = {
  src: string
  caption: string
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
        className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
        style={{
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

        {/* Full-size image */}
        <img
          src={item.src.replace('w=400&h=300', 'w=1600&h=1200')}
          alt={item.caption}
          className="w-full object-contain bg-gray-100"
          style={{ maxHeight: '80vh' }}
        />

        {/* Caption */}
        <div className="p-6 bg-white border-t border-gray-100">
          <p className="text-gray-900 font-semibold text-lg">{item.caption}</p>
          <p className="text-gray-500 text-sm mt-1 italic">Akanksha Mahila Sanstha Social Initiative</p>
        </div>
      </div>
    </div>,
    document.body
  )
}

function ScrollReveal({
  children,
  className = '',
  delay = 0,
  id,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
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
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
    caption: 'Craft & skill training',
  },
  {
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=300&fit=crop',
    caption: 'Vocational programs',
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
    caption: 'Community activities',
  },
  {
    src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=300&fit=crop',
    caption: 'Special education',
  },
  {
    src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop',
    caption: 'Certificate programs',
  },
  {
    src: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?w=400&h=300&fit=crop',
    caption: 'Self-employment support',
  },
]

export default function SocialService() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null)

  return (
    <div className="pt-28 pb-16">
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
      
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ngoBg})`,
          }}
        >
          <div className="absolute inset-0 bg-suvtex-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/60 via-suvtex-charcoal/20 to-transparent" />
        </div>
        <div className="relative z-10 container-premium">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-suvtex-orange/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-5 h-5 text-suvtex-orange fill-suvtex-orange" />
              </div>
              <SectionLabel text="Social Initiative" variant="light" className="mb-0 drop-shadow-md" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Akanksha <br />
              <span className="text-gradient">Mahila Sanstha</span>
            </h1>
            <p className="text-white font-bold max-w-2xl text-lg md:text-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Empowering specially-abled individuals through skill development, 
              vocational training, and self-employment since 2010.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            {/* Left: About */}
            <ScrollReveal>
              <div className="mb-12">
                <SectionLabel text="The Foundation" className="mb-6 justify-center" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Sumani Vocational Training & <br />
                  <span className="text-suvtex-orange">Divyang Children's Center</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                  <p>
                    Akanksha Mahila Sanstha is a registered social service organization dedicated to building
                    confidence, independence, and livelihood opportunities for
                    specially-abled individuals.
                  </p>
                  <p>
                    Through structured education and hands-on training programs, we provide 
                    a nurturing environment where every child can discover their potential 
                    and contribute meaningfully to society.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                  <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-suvtex-orange/30 transition-colors text-left">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-suvtex-orange group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5 text-suvtex-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-sm text-gray-700 font-medium">Malad West, Mumbai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-suvtex-orange/30 transition-colors text-left">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-suvtex-orange group-hover:text-white transition-all">
                      <Calendar className="w-5 h-5 text-suvtex-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Established</p>
                      <p className="text-sm text-gray-700 font-medium">Since 2010</p>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 rounded-2xl border-l-4 border-suvtex-orange bg-suvtex-orange/5 overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-suvtex-orange/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <p className="relative z-10 text-sm md:text-base text-gray-700 font-medium italic">
                    "Suvtex India proudly supports Akanksha Mahila Sanstha as part of our 
                    commitment to building a more inclusive and socially responsible future."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container-premium">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel text="Work Gallery" className="mb-4 justify-center" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-suvtex-orange to-suvtex-gold mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div 
                  className="relative rounded-3xl overflow-hidden group aspect-[4/3] cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-500"
                  onClick={() => setLightbox(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-suvtex-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-bold text-lg drop-shadow-md">{photo.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decorative shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-suvtex-orange/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-suvtex-gold/5 rounded-full blur-[100px]"></div>

        <div className="container-premium relative z-10">
          <ScrollReveal>
            <div className="bg-suvtex-charcoal rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              {/* Decorative patterns */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                   style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
              
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold mb-8">
                  <CheckCircle2 className="w-4 h-4 text-suvtex-orange" />
                  Register Number: MUM/WR/GNL/O/2196/2010–11
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Help Us Create an <br />
                  <span className="text-gradient">Inclusive Future</span>
                </h2>
                
                <p className="text-white/70 text-lg md:text-xl mb-12 leading-relaxed">
                  Partner with us, volunteer your time, or donate to help Akanksha Mahila Sanstha 
                  continue its mission of empowering specially-abled individuals.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="tel:9967700093"
                    className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-lg shadow-glow hover:scale-105 transition-transform"
                  >
                    <Phone className="w-5 h-5" />
                    Call: 9967700093
                  </a>
                  <div className="flex flex-col items-center sm:items-start text-left">
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Registered Office</p>
                    <p className="text-white/80 text-sm max-w-[280px] leading-relaxed">
                      202 / D A 49 Sagar Society, Sector 2, Charkop, Kandivali West, Mumbai 400067
                    </p>
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