// Map service utilities for store locator functionality

/**
 * Initialize Mapbox map with proper configuration
 * @param {HTMLElement} container - Map container element
 * @param {string} token - Mapbox access token
 * @param {Object} options - Map configuration options
 * @returns {Object} Mapbox map instance
 */
export const initializeMap = (container, token, options = {}) => {
  const defaultOptions = {
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-117.9143, 33.7175], // Orange County center
    zoom: 10,
    antialias: true,
    preserveDrawingBuffer: true
  }

  const mapOptions = { ...defaultOptions, ...options }
  
  return new mapboxgl.Map({
    container,
    ...mapOptions
  })
}

/**
 * Add store markers to map
 * @param {Object} map - Mapbox map instance
 * @param {Array} stores - Array of store locations
 * @param {Function} onStoreSelect - Callback for store selection
 * @returns {Array} Array of marker instances
 */
export const addStoreMarkers = (map, stores, onStoreSelect) => {
  const markers = []
  
  stores.forEach((store, index) => {
    const [lng, lat] = store.coordinates
    
    // Create custom marker element
    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    markerElement.style.cursor = 'pointer'
    markerElement.innerHTML = createMarkerHTML()
    
    // Create popup content
    const popupContent = createPopupHTML(store)
    
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
      .addTo(map)
    
    // Add click event
    markerElement.addEventListener('click', () => {
      onStoreSelect(store)
    })
    
    markers.push(marker)
  })
  
  return markers
}

/**
 * Create marker HTML
 * @returns {string} HTML string for marker
 */
const createMarkerHTML = () => {
  return `
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
}

/**
 * Create popup HTML for store
 * @param {Object} store - Store location object
 * @returns {string} HTML string for popup
 */
const createPopupHTML = (store) => {
  return `
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
}

/**
 * Fit map bounds to show all stores
 * @param {Object} map - Mapbox map instance
 * @param {Array} stores - Array of store locations
 */
export const fitMapToStores = (map, stores) => {
  const bounds = new mapboxgl.LngLatBounds()
  stores.forEach(store => {
    bounds.extend(store.coordinates)
  })
  
  map.fitBounds(bounds, {
    padding: 20,
    maxZoom: 11,
    duration: 1000
  })
}


