import { useState, useEffect } from 'react'
import { Star, Clock, DollarSign } from 'lucide-react'
// Database import removed for local mode

export function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMenuItems = () => {
      try {
        // Static menu data for local development
        const staticMenuItems = [
          {
            id: 1,
            name: "Avocado Dessert (Chè Bơ)",
            category: "DESSERT | CHÈ",
            price: 4.99,
            description: "Creamy avocado with coconut milk and jelly",
            is_featured: true,
            image_url: "/images/Avocado Dessert.png",
            ingredients: ["Avocado", "Coconut Milk", "Jelly"],
            allergens: ["Coconut"]
          },
          {
            id: 2,
            name: "Grass Jelly (Rau Câu)",
            category: "JELLY | RAU CÂU",
            price: 3.99,
            description: "Traditional Vietnamese grass jelly dessert",
            is_featured: false,
            image_url: "/images/Grass Jelly.png",
            ingredients: ["Grass Jelly", "Coconut Milk", "Ice"],
            allergens: []
          },
          {
            id: 10,
            name: "Pandan Jelly (Rau Câu Lá Dứa)",
            category: "JELLY | RAU CÂU",
            price: 4.25,
            description: "Fragrant pandan jelly with coconut milk",
            is_featured: false,
            image_url: "/images/Pandan Jelly.png",
            ingredients: ["Pandan Jelly", "Coconut Milk", "Pandan Leaves"],
            allergens: []
          },
          {
            id: 11,
            name: "Coconut Jelly (Rau Câu Dừa)",
            category: "JELLY | RAU CÂU",
            price: 4.50,
            description: "Creamy coconut jelly dessert",
            is_featured: true,
            image_url: "/images/Coconut Jelly.png",
            ingredients: ["Coconut Jelly", "Coconut Milk", "Fresh Coconut"],
            allergens: ["Coconut"]
          },
          {
            id: 12,
            name: "Mixed Jelly (Rau Câu Thập Cẩm)",
            category: "JELLY | RAU CÂU",
            price: 5.25,
            description: "Mixed jelly with various flavors and toppings",
            is_featured: false,
            image_url: "/images/Mixed Jelly.png",
            ingredients: ["Mixed Jelly", "Coconut Milk", "Fruit", "Tapioca"],
            allergens: []
          },
          {
            id: 3,
            name: "Three Color Dessert (Chè Ba Màu)",
            category: "DESSERT | CHÈ",
            price: 5.99,
            description: "Colorful three-layer Vietnamese dessert",
            is_featured: false,
            image_url: "/images/Three color dessert.png",
            ingredients: ["Red Bean", "Green Bean", "Yellow Bean", "Coconut Milk"],
            allergens: []
          },
          {
            id: 4,
            name: "Pandan Grass Jelly (Chè Rau Câu Lá Dứa)",
            category: "DESSERT | CHÈ",
            price: 4.50,
            description: "Fragrant pandan grass jelly with coconut milk",
            is_featured: false,
            image_url: "/images/Pandan Grassjelly.png",
            ingredients: ["Pandan Grass Jelly", "Coconut Milk", "Pandan Leaves"],
            allergens: []
          },
          {
            id: 5,
            name: "Special Dessert (Chè Đặc Biệt)",
            category: "DESSERT | CHÈ",
            price: 6.99,
            description: "Our signature dessert with mixed toppings",
            is_featured: false,
            image_url: "/images/SPECIAL.png",
            ingredients: ["Mixed Toppings", "Coconut Milk", "Jelly", "Fruit"],
            allergens: []
          },
          {
            id: 6,
            name: "Jackfruit Dessert (Chè Mít)",
            category: "DESSERT | CHÈ",
            price: 4.25,
            description: "Sweet jackfruit with coconut milk and tapioca",
            is_featured: false,
            image_url: "/images/Jackfruit.png",
            ingredients: ["Jackfruit", "Coconut Milk", "Tapioca Pearls"],
            allergens: []
          },
          {
            id: 7,
            name: "Red Bean Dessert (Chè Đậu Đỏ)",
            category: "DESSERT | CHÈ",
            price: 4.75,
            description: "Sweet red bean dessert with coconut milk",
            is_featured: false,
            image_url: "/images/Red Bean.png",
            ingredients: ["Red Beans", "Coconut Milk", "Sugar"],
            allergens: []
          },
          {
            id: 8,
            name: "Mung Bean Dessert (Chè Đậu Xanh)",
            category: "DESSERT | CHÈ",
            price: 4.50,
            description: "Traditional mung bean dessert with pandan",
            is_featured: false,
            image_url: "/images/Mung Bean.png",
            ingredients: ["Mung Beans", "Coconut Milk", "Pandan Leaves"],
            allergens: []
          },
          {
            id: 9,
            name: "Taro Dessert (Chè Khoai Môn)",
            category: "DESSERT | CHÈ",
            price: 5.25,
            description: "Creamy taro dessert with coconut milk",
            is_featured: false,
            image_url: "/images/Taro.png",
            ingredients: ["Taro", "Coconut Milk", "Tapioca Pearls"],
            allergens: []
          },
          {
            id: 13,
            name: "Vietnamese Pancake (Bánh Xèo)",
            category: "BAKE | BÁNH",
            price: 8.99,
            description: "Crispy Vietnamese crepe with shrimp and bean sprouts",
            is_featured: true,
            image_url: "/images/Banh Xeo.png",
            ingredients: ["Rice Flour", "Shrimp", "Bean Sprouts", "Coconut Milk"],
            allergens: ["Shrimp"]
          },
          {
            id: 14,
            name: "Vietnamese Rice Paper Rolls (Bánh Tráng)",
            category: "BAKE | BÁNH",
            price: 6.50,
            description: "Fresh rice paper rolls with herbs and dipping sauce",
            is_featured: false,
            image_url: "/images/Banh Trang.png",
            ingredients: ["Rice Paper", "Fresh Herbs", "Dipping Sauce"],
            allergens: []
          },
          {
            id: 15,
            name: "Vietnamese Sticky Rice (Bánh Chưng)",
            category: "BAKE | BÁNH",
            price: 7.25,
            description: "Traditional sticky rice cake with mung bean and pork",
            is_featured: false,
            image_url: "/images/Banh Chung.png",
            ingredients: ["Sticky Rice", "Mung Bean", "Pork", "Banana Leaves"],
            allergens: []
          },
          {
            id: 16,
            name: "Vietnamese Spring Rolls (Bánh Cuốn)",
            category: "BAKE | BÁNH",
            price: 5.99,
            description: "Steamed rice rolls with ground pork and mushrooms",
            is_featured: false,
            image_url: "/images/Banh Cuon.png",
            ingredients: ["Rice Paper", "Ground Pork", "Mushrooms", "Fish Sauce"],
            allergens: ["Fish"]
          },
          {
            id: 17,
            name: "Vietnamese Rice Cake (Bánh Bèo)",
            category: "BAKE | BÁNH",
            price: 4.75,
            description: "Small rice cakes with shrimp and crispy toppings",
            is_featured: false,
            image_url: "/images/Banh Beo.png",
            ingredients: ["Rice Flour", "Shrimp", "Crispy Toppings", "Fish Sauce"],
            allergens: ["Shrimp", "Fish"]
          },
          {
            id: 18,
            name: "Vietnamese Dumplings (Bánh Bao)",
            category: "BAKE | BÁNH",
            price: 3.50,
            description: "Steamed buns filled with pork and vegetables",
            is_featured: false,
            image_url: "/images/Banh Bao.png",
            ingredients: ["Wheat Flour", "Pork", "Vegetables", "Steamed"],
            allergens: ["Wheat"]
          },
          {
            id: 19,
            name: "Vietnamese Rice Noodles (Bánh Phở)",
            category: "BAKE | BÁNH",
            price: 6.99,
            description: "Fresh rice noodles for pho and other dishes",
            is_featured: false,
            image_url: "/images/Banh Pho.png",
            ingredients: ["Rice Flour", "Water", "Fresh"],
            allergens: []
          },
          {
            id: 20,
            name: "Vietnamese Rice Paper (Bánh Tráng Nướng)",
            category: "BAKE | BÁNH",
            price: 4.25,
            description: "Grilled rice paper with quail egg and scallions",
            is_featured: false,
            image_url: "/images/Banh Trang Nuong.png",
            ingredients: ["Rice Paper", "Quail Egg", "Scallions", "Mayonnaise"],
            allergens: ["Egg"]
          },
          {
            id: 21,
            name: "8 pcs",
            category: "MIX & MATCH",
            price: 0,
            description: "Select your own quantity",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "custom"
          },
          {
            id: 22,
            name: "12 pcs",
            category: "MIX & MATCH",
            price: 0,
            description: "Select your own quantity",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "custom"
          },
          {
            id: 23,
            name: "20 pcs",
            category: "MIX & MATCH",
            price: 0,
            description: "Select your own quantity",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "custom"
          },
          {
            id: 24,
            name: "30 pcs",
            category: "MIX & MATCH",
            price: 0,
            description: "Select your own quantity",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "custom"
          },
          {
            id: 25,
            name: "50 pcs",
            category: "MIX & MATCH",
            price: 0,
            description: "Select your own quantity",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "custom"
          },
          {
            id: 26,
            name: "100 pcs",
            category: "MIX & MATCH",
            price: 0,
            description: "Select your own quantity",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "custom"
          },
          {
            id: 27,
            name: "5 CAKES - THE SAMPLE",
            category: "MIX & MATCH",
            price: 0,
            description: "All cakes selection Cannot be changed or substituted",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "preselect",
            cakes: [
              { name: "Palm Sugar", quantity: 1 },
              { name: "Pandan Layers", quantity: 1 },
              { name: "Mung Bean", quantity: 1 },
              { name: "Cassava", quantity: 1 },
              { name: "Taro", quantity: 1 }
            ]
          },
          {
            id: 28,
            name: "8 CAKES - THE TOP SELLER",
            category: "MIX & MATCH",
            price: 0,
            description: "All cakes selection Cannot be changed or substituted",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "preselect",
            cakes: [
              { name: "Palm Sugar", quantity: 4 },
              { name: "Pandan Layers", quantity: 4 }
            ]
          },
          {
            id: 29,
            name: "12 CAKES - THE SAMPLE",
            category: "MIX & MATCH",
            price: 0,
            description: "All cakes selection Cannot be changed or substituted",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "preselect",
            cakes: [
              { name: "Palm Sugar", quantity: 4 },
              { name: "Pandan Layers", quantity: 2 },
              { name: "Mung Bean", quantity: 2 },
              { name: "Cassava", quantity: 2 },
              { name: "Taro", quantity: 2 }
            ]
          },
          {
            id: 30,
            name: "30 CAKES - XLARGE GIFTBOX",
            category: "MIX & MATCH",
            price: 0,
            description: "All cakes selection Cannot be changed or substituted",
            is_featured: false,
            image_url: "",
            ingredients: [],
            allergens: [],
            type: "preselect",
            cakes: [
              { name: "Palm Sugar", quantity: 10 },
              { name: "Pandan Layers", quantity: 5 },
              { name: "Mung Bean", quantity: 5 },
              { name: "Cassava", quantity: 5 },
              { name: "Taro", quantity: 5 }
            ]
          }
        ]
        setMenuItems(staticMenuItems)
      } catch (err) {
        setError('Failed to load menu items')
        console.error('Error loading menu:', err)
      } finally {
        setLoading(false)
      }
    }

    loadMenuItems()
  }, [])

  // Function to split dessert name into two lines
  const splitDessertName = (name) => {
    const match = name.match(/^(.+?)\s*\((.+?)\)$/);
    if (match) {
      return {
        english: match[1].trim(),
        vietnamese: `(${match[2].trim()})`
      };
    }
    return {
      english: name,
      vietnamese: ''
    };
  };

  // Group menu items by category
  const groupedMenuItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {})

  if (loading) {
    return (
      <div className="menu-page">
        <div className="hero-section">
          <div className="container">
            <h1>Our Menu</h1>
            <p className="hero-subtitle">Loading menu items...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="menu-page">
        <div className="hero-section">
          <div className="container">
            <h1>Our Menu</h1>
            <p className="hero-subtitle">Error: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  // Create menu categories from database data
  const menuCategories = Object.keys(groupedMenuItems).map(categoryName => ({
    name: categoryName.toUpperCase(),
    items: groupedMenuItems[categoryName].map(item => ({
      name: item.name,
      price: parseFloat(item.price),
      description: item.description || '',
      popular: item.is_featured || false,
      image: item.image_url,
      ingredients: item.ingredients || [],
      allergens: item.allergens || []
    }))
  }))

  return (
    <div className="menu-page">
      <div className="hero-section">
        <div className="container">
          <h1>Our Menu</h1>
          <p className="hero-subtitle">Fresh baked goods made daily with love</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-intro">
          <p>All our items are baked fresh daily using the finest ingredients. 
          We're proud to source locally whenever possible and never use artificial preservatives.</p>
        </div>

        {menuCategories.map((category, index) => (
          <section key={index} className="menu-category">
            <h2 className="category-title">{category.name}</h2>
            {category.name === "DESSERT | CHÈ" || category.name === "JELLY | RAU CÂU" || category.name === "BAKE | BÁNH" ? (
              <div className="dessert-cards-grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="dessert-card">
                    <div className="dessert-photo-placeholder">
                      <div className="photo-placeholder-icon">📸</div>
                      <p className="photo-placeholder-text">Photo Placeholder</p>
                    </div>
                    <div className="dessert-info">
                      <div className="dessert-title">
                        {(() => {
                          const nameParts = splitDessertName(item.name);
                          return (
                            <>
                              <div className="dessert-title-english">{nameParts.english}</div>
                              {nameParts.vietnamese && <div className="dessert-title-vietnamese">{nameParts.vietnamese}</div>}
                            </>
                          );
                        })()}
                      </div>
                      {item.popular && <div className="popular-badge">Popular</div>}
                    </div>
                  </div>
                ))}
              </div>
            ) : category.name === "MIX & MATCH" ? (
              <div className="mix-match-section">
                <div className="mix-match-subtitle">SELECT YOUR OWN</div>
                <div className="quantity-grid">
                  {category.items.filter(item => item.type === "custom").map((item, itemIndex) => (
                    <div key={itemIndex} className="quantity-option">
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className="preselect-section">
                  <div className="preselect-subtitle">PRESELECT GIFTBOX</div>
                  <div className="preselect-note">All cakes selection Cannot be changed or substituted</div>
                  <div className="giftbox-grid">
                    {category.items.filter(item => item.type === "preselect").map((item, itemIndex) => (
                      <div key={itemIndex} className="giftbox-card">
                        <h3 className="giftbox-title">{item.name}</h3>
                        <div className="giftbox-content">
                          <div className="giftbox-info">
                            <div className="cake-list">
                              {item.cakes.map((cake, cakeIndex) => (
                                <div key={cakeIndex} className="cake-item">
                                  <span className="cake-quantity">({cake.quantity})</span>
                                  <span className="cake-name">{cake.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="giftbox-photo-placeholder">
                            <div className="photo-placeholder-icon">📸</div>
                            <p className="photo-placeholder-text">Photo Placeholder</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="item-header">
                      <h3 className="item-name">
                        {item.name}
                        {item.popular && <Star className="popular-icon" />}
                      </h3>
                      <span className="item-price">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="menu-notes">
          <div className="notes-grid">
            <div className="note-item">
              <Clock className="note-icon" />
              <div>
                <h3>Fresh Daily</h3>
                <p>All items are baked fresh every morning</p>
              </div>
            </div>
            <div className="note-item">
              <DollarSign className="note-icon" />
              <div>
                <h3>Custom Orders</h3>
                <p>Special orders available with 24-hour notice</p>
              </div>
            </div>
            <div className="note-item">
              <Star className="note-icon" />
              <div>
                <h3>Seasonal Specials</h3>
                <p>Ask about our rotating seasonal menu items</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
