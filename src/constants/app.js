// Application constants and configuration
export const APP_CONFIG = {
  name: 'Bake & Che',
  fullName: 'Bake & Che Vietnamese Desserts',
  version: '1.0.0',
  url: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  environment: import.meta.env.VITE_NODE_ENV || 'development',
  description: 'Authentic Vietnamese desserts and bakery in Orange County, California',
  keywords: ['Vietnamese desserts', 'bakery', 'Orange County', 'Westminster', 'Garden Grove', 'chè', 'bánh'],
  author: 'Bake & Che Team',
  contact: {
    email: 'hello@bakeandche.com',
    phone: '(714) 555-0123',
    address: '12345 Bolsa Ave, Westminster, CA 92683'
  }
}

// API Configuration
export const API_ENDPOINTS = {
  // Future API endpoints can be added here
  // Example:
  // stores: '/api/stores',
  // menu: '/api/menu',
  // orders: '/api/orders',
  // contact: '/api/contact'
}

// Application Routes
export const ROUTES = {
  home: '/',
  about: '/about',
  location: '/location',
  menu: '/menu',
  career: '/career',
  reward: '/reward',
  contact: '/contact'
}

// Business Information
export const BUSINESS_INFO = {
  founded: 2023,
  locations: ['Westminster', 'Garden Grove', 'Huntington Beach', 'Costa Mesa'],
  specialties: ['Vietnamese Desserts', 'Traditional Chè', 'Fresh Baked Goods', 'Custom Orders'],
  hours: {
    weekdays: '6:00 AM - 8:00 PM',
    friday: '6:00 AM - 9:00 PM',
    saturday: '7:00 AM - 9:00 PM',
    sunday: '8:00 AM - 6:00 PM'
  }
}

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/bakeandche',
  instagram: 'https://instagram.com/bakeandche',
  yelp: 'https://yelp.com/biz/bake-and-che-westminster'
}

// Map Configuration
export const MAP_CONFIG = {
  defaultCenter: [-117.9143, 33.7175], // Orange County center
  defaultZoom: 10,
  style: 'mapbox://styles/mapbox/streets-v12'
}

