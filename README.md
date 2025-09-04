# Bake And Che Website

A modern bakery website built with React and Vite, featuring a beautiful design with a custom color system.

## Features

- ⚡ Fast development with Vite
- ⚛️ React 18 with modern hooks
- 🎨 Beautiful, responsive UI with Lucide React icons
- 📱 Mobile-first responsive design
- 🎯 Modern routing with React Router
- 🥖 Complete bakery website with 7 pages
- 🎨 Custom color system with brand colors
- 📝 Contact forms and interactive elements

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup Instructions

1. **Clone the repository** (if not already done)
   ```bash
   git clone <repository-url>
   cd BNC-WEBSITE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration** (Optional)
   - Copy `env.template` to `.env` if you need to customize settings:
     ```env
     VITE_APP_URL=http://localhost:3000
     VITE_NODE_ENV=development
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Pages

The website includes 7 complete pages:

1. **Home** - Hero section, features, testimonials, and company stats
2. **About Us** - Company story, values, and team information
3. **Location** - Store address, hours, parking, and accessibility info
4. **Menu** - Complete menu with categories, prices, and descriptions
5. **Career** - Job openings, benefits, and application process
6. **Reward** - Loyalty program with tiers and benefits
7. **Contact** - Contact form, FAQ, and social media links

## Color System

The website uses a carefully designed color palette:

- **Primary Green** (#91b33b) - Main brand color for headers, links, and primary elements
- **Accent Yellow** (#edb956) - Call-to-action buttons and highlights
- **Light Green** (#e8efda) - Background sections and subtle elements
- **Milk White** (#fdfcf9) - Clean backgrounds and card elements
- **Soft Black** (#2c2c2c) - Text and UI elements

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation with "Join Us" button
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Hero.jsx        # Bakery-themed hero section
│   └── Features.jsx    # Why choose us section
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with hero, features, stats, testimonials
│   ├── About.jsx       # About us page
│   ├── Location.jsx    # Location and contact info
│   ├── Menu.jsx        # Complete menu with categories
│   ├── Career.jsx      # Job listings and benefits
│   ├── Reward.jsx      # Loyalty program
│   └── Contact.jsx     # Contact form and FAQ
├── styles/             # CSS styles
│   ├── index.css       # Global styles
│   └── App.css         # Component styles with brand colors
├── App.jsx             # Main app with routing
└── main.jsx            # Application entry point
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_APP_URL` | Application URL (default: http://localhost:3000) | No |
| `VITE_NODE_ENV` | Environment (development/production) | No |

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **CSS3** - Styling with custom properties and responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.
