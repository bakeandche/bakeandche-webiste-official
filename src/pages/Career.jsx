import { useState } from 'react'
import { Users, Clock, MapPin, Send } from 'lucide-react'
// Database import removed for local mode

export function Career() {
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experienceLevel: '',
    coverLetter: '',
    availability: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Mock submission for local development
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We\'ll review it and get back to you soon.' })
      setApplicationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experienceLevel: '',
        coverLetter: '',
        availability: ''
      })
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit application. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  const jobOpenings = [
    {
      title: "Baker",
      type: "Full-time",
      location: "Downtown Location",
      description: "Join our baking team and help create delicious breads and pastries daily.",
      requirements: [
        "2+ years baking experience preferred",
        "Early morning availability (4 AM start)",
        "Passion for quality and attention to detail",
        "Ability to work in a fast-paced environment"
      ],
      benefits: ["Health insurance", "Paid time off", "Employee discount", "Growth opportunities"]
    },
    {
      title: "Barista",
      type: "Part-time",
      location: "Downtown Location", 
      description: "Serve our customers with excellent coffee and friendly service.",
      requirements: [
        "Customer service experience",
        "Coffee knowledge preferred",
        "Weekend availability required",
        "Positive attitude and team player"
      ],
      benefits: ["Flexible schedule", "Employee discount", "Tips", "Training provided"]
    },
    {
      title: "Store Manager",
      type: "Full-time",
      location: "Downtown Location",
      description: "Lead our team and ensure exceptional customer experience every day.",
      requirements: [
        "3+ years retail management experience",
        "Strong leadership and communication skills",
        "Food service experience preferred",
        "Availability for all shifts including weekends"
      ],
      benefits: ["Competitive salary", "Health insurance", "Paid time off", "Performance bonuses"]
    }
  ]

  return (
    <div className="career-page">
      <div className="hero-section">
        <div className="container">
          <h1>Join Our Team</h1>
          <p className="hero-subtitle">Be part of a passionate team that loves what we do</p>
        </div>
      </div>

      <div className="container">
        <section className="why-work-here">
          <h2>Why Work at Bake And Che?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Users className="benefit-icon" />
              <h3>Great Team</h3>
              <p>Work with passionate people who share your love for quality food and great service.</p>
            </div>
            <div className="benefit-card">
              <Clock className="benefit-icon" />
              <h3>Flexible Schedule</h3>
              <p>We work with you to create a schedule that fits your lifestyle and commitments.</p>
            </div>
            <div className="benefit-card">
              <MapPin className="benefit-icon" />
              <h3>Great Location</h3>
              <p>Located in the heart of downtown with easy access to public transportation.</p>
            </div>
            <div className="benefit-card">
              <Send className="benefit-icon" />
              <h3>Growth Opportunities</h3>
              <p>We believe in promoting from within and supporting your career development.</p>
            </div>
          </div>
        </section>

        <section className="open-positions">
          <h2>Current Openings</h2>
          <div className="jobs-list">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-location">{job.location}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                
                <div className="job-details">
                  <div className="requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        <section className="application-process">
          <h2>How to Apply</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Submit Application</h3>
              <p>Fill out our online application form or drop off your resume in person.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Initial Interview</h3>
              <p>We'll schedule a brief phone or in-person interview to learn more about you.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Working Interview</h3>
              <p>For most positions, we'll invite you for a paid working interview to see how you fit.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Welcome to the Team!</h3>
              <p>If it's a good fit, we'll extend an offer and welcome you to the Bake And Che family.</p>
            </div>
          </div>
        </section>

        <section className="application-form">
          <h2>Apply Now</h2>
          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          <form className="career-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={applicationData.firstName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={applicationData.lastName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={applicationData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={applicationData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="position">Position *</label>
                <select 
                  id="position" 
                  name="position" 
                  value={applicationData.position}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a position</option>
                  <option value="Baker">Baker</option>
                  <option value="Barista">Barista</option>
                  <option value="Store Manager">Store Manager</option>
                  <option value="Server">Server</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="experienceLevel">Experience Level</label>
                <select 
                  id="experienceLevel" 
                  name="experienceLevel" 
                  value={applicationData.experienceLevel}
                  onChange={handleInputChange}
                >
                  <option value="">Select experience level</option>
                  <option value="Entry-level">Entry-level</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="availability">Availability *</label>
              <select 
                id="availability" 
                name="availability" 
                value={applicationData.availability}
                onChange={handleInputChange}
                required
              >
                <option value="">Select availability</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Weekends only">Weekends only</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea 
                id="coverLetter" 
                name="coverLetter" 
                rows="5" 
                placeholder="Tell us why you'd like to work with us..."
                value={applicationData.coverLetter}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <Send className="btn-icon" />
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </section>

        <section className="contact-hr">
          <h2>Questions?</h2>
          <p>Have questions about working with us? We'd love to hear from you!</p>
          <div className="hr-contact">
            <p><strong>Email:</strong> careers@bakeandche.com</p>
            <p><strong>Phone:</strong> (555) 123-BAKE ext. 2</p>
            <p><strong>Visit us:</strong> Stop by and ask to speak with our manager</p>
          </div>
        </section>
      </div>
    </div>
  )
}
