import React from 'react'
import logo1 from '../../assets/logos/1.png'
import logo2 from '../../assets/logos/2.png'
import logo3 from '../../assets/logos/3.png'
import logo4 from '../../assets/logos/4.png'
import logo5 from '../../assets/logos/5.png'
import logo6 from '../../assets/logos/6.png'
import logo8 from '../../assets/logos/8.png'
import logo9 from '../../assets/logos/9.png'
import logoSwiss from '../../assets/logos/Swiss-Eagle.png'
import logoBubble from '../../assets/logos/bubbleroom logo.jpg'
import logoClosure from '../../assets/logos/closure.png'
import logoElle from '../../assets/logos/elle.png'
import logoFossil from '../../assets/logos/fossil.png'
import logoFC from '../../assets/logos/frenchconnection.jpg'
import logoHunter from '../../assets/logos/hunter brand.jpg'
import logoPierre from '../../assets/logos/pierre.png'
import logoReligion from '../../assets/logos/religion.png'

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, 
  logo8, logo9, logoSwiss, logoBubble,
  logoClosure, logoElle, logoFossil, logoFC, 
  logoHunter, logoPierre, logoReligion
]

const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full bg-white py-12 overflow-hidden border-y border-gray-100">
      <div className="container-premium mb-8 text-center">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-[0.3em]">Our Trusted Partners</h3>
      </div>
      <div className="flex w-max animate-marquee" style={{ animationDuration: '40s' }}>
        {/* First set of logos */}
        <div className="flex items-center">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="mx-12 flex-shrink-0 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-16 md:h-24 w-auto object-contain max-w-[180px]"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless looping */}
        <div className="flex items-center">
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="mx-12 flex-shrink-0 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-16 md:h-24 w-auto object-contain max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoMarquee
