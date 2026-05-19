import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Phone, Menu, X } from 'lucide-react'
import { navLinks } from '@/data/content'
import logoWhite from '@/assets/SUVTEX.png'
import logoBlack from '@/assets/SUVTEX.png'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // On homepage: transparent → white on scroll or hover
  // On other pages: always white
  const isTransparent = isHomePage && !isScrolled && !isHovered

  return (
    <>
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent py-6'
            : 'bg-white border-b border-gray-100 shadow-sm py-4'
        }`}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-col group">
              <img
                src={isTransparent ? logoWhite : logoBlack}
                alt="SUVTEX India"
                className={`md:h-[80px] h-[60px] w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                  isTransparent ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' : ''
                }`}
              />
              <span className={`text-[1rem] font-bold ${isTransparent ? 'text-[#fff]' : 'text-[#000]'}`}>Sustainable.Unbiased.Verified</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-[1rem] font-bold tracking-wide rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-suvtex-orange bg-suvtex-orange/10'
                        : isTransparent
                          ? 'text-white hover:text-suvtex-orange hover:bg-white/10'
                          : 'text-gray-700 hover:text-suvtex-orange hover:bg-suvtex-orange/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>

            {/* Right side */}
            <div className="hidden xl:flex items-center gap-6">
              <a
                href="tel:+918108140336"
                className={`flex items-center text-[1rem] gap-2 font-bold transition-colors duration-300 ${
                  isTransparent
                    ? 'text-white/90 hover:text-suvtex-orange'
                    : 'text-gray-700 hover:text-suvtex-orange'
                }`}
              >
                <Phone className="w-4 h-4 text-suvtex-orange" />
                <span>+91 81081 40336</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100">
            <Link to="/" className="flex flex-col">
              <img src={logoBlack} alt="SUVTEX India" className="h-12 w-auto object-contain" />
              <span className="text-[0.65rem] font-bold text-black mt-1 leading-tight">Sustainable.Unbiased.Verified</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors mt-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 p-4 flex-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-suvtex-orange text-white'
                      : 'text-gray-700 hover:bg-suvtex-orange/8 hover:text-suvtex-orange'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </Link>
              )
            })}
          </nav>

          {/* Panel footer */}
          <div className="p-4 border-t border-gray-100 space-y-3">
            <a
              href="tel:+918108140336"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-suvtex-orange hover:bg-suvtex-orange/5 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-suvtex-orange/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-suvtex-orange" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Call us</p>
                <p className="font-semibold text-gray-800 text-sm">+91 81081 40336</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}