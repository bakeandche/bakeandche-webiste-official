// Application constants
export const APP_CONFIG = {
  name: 'BNC Website',
  version: '1.0.0',
  url: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  environment: import.meta.env.VITE_NODE_ENV || 'development',
}

export const API_ENDPOINTS = {
  // Add your API endpoints here
  // Example:
  // users: '/api/users',
  // auth: '/api/auth',
}

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
}
