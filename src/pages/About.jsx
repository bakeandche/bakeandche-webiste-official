import { MapPin, Clock, Users, Heart, Award, Star, Coffee, Cake } from 'lucide-react'

export function About() {
  return (
    <div className="about-page">
      {/* Hero Section with Pattern Background */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle-line"></div>
              <p className="hero-subtitle">OUR STORY</p>
              <h1>FROM <span className="highlight">VIETNAM</span> TO CALIFORNIA</h1>
              <p className="hero-description">
                A journey of passion, tradition, and authentic Vietnamese flavors that found a home in the heart of California.
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2023</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Locations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Our Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="section-header">
              <h2>Our Journey</h2>
              <p className="section-subtitle">From Dreams to Reality</p>
            </div>
            <div className="story-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <MapPin className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h3>2023 - The Beginning</h3>
                  <p>In Westminster, California, Bake & Che opened its doors, bringing authentic Vietnamese desserts to the community. Founded by Co Huong, a passionate woman with deep roots in Vietnamese culinary traditions.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Heart className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h3>Cultural Bridge</h3>
                  <p>Originally from Vietnam, Co Huong brought her love for Vietnamese desserts to California, creating a bridge between her heritage and her new community through the universal language of food.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Award className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h3>2024 - Expansion</h3>
                  <p>Bake & Che expanded to Garden Grove, demonstrating the growing love for authentic Vietnamese flavors. This expansion represents our commitment to sharing Vietnamese culture across California.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="story-visual">
            <div className="story-image-container">
              <div className="image-frame">
                <img 
                  src="/images/welcome-image.png" 
                  alt="Bake & Che Story" 
                  className="story-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="placeholder-image" style={{display: 'none'}}>
                  <Cake className="placeholder-icon" />
                  <span>Our Story</span>
                </div>
              </div>
              <div className="image-badge">
                <Star className="badge-icon" />
                <span>Authentic Vietnamese</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="section-subtitle">What Drives Us Every Day</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-container">
                <Heart className="value-icon" />
              </div>
              <h3>Cultural Heritage</h3>
              <p>We honor Vietnamese traditions while sharing authentic flavors with our California community, preserving the essence of Vietnamese culinary culture.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-container">
                <Users className="value-icon" />
              </div>
              <h3>Community Connection</h3>
              <p>Bringing people together through the universal language of delicious Vietnamese desserts, creating lasting memories and connections.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-container">
                <Clock className="value-icon" />
              </div>
              <h3>Fresh & Traditional</h3>
              <p>Using fresh, local ingredients to create authentic Vietnamese treats with traditional recipes, ensuring quality in every bite.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-container">
                <MapPin className="value-icon" />
              </div>
              <h3>Growing Presence</h3>
              <p>From Westminster to Garden Grove, we're expanding to share Vietnamese culture across California, one dessert at a time.</p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="founder-section">
          <div className="founder-content">
            <div className="founder-image">
              <div className="founder-photo-container">
                <div className="founder-photo">
                  <div className="photo-placeholder">
                    <Users className="photo-icon" />
                  </div>
                </div>
                <div className="founder-badge">
                  <Award className="badge-icon" />
                  <span>Founder</span>
                </div>
              </div>
            </div>
            <div className="founder-info">
              <div className="founder-header">
                <h2>Meet Our Founder</h2>
                <p className="founder-title">Co Huong</p>
                <p className="founder-role">Founder & Owner</p>
              </div>
              <div className="founder-story">
                <p>
                  "My journey began with a simple dream: to share the authentic flavors of Vietnam with my new community in California. 
                  Every recipe tells a story of my heritage, every ingredient carries the love of my homeland."
                </p>
                <p>
                  Co Huong's passion for Vietnamese desserts and her commitment to authenticity has made Bake & Che a beloved 
                  destination for those seeking genuine Vietnamese flavors in California.
                </p>
              </div>
              <div className="founder-achievements">
                <div className="achievement-item">
                  <Coffee className="achievement-icon" />
                  <span>Traditional Recipes</span>
                </div>
                <div className="achievement-item">
                  <Star className="achievement-icon" />
                  <span>Community Love</span>
                </div>
                <div className="achievement-item">
                  <MapPin className="achievement-icon" />
                  <span>Growing Legacy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Experience the Taste of Vietnam</h2>
            <p>Join us on this delicious journey and discover the authentic flavors that have made Bake & Che a California favorite.</p>
            <div className="cta-buttons">
              <a href="/menu" className="cta-button primary">
                <Cake className="btn-icon" />
                View Our Menu
              </a>
              <a href="/location" className="cta-button secondary">
                <MapPin className="btn-icon" />
                Find Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
