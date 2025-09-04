import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export function Location() {
  return (
    <div className="location-page">
      <div className="hero-section">
        <div className="container">
          <h1>Visit Us</h1>
          <p className="hero-subtitle">Find our cozy bakery in the heart of the city</p>
        </div>
      </div>

      <div className="container">
        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <MapPin className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>123 Baker Street<br />
                Downtown District<br />
                City, State 12345</p>
              </div>
            </div>

            <div className="info-card">
              <Clock className="info-icon" />
              <div>
                <h3>Hours</h3>
                <div className="hours">
                  <div className="hours-row">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span>Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <Phone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>(555) 123-BAKE</p>
                <p>(555) 123-2253</p>
              </div>
            </div>

            <div className="info-card">
              <Mail className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>hello@bakeandche.com</p>
                <p>orders@bakeandche.com</p>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <div className="map-content">
                <MapPin className="map-icon" />
                <p>Interactive Map</p>
                <p>123 Baker Street, Downtown District</p>
                <button className="directions-btn">Get Directions</button>
              </div>
            </div>
          </div>
        </div>

        <section className="parking-section">
          <h2>Parking & Accessibility</h2>
          <div className="parking-info">
            <div className="parking-item">
              <h3>🅿️ Parking</h3>
              <p>Free street parking available on Baker Street and surrounding blocks. Metered parking is free after 6 PM on weekdays and all day Sunday.</p>
            </div>
            <div className="parking-item">
              <h3>♿ Accessibility</h3>
              <p>Our bakery is fully wheelchair accessible with a ramp entrance and accessible restrooms. We're committed to serving all members of our community.</p>
            </div>
            <div className="parking-item">
              <h3>🚌 Public Transit</h3>
              <p>Located 2 blocks from the Downtown Metro Station. Bus routes 15, 23, and 45 stop directly in front of our store.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
