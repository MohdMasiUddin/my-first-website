import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav>
      <div className="nav-brand">Mohd Masi Uddin's Portfolio</div>
      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </nav>
  )
}

export default Navbar