import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { footerLinks } from '@/data/content'
import logo from '@/assets/SUVTEX WHITE.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-suvtex-charcoal text-white overflow-hidden">
      {/* Main Footer */}
      <div className="container-premium py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src={logo} 
                alt="SUVTEX India Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Sustainable. Unbiased. Verified.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Third Party Inspection Service providing quality control and assurance for hardline and softline goods across India.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-suvtex-orange hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-suvtex-orange transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Quality Inspections', path: '/services' },
                { name: 'Sourcing Solutions', path: '/sourcing' },
                { name: 'Product Categories', path: '/products' },
                { name: 'Expert Technologists', path: '/expert-team' },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-suvtex-orange transition-all duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-suvtex-orange transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-suvtex-orange group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  MUMBAI, INDIA
                </p>
              </div>
              
              <a
                href={`mailto:${footerLinks.contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-suvtex-orange transition-colors duration-300">
                  <Mail className="w-5 h-5 text-suvtex-orange group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  {footerLinks.contact.email}
                </span>
              </a>
              
              <a
                href="tel:+91 8108140336"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-suvtex-orange transition-colors duration-300">
                  <Phone className="w-5 h-5 text-suvtex-orange group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  +91 8108140336
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              Copyright {currentYear} Suvtex. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
