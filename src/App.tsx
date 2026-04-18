import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ExpertTeam from './pages/ExpertTeam'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Sourcing from './pages/Sourcing'
import Donation from './pages/Donation'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/expert-team" element={<ExpertTeam />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sourcing" element={<Sourcing />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
