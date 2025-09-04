import { Link } from 'react-router-dom'
import { Menu, X, UserPlus } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleJoinUs = () => {
    // Scroll to reward section or redirect to reward page
    window.location.href = '/reward'
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img 
              src="/src/assets/images/logo/Bake+&+Che.webp" 
              alt="Bake And Che" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span className="logo-text" style={{display: 'none'}}>🥖 Bake And Che</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={handleNavClick}>Home</Link>
            <Link to="/about" className="nav-link" onClick={handleNavClick}>About Us</Link>
            <Link to="/location" className="nav-link" onClick={handleNavClick}>Location</Link>
            <Link to="/menu" className="nav-link" onClick={handleNavClick}>Menu</Link>
            <Link to="/career" className="nav-link" onClick={handleNavClick}>Career</Link>
            <Link to="/reward" className="nav-link" onClick={handleNavClick}>Reward</Link>
            <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contact</Link>
          </nav>

          <div className="header-actions">
            <button 
              className="join-btn"
              onClick={handleJoinUs}
            >
              <UserPlus size={18} />
              Join Us
            </button>
            
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
