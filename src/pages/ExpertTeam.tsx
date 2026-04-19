import { useEffect, useRef, useState } from 'react'
import { Users, Award, GraduationCap, Wrench } from 'lucide-react'
import SectionLabel from '@/components/ui-custom/SectionLabel'
import SectionTitle from '@/components/ui-custom/SectionTitle'
import TeamCard from '@/components/ui-custom/TeamCard'
import expertTeamBg from '@/assets/BACKGROUND/EXPERT TEAM.png'

// Import technologist images
import footwearImg from '@/assets/Our Technologists/FOOTWEAR.png'
import leatherImg from '@/assets/Our Technologists/LEATHER.png'
import nonStickImg from '@/assets/Our Technologists/Non-Stick.png'
import toyImg from '@/assets/Our Technologists/TOY TECHNOLOGIST.png'
import homeTextileImg from '@/assets/Our Technologists/home textile.png'
import plasticImg from '@/assets/Our Technologists/plastic.png'
import textileImg from '@/assets/Our Technologists/textile.png'
import utensilsImg from '@/assets/Our Technologists/utensils.png'
import innerWearImg from '@/assets/Our Technologists/INNERWEAR.png'
import isoLogo from '@/assets/ISO LOGO.png'
import sa8000Logo from '@/assets/sa 8000.png'
import leanSigmaLogo from '@/assets/lean six sigma black belt.jpeg'

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

export default function ExpertTeam() {
  const allTechnologists = [
    {
      id: 'textiles',
      title: 'Textiles Technologists',
      description: 'These specialists ensure the highest quality fabrics, considering factors like durability, comfort, and performance.',
      image: textileImg,
    },
    {
      id: 'leather',
      title: 'Leather Technologists',
      description: 'Our leather experts source and work with the finest materials, guaranteeing a luxurious and long-lasting product.',
      image: leatherImg,
    },
    {
      id: 'plastics',
      title: 'Plastics Technologists',
      description: 'They ensure the perfect balance of strength, flexibility, and sustainability in our plastic components.',
      image: plasticImg,
    },
    {
      id: 'utensils',
      title: 'Utensils Technologists',
      description: 'Metals Technologists: Our metals experts select and treat metals for optimal durability, weight, and functionality.',
      image: utensilsImg,
    },
    {
      id: 'non-stick',
      title: 'Non-Stick Ware Technologists',
      description: 'Our non-stick ware experts ensure the quality and safety of cookware products, testing for durability and performance.',
      image: nonStickImg,
    },
    {
      title: 'Footwear Technologists',
      description: 'Specialists in footwear quality assessment, ensuring comfort, durability, and compliance with international standards.',
      image: footwearImg,
    },
    {
      title: 'Home Textile Technologists',
      description: 'Experts in home textile products including bedding, curtains, and towels, ensuring quality and safety standards.',
      image: homeTextileImg,
    },
    {
      title: 'Toy Safety Technologists',
      description: 'Dedicated to ensuring toy safety compliance, testing for hazards and adherence to international safety regulations.',
      image: toyImg,
    },
    {
      title: 'Inner Wear Product Inspection Specialist',
      description: 'Our specialists carefully assess fabrics for comfort, breathability, and durability, ensuring high standards in stitching, elasticity, and overall quality.',
      image: innerWearImg,
    },
  ]

  return (
    <div className="pt-28 pb-8">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${expertTeamBg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-suvtex-charcoal/50 via-suvtex-charcoal/20 to-transparent"></div>
        </div>
        <div className="relative z-10 container-premium">
          <SectionLabel text="Our People" variant="light" className="mb-6 drop-shadow-md" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Expert <span className="text-gradient">Team</span>
          </h1>
          <p className="text-white font-bold max-w-2xl text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Meet our team of highly skilled technologists dedicated to ensuring quality
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <SectionLabel text="Our Team" className="mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Suvtex India, our team of highly skilled technologists brings deep expertise across textiles, leather, plastics, metals, and footwear. With a strong focus on precision, safety and quality, we ensure every product meets the highest standards of performance and reliability.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our dedicated QA team further ensures that each product adheres to international standards of quality, safety, and performance, delivering consistency and trust at every stage.
            </p>
            <p className="text-suvtex-orange font-medium text-xl">
              We are the eyes of our customers and it is our responsibility to take care of their products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Team Members', value: '10+' },
              { icon: Award, label: 'Years Experience', value: '25+' },
              { icon: GraduationCap, label: 'Certified Experts', value: '100%' },
              { icon: Wrench, label: 'Specializations', value: '12+' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-suvtex-orange/30 hover:shadow-soft hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-suvtex-orange/10 to-suvtex-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:from-suvtex-orange group-hover:to-suvtex-gold transition-all duration-500">
                    <stat.icon className="w-8 h-8 text-suvtex-orange group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Specialists" className="mb-4" />
            <SectionTitle title="Our Technologists and Expertise" align="center" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTechnologists.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100} id={member.id} className="scroll-mt-32">
                <TeamCard
                  title={member.title}
                  description={member.description}
                  image={member.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-suvtex-charcoal text-white">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text="Credentials" variant="light" className="mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Professional Certifications</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ISO 9001 Certified', logo: isoLogo },
              { title: 'ISO 14001 Certified', logo: isoLogo },
              { title: 'SA 8000 Compliant', logo: sa8000Logo },
              { title: 'Lean Six Sigma Black Belt', logo: leanSigmaLogo },
            ].map((cert, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex-shrink-0 flex items-center justify-center">
                    <img src={cert.logo} alt={cert.title} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium">{cert.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}