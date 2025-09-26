// No imports needed for this component

export function Features() {
  const features = [
    {
      title: "SPECIAL",
      description: "CHÈ ĐẶC BIỆT",
      image: "SPECIAL.png"
    },
    {
      title: "PANDAN GRASS JELLY",
      description: "SƯƠNG SÁO BÁNH LỌT",
      image: "Pandan Grassjelly.png"
    },
    {
      title: "AVOCADO",
      description: "CHÈ BƠ",
      image: "Avocado Dessert.png"
    },
    {
      title: "THREE COLORS",
      description: "CHÈ BA MÀU",
      image: "Three color dessert.png"
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>Most Favorite</h2>
          <p>Discover what makes our bakery special and why our customers keep coming back</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-image">
                {index === 0 && (
                  <div className="special-badge">
                    <span>Special</span>
                  </div>
                )}
                <img 
                  src={`/images/${feature.image}`}
                  alt={feature.title}
                  className="feature-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="feature-image-placeholder" style={{display: 'none'}}>
                  <div className="placeholder-content">
                    <span className="placeholder-icon">📸</span>
                    <span className="placeholder-text">Image Placeholder</span>
                  </div>
                </div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="features-actions">
          <button 
            className="see-menu-btn"
            onClick={() => window.location.href = '/menu'}
          >
            See Menu
          </button>
        </div>
      </div>
    </section>
  )
}
