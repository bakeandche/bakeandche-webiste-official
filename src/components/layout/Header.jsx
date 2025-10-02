import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [showFloatingBtn, setShowFloatingBtn] = useState(false)

  const handleOrderNow = () => {
    // Redirect to menu page for ordering
    window.location.href = '/menu'
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderHidden(true)
        setShowFloatingBtn(true)
      } else {
        setIsHeaderHidden(false)
        setShowFloatingBtn(false)
      }
      
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`header ${isHeaderHidden ? 'hidden' : ''}`}>
        {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img 
                src="/images/logo.webp" 
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
              <NavLink to="/" className="nav-link" onClick={handleNavClick}>Home</NavLink>
              <NavLink to="/about" className="nav-link" onClick={handleNavClick}>About Us</NavLink>
              <NavLink to="/location" className="nav-link" onClick={handleNavClick}>Location</NavLink>
              <NavLink to="/menu" className="nav-link" onClick={handleNavClick}>Menu</NavLink>
              <NavLink to="/career" className="nav-link" onClick={handleNavClick}>Career</NavLink>
              <NavLink to="/reward" className="nav-link" onClick={handleNavClick}>Reward</NavLink>
              <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>Contact</NavLink>
            </nav>

            <div className="header-actions">
              <button 
                className="join-btn"
                onClick={handleOrderNow}
              >
                <ShoppingCart size={18} />
                Order Now
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

      {/* Floating Order Now Button */}
      <button 
        className={`floating-order-btn ${showFloatingBtn ? 'visible' : ''}`}
        onClick={handleOrderNow}
      >
        <ShoppingCart size={18} />
        Order Now
      </button>
    </>
  )
}
