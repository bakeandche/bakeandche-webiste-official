import { MapPin, Clock, Phone, Mail, Car, Users, Wifi } from 'lucide-react'
import { StoreLocator } from '../components/features/StoreLocator'

export function Location() {
  return (
    <div className="location-page">
      <div className="hero-section small-banner">
        <div className="container">
          <h1>Find a Bake & Che Near You</h1>
          <p className="hero-subtitle">Discover our locations across Orange County</p>
        </div>
      </div>

      {/* Store Locator Component */}
      <StoreLocator />

      <div className="container">


      </div>
    </div>
  )
}
