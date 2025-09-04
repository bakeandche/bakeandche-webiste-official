import { Users, Clock, MapPin, Send } from 'lucide-react'

export function Career() {
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
