import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Star, Clock, Heart, Award } from 'lucide-react'

export function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      
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
                  src="/src/assets/images/welcome/11.png" 
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
                  src="/src/assets/images/ingredients/Avocado.png" 
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
                  src="/src/assets/images/ingredients/Grass Jelly.png" 
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
                  src="/src/assets/images/ingredients/Jackfruit.png" 
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
