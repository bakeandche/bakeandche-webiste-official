import { Gift, Star, Coffee, Users, Crown, Zap } from 'lucide-react'

export function Reward() {
  const rewards = [
    {
      level: "Bronze",
      icon: <Star className="reward-icon bronze" />,
      points: "0-99",
      benefits: [
        "5% off all purchases",
        "Birthday surprise",
        "Monthly newsletter"
      ]
    },
    {
      level: "Silver", 
      icon: <Coffee className="reward-icon silver" />,
      points: "100-299",
      benefits: [
        "10% off all purchases",
        "Free coffee with any pastry",
        "Early access to new items",
        "Birthday surprise"
      ]
    },
    {
      level: "Gold",
      icon: <Crown className="reward-icon gold" />,
      points: "300-499", 
      benefits: [
        "15% off all purchases",
        "Free pastry with any coffee",
        "Exclusive member events",
        "Priority custom orders",
        "Birthday surprise"
      ]
    },
    {
      level: "Platinum",
      icon: <Zap className="reward-icon platinum" />,
      points: "500+",
      benefits: [
        "20% off all purchases",
        "Free coffee and pastry combo",
        "VIP member events",
        "Free custom cake (up to $50)",
        "Exclusive merchandise",
        "Birthday surprise"
      ]
    }
  ]

  const waysToEarn = [
    { action: "Make a purchase", points: "1 point per $1 spent" },
    { action: "Visit us 5 times in a month", points: "50 bonus points" },
    { action: "Refer a friend", points: "100 points" },
    { action: "Follow us on social media", points: "25 points" },
    { action: "Leave a review", points: "50 points" },
    { action: "Share a photo", points: "25 points" }
  ]

  return (
    <div className="reward-page">
      <div className="hero-section">
        <div className="container">
          <h1>Bake And Che Rewards</h1>
          <p className="hero-subtitle">Earn points with every visit and unlock amazing benefits</p>
        </div>
      </div>

      <div className="container">
        <section className="rewards-intro">
          <div className="intro-content">
            <h2>Join Our Loyalty Program</h2>
            <p>
              The more you visit Bake And Che, the more you save! Our rewards program 
              is designed to thank our loyal customers with exclusive benefits, discounts, 
              and special treats.
            </p>
            <div className="signup-cta">
              <button className="join-btn primary">Join Now - It's Free!</button>
              <p className="signup-note">Already a member? <a href="#login">Sign in here</a></p>
            </div>
          </div>
        </section>

        <section className="rewards-levels">
          <h2>Reward Levels</h2>
          <div className="levels-grid">
            {rewards.map((reward, index) => (
              <div key={index} className="level-card">
                <div className="level-header">
                  {reward.icon}
                  <h3>{reward.level}</h3>
                  <p className="points-range">{reward.points} points</p>
                </div>
                <div className="level-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {reward.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="earn-points">
          <h2>Ways to Earn Points</h2>
          <div className="earn-grid">
            {waysToEarn.map((way, index) => (
              <div key={index} className="earn-item">
                <div className="earn-action">{way.action}</div>
                <div className="earn-points">{way.points}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="special-offers">
          <h2>Special Member Offers</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <Gift className="offer-icon" />
              <h3>Welcome Bonus</h3>
              <p>Get 50 points just for signing up!</p>
            </div>
            <div className="offer-card">
              <Users className="offer-icon" />
              <h3>Friend Referral</h3>
              <p>Earn 100 points when your friend joins</p>
            </div>
            <div className="offer-card">
              <Star className="offer-icon" />
              <h3>Double Points Day</h3>
              <p>Every Tuesday, earn double points on all purchases</p>
            </div>
            <div className="offer-card">
              <Coffee className="offer-icon" />
              <h3>Birthday Treat</h3>
              <p>Free pastry and coffee on your birthday</p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your free account online or in-store</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Earn Points</h3>
              <p>Make purchases and complete activities to earn points</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Redeem Rewards</h3>
              <p>Use your points for discounts and free items</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Level Up</h3>
              <p>Reach higher tiers for even better benefits</p>
            </div>
          </div>
        </section>

        <section className="member-perks">
          <h2>Exclusive Member Perks</h2>
          <div className="perks-list">
            <div className="perk-item">
              <h3>🎂 Free Birthday Treat</h3>
              <p>Enjoy a complimentary pastry and coffee on your special day</p>
            </div>
            <div className="perk-item">
              <h3>📱 Mobile App</h3>
              <p>Track your points, view offers, and order ahead with our app</p>
            </div>
            <div className="perk-item">
              <h3>🎉 Member Events</h3>
              <p>Exclusive tastings, baking classes, and special events</p>
            </div>
            <div className="perk-item">
              <h3>⚡ Priority Service</h3>
              <p>Skip the line with our express member checkout</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
