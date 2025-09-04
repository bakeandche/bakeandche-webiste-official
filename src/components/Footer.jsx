import { Facebook, Instagram, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/src/assets/images/logo/Bake+&+Che.webp" 
                alt="Bake And Che" 
                className="footer-logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="footer-logo-text" style={{display: 'none'}}>🥖 Bake And Che</span>
            </div>
            <p>Building the future with innovative solutions.</p>
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Follow us on Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Follow us on Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Find us on Yelp">
                <MapPin size={24} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@bnc.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 BNC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
