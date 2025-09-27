import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section id="home-hero-story" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle-line"></div>
              <p className="hero-subtitle">OUR STORY</p>
              <h1>FROM VIETNAM TO <span className="highlight">CALIFORNIA</span></h1>
              <p className="hero-description">
                In Westminster, California, there's a cozy spot called Bake & Che. It's not your average dessert shop; it's a dream come true for Co Huong, a woman with a passion for food and heritage. Originally from Vietnam, Co Huong brought her love for Vietnamese desserts to California, sharing her culture's flavors with her new community.
              </p>
              <div className="hero-feature-box">
                <span className="feature-number">2023</span>
                <span className="feature-text">Founded in Westminster</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-visual-section">
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
        </div>
        
        <div className="hero-buttons">
          <Link to="/about" className="cta-button primary">
            Learn More
            <ArrowRight className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  )
}
