// Store locations data for Bake & Che
export const storeLocations = [
  {
    id: 1,
    name: "Bake & Che - Westminster",
    address: "12345 Bolsa Ave, Westminster, CA 92683",
    city: "Westminster",
    state: "CA",
    zipCode: "92683",
    phone: "(714) 555-0123",
    coordinates: [-117.9937, 33.7503], // [longitude, latitude]
    hours: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM", 
      wednesday: "6:00 AM - 8:00 PM",
      thursday: "6:00 AM - 8:00 PM",
      friday: "6:00 AM - 9:00 PM",
      saturday: "7:00 AM - 9:00 PM",
      sunday: "8:00 AM - 6:00 PM"
    },
    services: {
      pickup: true,
      delivery: true,
      dineIn: true
    },
    features: ["Free WiFi", "Parking Available", "Wheelchair Accessible"],
    distance: null // Will be calculated dynamically
  },
  {
    id: 2,
    name: "Bake & Che - Garden Grove",
    address: "9876 Garden Grove Blvd, Garden Grove, CA 92840",
    city: "Garden Grove", 
    state: "CA",
    zipCode: "92840",
    phone: "(714) 555-0456",
    coordinates: [-117.9403, 33.7743],
    hours: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM",
      wednesday: "6:00 AM - 8:00 PM", 
      thursday: "6:00 AM - 8:00 PM",
      friday: "6:00 AM - 9:00 PM",
      saturday: "7:00 AM - 9:00 PM",
      sunday: "8:00 AM - 6:00 PM"
    },
    services: {
      pickup: true,
      delivery: true,
      dineIn: true
    },
    features: ["Free WiFi", "Parking Available", "Wheelchair Accessible"],
    distance: null
  },
  {
    id: 3,
    name: "Bake & Che - Huntington Beach",
    address: "5432 Main St, Huntington Beach, CA 92648",
    city: "Huntington Beach",
    state: "CA", 
    zipCode: "92648",
    phone: "(714) 555-0789",
    coordinates: [-118.0001, 33.6595],
    hours: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM",
      wednesday: "6:00 AM - 8:00 PM",
      thursday: "6:00 AM - 8:00 PM", 
      friday: "6:00 AM - 9:00 PM",
      saturday: "7:00 AM - 9:00 PM",
      sunday: "8:00 AM - 6:00 PM"
    },
    services: {
      pickup: true,
      delivery: true,
      dineIn: true
    },
    features: ["Free WiFi", "Parking Available", "Beach View", "Wheelchair Accessible"],
    distance: null
  },
  {
    id: 4,
    name: "Bake & Che - Costa Mesa",
    address: "2100 Harbor Blvd, Costa Mesa, CA 92627",
    city: "Costa Mesa",
    state: "CA",
    zipCode: "92627", 
    phone: "(714) 555-0321",
    coordinates: [-117.9189, 33.6411],
    hours: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM",
      wednesday: "6:00 AM - 8:00 PM",
      thursday: "6:00 AM - 8:00 PM",
      friday: "6:00 AM - 9:00 PM", 
      saturday: "7:00 AM - 9:00 PM",
      sunday: "8:00 AM - 6:00 PM"
    },
    services: {
      pickup: true,
      delivery: true,
      dineIn: true
    },
    features: ["Free WiFi", "Parking Available", "Wheelchair Accessible", "Near South Coast Plaza"],
    distance: null
  }
];

// Service types for filtering
export const serviceTypes = {
  PICKUP: 'pickup',
  DELIVERY: 'delivery',
  DINE_IN: 'dineIn'
};

// Helper function to calculate distance between two coordinates
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Helper function to format distance
export const formatDistance = (distance) => {
  if (distance < 1) {
    return `${Math.round(distance * 10) / 10} mi`;
  }
  return `${Math.round(distance * 10) / 10} mi`;
};
