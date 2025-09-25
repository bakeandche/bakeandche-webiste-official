import { Smartphone, Download } from 'lucide-react'

export function Reward() {
  return (
    <div className="reward-page">
      <div className="hero-section">
        <div className="container">
          <h1>Join the Bake and Che Rewards Program!</h1>
          <p className="hero-subtitle">Earn 1 Point for Every $1 Spent – Start Saving Today!</p>
          <p className="hero-description">Join Bake and Che's FREE Rewards Program, when you order below. Earn 1 Point for every $1 Spent. Redeem points for FREE desserts!</p>
        </div>
      </div>

      <div className="container">
        <section className="app-download">
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
        </section>
      </div>

    </div>
  )
}
