import { Hero } from '../components/features/Hero'
import { Features } from '../components/features/Features'
import { Star, Clock, Heart, Award, ArrowRight, ShoppingCart, Smartphone, Download } from 'lucide-react'

export function Home() {
  return (
    <div className="home">
      <section id="home-video-hero" className="home-video-cta">
        <div className="video-background">
          <video 
            className="background-video"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/0925 BC BRANDING - TV Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay-dark"></div>
        </div>
        <div className="video-content">
          <div className="container">
            <p className="hero-subtitle">WELCOME TO BAKE AND CHE</p>
            <div className="hero-subtitle-line"></div>
            <h2>INDULGE IN EXQUISITE <span className="highlight">TASTE</span> WITH US</h2>
          </div>
        </div>
      </section>

      <Hero />
      <Features />
      
      <section id="home-about-story" className="home-about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>MUST TRY FLANDAN CHEESECAKE</h2>
              <p>
                We're passionate about creating the most delicious, fresh-baked goods 
                that bring joy to every bite. From our artisan breads to our decadent 
                pastries, everything is made with love and the finest ingredients.
              </p>
              <p>
                Visit us today and experience the difference that fresh, quality baking makes. 
                We can't wait to share our passion with you!
              </p>
              <button className="join-btn">
                <ShoppingCart size={18} />
                Order Now
              </button>
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

      <hr className="section-divider" />

      <section id="home-app-download" className="app-download">
        <div className="container">
          <div className="download-content">
            <div className="download-text">
              <h2>Download Our App</h2>
              <p>Get the full experience with our mobile app. Track your rewards, place orders, and enjoy exclusive app-only features!</p>
            </div>
            <div className="download-buttons">
              <a href="#" className="download-btn android" target="_blank" rel="noopener noreferrer">
                <Smartphone className="download-icon" />
                <div className="download-info">
                  <span className="download-label">Download for</span>
                  <span className="download-platform">Android</span>
                </div>
                <Download className="download-arrow" />
              </a>
              <a href="#" className="download-btn ios" target="_blank" rel="noopener noreferrer">
                <Smartphone className="download-icon" />
                <div className="download-info">
                  <span className="download-label">Download for</span>
                  <span className="download-platform">iOS</span>
                </div>
                <Download className="download-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider thick" />

      <section id="home-fresh-ingredients" className="home-ingredients">
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

      <hr className="section-divider dotted" />
    </div>
  )
}
