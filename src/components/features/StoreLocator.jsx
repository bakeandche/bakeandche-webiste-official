import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, MapPin, Clock, Phone, X, RotateCcw } from 'lucide-react'
// Database import removed for local mode
import { calculateDistance, formatDistance } from '../../constants/stores'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Set Mapbox access token
const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoieXBoaWNoZG9rIiwiYSI6ImNtZTdod2d1ODA0cGMya3E1aGNocTBybHEifQ.Za6NqTZM3dkO-s9ntHmmug'
mapboxgl.accessToken = mapboxToken

// Validate token
if (!mapboxToken || mapboxToken === 'your_mapbox_access_token_here') {
  console.error('Mapbox token not configured. Please set VITE_MAPBOX_TOKEN in your .env file')
}

// Check if Mapbox is available
if (typeof mapboxgl === 'undefined') {
  console.error('Mapbox GL JS is not loaded')
}

console.log('Mapbox token set:', mapboxToken ? 'Yes' : 'No')

export function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('')
  const [userLocation, setUserLocation] = useState(null)
  const [filteredStores, setFilteredStores] = useState([])
  const [selectedStore, setSelectedStore] = useState(null)
  const [mapError, setMapError] = useState(null)
  const [loading, setLoading] = useState(true)
  const mapContainer = useRef(null)
  const map = useRef(null)
  const markers = useRef([])

  // Initialize Mapbox map (Desktop only)
  useEffect(() => {
    console.log('Map initialization effect running...')
    console.log('Window width:', window.innerWidth)
    console.log('Map container:', mapContainer.current)
    console.log('Mapbox token:', mapboxgl.accessToken ? 'Set' : 'Not set')
    
    // Only initialize on desktop screens
    if (window.innerWidth < 1025) {
      console.log('Skipping map init - mobile screen')
      return
    }
    
    if (map.current) {
      console.log('Map already initialized')
      return // Initialize map only once
    }
    
    if (!mapContainer.current) {
      console.log('Map container not ready')
      return // Wait for container to be available
    }

    // Small delay to ensure container is fully rendered
    const initMap = () => {
      try {
        console.log('Initializing map...')
        setMapError(null)
        
        // Double-check container is available and visible
        if (!mapContainer.current) {
          console.error('Map container not available')
          setMapError('Map container not available')
          return
        }
        
        console.log('Container dimensions:', {
          width: mapContainer.current.offsetWidth,
          height: mapContainer.current.offsetHeight,
          visible: mapContainer.current.offsetParent !== null
        })
        
        // Calculate bounds to fit all store locations
        const bounds = new mapboxgl.LngLatBounds()
        storeLocations.forEach(store => {
          bounds.extend(store.coordinates)
        })
        
        console.log('Store bounds:', bounds)

        // Initialize map with proper configuration
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [-117.9143, 33.7175], // Orange County center
          zoom: 10,
          antialias: true,
          preserveDrawingBuffer: true
        })
        
        console.log('Map instance created:', map.current)

        // Handle map errors
        map.current.on('error', (e) => {
          console.error('Map error:', e)
          setMapError(`Map error: ${e.error?.message || 'Unknown error'}`)
        })

        // Fit map to show all markers when map loads
        map.current.on('load', () => {
          console.log('Map loaded successfully')
          
          // Resize map to ensure proper rendering
          setTimeout(() => {
            if (map.current) {
              map.current.resize()
              console.log('Map resized')
            }
          }, 100)
          
          map.current.fitBounds(bounds, {
            padding: 20, // Minimal padding to fill the frame
            maxZoom: 11, // Zoom out more to show wider area
            duration: 1000 // Smooth animation
          })
          
          // Add markers after map is loaded
          addStoreMarkers()
        })

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
        
        // Add resize listener
        const handleResize = () => {
          if (map.current) {
            map.current.resize()
            console.log('Map resized on window resize')
          }
        }
        
        window.addEventListener('resize', handleResize)
        
        // Store resize handler for cleanup
        map.current._resizeHandler = handleResize
        
        console.log('Map initialization complete')

      } catch (error) {
        console.error('Error initializing map:', error)
        setMapError(`Failed to initialize map: ${error.message}`)
      }
    }

    // Initialize map with a small delay
    // Wait for container to have proper dimensions
    const waitForContainer = () => {
      if (mapContainer.current && 
          mapContainer.current.offsetWidth > 0 && 
          mapContainer.current.offsetHeight > 0) {
        initMap()
      } else {
        console.log('Waiting for container dimensions...')
        setTimeout(waitForContainer, 100)
      }
    }
    
    const timer = setTimeout(waitForContainer, 200)

    return () => {
      clearTimeout(timer)
      if (map.current) {
        console.log('Cleaning up map')
        
        // Remove resize listener
        if (map.current._resizeHandler) {
          window.removeEventListener('resize', map.current._resizeHandler)
        }
        
        map.current.remove()
        map.current = null
      }
    }
  }, [addStoreMarkers])

  // Add store markers to map
  const addStoreMarkers = useCallback(() => {
    console.log('Adding store markers...')
    if (!map.current) {
      console.log('No map instance available for markers')
      return
    }

    // Clear existing markers
    markers.current.forEach(marker => marker.remove())
    markers.current = []

    console.log('Adding markers for', storeLocations.length, 'stores')

    // Add markers for each store
    storeLocations.forEach((store, index) => {
      const [lng, lat] = store.coordinates
      console.log(`Adding marker ${index + 1}:`, store.name, 'at', [lng, lat])
      
      // Create custom marker element
      const markerElement = document.createElement('div')
      markerElement.className = 'custom-marker'
      markerElement.style.cursor = 'pointer'
      markerElement.innerHTML = `
        <div class="marker-pin" style="
          width: 30px;
          height: 30px;
          background: #91b33b;
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="transform: rotate(45deg);">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      `

      // Create popup content
      const popupContent = `
        <div style="padding: 10px; min-width: 200px;">
          <h4 style="margin: 0 0 8px 0; color: #91b33b; font-family: 'Bebas Neue', cursive; font-size: 1.2rem;">${store.name}</h4>
          <p style="margin: 0 0 5px 0; font-size: 0.9rem; color: #666;">
            <strong>📍</strong> ${store.address}
          </p>
          <p style="margin: 0 0 5px 0; font-size: 0.9rem; color: #666;">
            <strong>📞</strong> ${store.phone}
          </p>
          <p style="margin: 0 0 8px 0; font-size: 0.9rem; color: #666;">
            <strong>🕒</strong> ${store.hours.monday}
          </p>
          <div style="margin-top: 8px;">
            ${store.services.pickup ? '<span style="background: #91b33b; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; margin-right: 4px;">Pickup</span>' : ''}
            ${store.services.delivery ? '<span style="background: #91b33b; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; margin-right: 4px;">Delivery</span>' : ''}
            ${store.services.dineIn ? '<span style="background: #91b33b; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem;">Dine-In</span>' : ''}
          </div>
        </div>
      `

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(popupContent)

      // Create marker
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map.current)

      // Add click event
      markerElement.addEventListener('click', () => {
        handleStoreSelect(store)
      })

      markers.current.push(marker)
    })
    
    console.log('Markers added successfully:', markers.current.length)
  }, [])

  // Load store locations - using static data for local mode
  useEffect(() => {
    const loadStores = () => {
      try {
        // Use static store data for local development
        const staticStores = [
          {
            id: 1,
            name: "Bake & Che Downtown",
            address: "123 Baker Street",
            city: "Downtown",
            state: "CA",
            zipCode: "12345",
            phone: "(555) 123-BAKE",
            coordinates: [-117.9143, 33.7175],
            hours: {
              monday: "Mon-Fri: 6 AM - 8 PM"
            },
            services: {
              pickup: true,
              delivery: true,
              dineIn: true
            },
            features: ["Free WiFi", "Parking Available", "Wheelchair Accessible"],
            distance: null
          }
        ]
        setFilteredStores(staticStores)
      } catch (error) {
        console.error('Error loading stores:', error)
        setMapError('Failed to load store locations')
      } finally {
        setLoading(false)
      }
    }

    loadStores()
  }, [])

  // Get user location for distance calculation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords
          setUserLocation({ longitude, latitude })
        },
        (error) => {
          console.log('Geolocation not available:', error)
        }
      )
    }
  }, [])


  // Filter stores based on search query only
  useEffect(() => {
    let filtered = filteredStores.filter(store => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          store.name.toLowerCase().includes(query) ||
          store.address.toLowerCase().includes(query) ||
          store.city.toLowerCase().includes(query) ||
          store.zipCode.includes(query)
        )
      }
      
      return true
    })

    // Calculate distances if user location is available
    if (userLocation) {
      filtered = filtered.map(store => ({
        ...store,
        distance: calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          store.coordinates[1],
          store.coordinates[0]
        )
      })).sort((a, b) => a.distance - b.distance)
    }

    setFilteredStores(filtered)
  }, [searchQuery, userLocation, filteredStores])

  // Handle store selection
  const handleStoreSelect = (store) => {
    setSelectedStore(store)
    
    // Fly to selected store on map
    if (map.current) {
      const [lng, lat] = store.coordinates
      map.current.flyTo({
        center: [lng, lat],
        zoom: 15,
        duration: 1000
      })
    }
  }

  // Handle reset map - return to default view showing all stores
  const handleResetMap = () => {
    // Clear all selections and filters
    setSelectedStore(null)
    setSearchQuery('')
    
    // Reset map view to show all stores
    if (map.current) {
      // Calculate bounds to fit all store locations
      const bounds = new mapboxgl.LngLatBounds()
      filteredStores.forEach(store => {
        bounds.extend(store.coordinates)
      })
      
      // Fit map to show all markers with default view
      map.current.fitBounds(bounds, {
        padding: 20, // Minimal padding to fill the frame
        maxZoom: 11, // Zoom out more to show wider area
        duration: 1000 // Smooth animation
      })
      
      // Ensure map is properly centered and reset
      setTimeout(() => {
        if (map.current) {
          map.current.fitBounds(bounds, {
            padding: 20,
            maxZoom: 11,
            duration: 500
          })
        }
      }, 100)
    }
  }


  if (loading) {
    return (
      <div className="store-locator">
        <div className="store-locator-header">
          <h2>Find a Store Near You</h2>
          <p>Loading store locations...</p>
        </div>
      </div>
    )
  }

  if (mapError) {
    return (
      <div className="store-locator">
        <div className="store-locator-header">
          <h2>Find a Store Near You</h2>
          <p>Error: {mapError}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="store-locator">
      {/* Mobile/Tablet Layout - Fixed Group */}
      <div className="fixed-group">
        {/* Map Panel */}
        <div className="map-panel">
          <div className="simple-map">
            <div className="map-placeholder">
              <div className="map-content">
                <MapPin size={48} className="map-icon" />
                <h3>Store Locations</h3>
                <p>Interactive map available on desktop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Panel */}
        <div className="search-bar-panel">
          <div className="search-section">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search by city, address, or zip code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="clear-search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            {/* Reset Map Button */}
            <button 
              className="reset-map-btn"
              onClick={handleResetMap}
              title="Reset Map"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Professional Design */}
      <div className="locator-content">
        {/* Left Panel - Store List with Enhanced Design */}
        <div className="store-list-panel">
          <div className="panel-header">
            <h2>Our Locations</h2>
            <div className="store-count">
              {filteredStores.length} Store{filteredStores.length !== 1 ? 's' : ''} Found
            </div>
          </div>
          
          <div className="search-controls">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search by city, address, or zip code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="clear-search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <button 
              className="reset-map-btn"
              onClick={handleResetMap}
              title="Reset Map"
            >
              <RotateCcw size={20} />
            </button>
          </div>

          <div className="store-list">
            <div className="stores">
              {filteredStores.map(store => (
                <div
                  key={store.id}
                  className={`store-card ${selectedStore?.id === store.id ? 'selected' : ''}`}
                  onClick={() => handleStoreSelect(store)}
                >
                  <div className="store-header">
                    <h4>{store.name}</h4>
                    {store.distance && (
                      <span className="distance">{formatDistance(store.distance)}</span>
                    )}
                  </div>

                  <div className="store-details">
                    <div className="store-address">
                      <MapPin size={16} />
                      <span>{store.address}</span>
                    </div>

                    <div className="store-hours">
                      <Clock size={16} />
                      <span>{store.hours.monday}</span>
                    </div>

                    <div className="store-phone">
                      <Phone size={16} />
                      <span>{store.phone}</span>
                    </div>
                  </div>

                  <div className="store-services">
                    {store.services.pickup && <span className="service-tag pickup">Pickup</span>}
                    {store.services.delivery && <span className="service-tag delivery">Delivery</span>}
                    {store.services.dineIn && <span className="service-tag dine-in">Dine-In</span>}
                  </div>

                  <button className="order-now-btn">
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Map (Desktop: Mapbox, Mobile: Placeholder) */}
        <div className="map-panel">
          <div className="map-header">
            <h2>Interactive Map</h2>
            <p>Click on a location to view details</p>
          </div>
          
          <div className="simple-map">
            {/* Desktop: Real Mapbox Map */}
            <div ref={mapContainer} className="mapbox-container">
              {mapError && (
                <div className="map-error">
                  <MapPin size={48} className="map-icon" />
                  <h3>Map Loading Error</h3>
                  <p>{mapError}</p>
                </div>
              )}
              {!mapError && !map.current && (
                <div className="map-loading">
                  <MapPin size={48} className="map-icon" />
                  <h3>Loading Map...</h3>
                  <p>Please wait while the map loads</p>
                </div>
              )}
            </div>
            
            {/* Mobile: Placeholder Map - Only show on mobile/tablet */}
            <div className="map-placeholder">
              <div className="map-content">
                <MapPin size={48} className="map-icon" />
                <h3>Store Locations</h3>
                <p>Interactive map available on desktop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
