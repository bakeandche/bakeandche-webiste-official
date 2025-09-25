import { Hero } from '../components/features/Hero'
import { Features } from '../components/features/Features'
import { Star, Clock, Heart, Award, ArrowRight } from 'lucide-react'

export function Home() {
  return (
    <div className="home">
      {/* Desktop Layout */}
      <div className="desktop-layout">
        <Hero />
        <Features />
      </div>
      
      {/* Mobile Layout */}
      <div className="mobile-layout">
        <div className="hero-image-section">
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
        <div className="hero-content-section">
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
                <button className="cta-button secondary">
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
        <Features />
      </div>
      
      <section className="home-about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to Bake And Che</h2>
              <p>
                We're passionate about creating the most delicious, fresh-baked goods 
                that bring joy to every bite. From our artisan breads to our decadent 
                pastries, everything is made with love and the finest ingredients.
              </p>
              <p>
                Visit us today and experience the difference that fresh, quality baking makes. 
                We can't wait to share our passion with you!
              </p>
              <button className="cta-button">Visit Our Menu</button>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img 
                  src="/images/welcome-image.png" 
                  alt="Welcome to Bake And Che - Fresh Bakery" 
                  className="about-image-content"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="placeholder-image" style={{display: 'none'}}>🥖</div>
                <div className="new-badge">NEW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Star className="stat-icon" />
              <h3>4.9/5</h3>
              <p>Customer Rating</p>
            </div>
            <div className="stat-item">
              <Clock className="stat-icon" />
              <h3>4+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <Heart className="stat-icon" />
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <Award className="stat-icon" />
              <h3>50+</h3>
              <p>Fresh Items Daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-ingredients">
        <div className="container">
          <h2>Fresh Ingredients We Use</h2>
          <p className="ingredients-subtitle">Quality ingredients make the difference in every bite</p>
          <div className="ingredients-grid">
            <div className="ingredient-card">
              <div className="ingredient-photo">
                <img 
                  src="/images/Avocado.png" 
                  alt="Fresh Avocado" 
                  className="ingredient-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="ingredient-fallback">🥑</div>
              </div>
              <div className="ingredient-info">
                <h3>Avocado</h3>
                <p>Hand-selected and freshly mashed each morning for creamy, nutritious flavor.</p>
              </div>
            </div>
            <div className="ingredient-card">
              <div className="ingredient-photo">
                <img 
                  src="/images/Grass Jelly.png" 
                  alt="Fresh Grass Jelly" 
                  className="ingredient-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="ingredient-fallback">🍃</div>
              </div>
              <div className="ingredient-info">
                <h3>Grass Jelly</h3>
                <p>Prepared daily, chilled to perfection for a refreshing, healthy treat.</p>
              </div>
            </div>
            <div className="ingredient-card">
              <div className="ingredient-photo">
                <img 
                  src="/images/Jackfruit.png" 
                  alt="Fresh Jackfruit" 
                  className="ingredient-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="ingredient-fallback">🍈</div>
              </div>
              <div className="ingredient-info">
                <h3>Jackfruit</h3>
                <p>Peeled and portioned fresh every day for a sweet, fiber-rich boost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
