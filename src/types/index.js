// Type definitions for the BNC Website application

// Store location types
export const StoreLocation = {
  id: Number,
  name: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  phone: String,
  coordinates: [Number, Number], // [longitude, latitude]
  hours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  },
  services: {
    pickup: Boolean,
    delivery: Boolean,
    dineIn: Boolean
  },
  features: [String],
  distance: Number || null
}

// Menu item types
export const MenuItem = {
  name: String,
  price: Number,
  description: String,
  popular: Boolean || false
}

// Menu category types
export const MenuCategory = {
  name: String,
  type: String || null, // 'custom', 'preselect', or null
  items: [MenuItem]
}

// Reward level types
export const RewardLevel = {
  level: String,
  icon: Object, // React component
  points: String,
  benefits: [String]
}

// Job opening types
export const JobOpening = {
  title: String,
  type: String,
  location: String,
  description: String,
  requirements: [String],
  benefits: [String]
}

// Contact form types
export const ContactForm = {
  firstName: String,
  lastName: String,
  email: String,
  phone: String || null,
  subject: String,
  message: String,
  newsletter: Boolean || false
}

// Feature types
export const Feature = {
  title: String,
  description: String,
  image: String
}

// Ingredient types
export const Ingredient = {
  name: String,
  description: String,
  image: String
}


