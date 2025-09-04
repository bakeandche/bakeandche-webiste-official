import { MapPin, Clock, Users, Heart } from 'lucide-react'

export function About() {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="container">
          <h1>About Bake & Che</h1>
          <p className="hero-subtitle">A Taste of Vietnam in California</p>
        </div>
      </div>

      <div className="container">
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              In Westminster, California, there's a cozy spot called Bake & Che. It's not your average dessert shop; 
              it's a dream come true for Co Huong, a woman with a passion for food and heritage.
            </p>
            <p>
              Originally from Vietnam, Co Huong brought her love for Vietnamese desserts to California. She wanted 
              to share her culture's flavors with her new community.
            </p>
            <p>
              Bake & Che opened in 2023, bringing the tastes of Vietnam to Westminster. Using fresh, local ingredients, 
              Co Huong ensures each treat is made with traditional flavor.
            </p>
            <p>
              What makes Bake & Che special is its blend of tradition and innovation. Co Huong adapts recipes to suit 
              modern tastes while still honoring her roots.
            </p>
            <p>
              In 2024, Bake & Che expanded to Garden Grove, showing its growing popularity. It's not just a dessert shop; 
              it's a celebration of culture and a reminder of the joy food can bring.
            </p>
            <p>
              So, come on over to Bake & Che, and let your taste buds take a trip to Vietnam, one bite at a time.
            </p>
          </div>
          <div className="story-image">
            <div className="placeholder-image">🍰</div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <Heart className="value-icon" />
              <h3>Cultural Heritage</h3>
              <p>We honor Vietnamese traditions while sharing authentic flavors with our California community.</p>
            </div>
            <div className="value-card">
              <Users className="value-icon" />
              <h3>Community Connection</h3>
              <p>Bringing people together through the universal language of delicious Vietnamese desserts.</p>
            </div>
            <div className="value-card">
              <Clock className="value-icon" />
              <h3>Fresh & Traditional</h3>
              <p>Using fresh, local ingredients to create authentic Vietnamese treats with traditional recipes.</p>
            </div>
            <div className="value-card">
              <MapPin className="value-icon" />
              <h3>Growing Presence</h3>
              <p>From Westminster to Garden Grove, we're expanding to share Vietnamese culture across California.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Founder</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">👩‍🍳</div>
              <h3>Co Huong</h3>
              <p>Founder & Owner</p>
              <p>Passionate about sharing Vietnamese culture through authentic desserts, bringing the tastes of Vietnam to California.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
