import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle-line"></div>
            <p className="hero-subtitle">WELCOME TO BAKE AND CHE</p>
            <h1>INDULGE IN EXQUISITE <span className="highlight">TASTE</span> WITH US</h1>
            <p className="hero-description">
              Indulge in an unforgettable dining experience at Bake and Che, where culinary excellence meets impeccable service. Secure your spot and join us for a journey through exquisite flavours and authentic bakery delights.
            </p>
            <div className="hero-feature-box">
              <span className="feature-number">50+</span>
              <span className="feature-text">Fresh Items Daily</span>
            </div>
            <div className="hero-buttons">
              <button className="cta-button primary">
                Order Now
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-section">
          <div className="hero-visual">
            {/* Clean green section - no animations */}
          </div>
        </div>
        
        <div className="photo-frame">
          <div className="frame-content">
            <img 
              src="/images/hero-banner.webp" 
              alt="Fresh Bakery" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="placeholder-photo" style={{display: 'none'}}>🥖</div>
          </div>
        </div>
      </div>
    </section>
  )
}
