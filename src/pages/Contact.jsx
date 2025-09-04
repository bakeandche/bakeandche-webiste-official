import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <div className="contact-page">
      <div className="hero-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have a question, suggestion, or just want to say hello? We're here to help! 
              Reach out to us through any of the methods below, and we'll get back to you as soon as possible.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <MapPin className="contact-icon" />
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Baker Street<br />
                  Downtown District<br />
                  City, State 12345</p>
                </div>
              </div>

              <div className="contact-method">
                <Phone className="contact-icon" />
                <div>
                  <h3>Call Us</h3>
                  <p>(555) 123-BAKE<br />
                  (555) 123-2253</p>
                  <p className="hours-note">Mon-Fri: 6 AM - 8 PM<br />
                  Sat: 7 AM - 9 PM<br />
                  Sun: 8 AM - 6 PM</p>
                </div>
              </div>

              <div className="contact-method">
                <Mail className="contact-icon" />
                <div>
                  <h3>Email Us</h3>
                  <p>hello@bakeandche.com<br />
                  orders@bakeandche.com<br />
                  careers@bakeandche.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Custom Order</option>
                  <option value="catering">Catering</option>
                  <option value="feedback">Feedback</option>
                  <option value="career">Career Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <div className="form-group checkbox-group">
                <input type="checkbox" id="newsletter" name="newsletter" />
                <label htmlFor="newsletter">
                  I'd like to receive updates and special offers via email
                </label>
              </div>

              <button type="submit" className="submit-btn">
                <Send className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you take custom orders?</h3>
              <p>Yes! We love creating custom cakes, pastries, and catering orders. Please give us at least 24-48 hours notice for custom orders.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer catering services?</h3>
              <p>Absolutely! We provide catering for events, meetings, and special occasions. Contact us for a custom quote.</p>
            </div>
            <div className="faq-item">
              <h3>Are your products suitable for dietary restrictions?</h3>
              <p>We offer gluten-free and vegan options. Please let us know about any allergies or dietary restrictions when ordering.</p>
            </div>
            <div className="faq-item">
              <h3>Do you have parking available?</h3>
              <p>Yes, we have free street parking available on Baker Street and surrounding blocks. Metered parking is free after 6 PM on weekdays.</p>
            </div>
          </div>
        </section>

        <section className="social-section">
          <h2>Follow Us</h2>
          <p>Stay connected with us on social media for daily updates, behind-the-scenes content, and special offers!</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <MessageCircle className="social-icon" />
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link">
              <MessageCircle className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link">
              <MessageCircle className="social-icon" />
              <span>Twitter</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
