# Mapbox Setup Instructions

## Getting Your Mapbox API Key

1. **Create a Mapbox Account**
   - Go to [https://account.mapbox.com/](https://account.mapbox.com/)
   - Sign up for a free account (no credit card required)

2. **Get Your Access Token**
   - Once logged in, go to [https://account.mapbox.com/access-tokens/](https://account.mapbox.com/access-tokens/)
   - Copy your default public token (starts with `pk.`)

3. **Configure Your Environment**
   - Copy `env.template` to `.env` in your project root
   - Replace `your_mapbox_access_token_here` with your actual Mapbox token
   - Example: `VITE_MAPBOX_TOKEN=pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImNsZXhhbXBsZSJ9.example`

## Features Included

✅ **Interactive Map** - Powered by Mapbox GL JS
✅ **Store Search** - Search by city, address, or zip code
✅ **Service Filtering** - Filter by Pickup, Delivery, Drive-Thru, or Dine-In
✅ **Location Services** - Get directions and find stores near you
✅ **Multiple Locations** - 4 Bake & Che locations across Orange County
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Real-time Distance** - Shows distance from your location
✅ **Store Details** - Hours, phone, services, and features

## Store Locations

1. **Westminster** - 12345 Bolsa Ave, Westminster, CA 92683
2. **Garden Grove** - 9876 Garden Grove Blvd, Garden Grove, CA 92840
3. **Huntington Beach** - 5432 Main St, Huntington Beach, CA 92648
4. **Costa Mesa** - 2100 Harbor Blvd, Costa Mesa, CA 92627

## Usage

The store locator is now integrated into the Location page. Users can:
- Search for stores by location
- Filter by service type (pickup, delivery, etc.)
- View store details and hours
- Get directions to any location
- See distance from their current location

## Troubleshooting

If the map doesn't load:
1. Check that your Mapbox token is correctly set in `.env`
2. Ensure the token starts with `pk.`
3. Verify the token is active in your Mapbox account
4. Check the browser console for any error messages

## Free Tier Limits

Mapbox free tier includes:
- 50,000 map loads per month
- 100,000 geocoding requests per month
- Perfect for small to medium websites

For production use with high traffic, consider upgrading to a paid plan.
