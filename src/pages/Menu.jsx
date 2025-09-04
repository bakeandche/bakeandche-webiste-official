import { Star, Clock, DollarSign } from 'lucide-react'

export function Menu() {
  const menuCategories = [
    {
      name: "Fresh Breads",
      items: [
        { name: "Artisan Sourdough", price: 6.50, description: "Traditional sourdough with a perfect crust", popular: true },
        { name: "Whole Wheat Loaf", price: 5.25, description: "Nutty and hearty, perfect for sandwiches" },
        { name: "French Baguette", price: 4.75, description: "Crispy exterior, soft interior" },
        { name: "Multigrain Bread", price: 6.00, description: "Packed with seeds and grains" }
      ]
    },
    {
      name: "Pastries & Croissants",
      items: [
        { name: "Butter Croissant", price: 3.50, description: "Flaky, buttery perfection", popular: true },
        { name: "Chocolate Croissant", price: 4.25, description: "Rich chocolate filling in flaky pastry" },
        { name: "Almond Croissant", price: 4.75, description: "Toasted almonds and almond cream" },
        { name: "Pain au Chocolat", price: 4.00, description: "Classic French chocolate pastry" }
      ]
    },
    {
      name: "Cakes & Desserts",
      items: [
        { name: "Chocolate Cake Slice", price: 5.50, description: "Rich chocolate cake with ganache", popular: true },
        { name: "Cheesecake", price: 6.25, description: "New York style with berry compote" },
        { name: "Tiramisu", price: 6.75, description: "Classic Italian dessert" },
        { name: "Lemon Tart", price: 5.00, description: "Tangy lemon curd in buttery crust" }
      ]
    },
    {
      name: "Cookies & Treats",
      items: [
        { name: "Chocolate Chip Cookie", price: 2.50, description: "Soft and chewy with premium chocolate", popular: true },
        { name: "Macarons (6 pack)", price: 12.00, description: "Assorted flavors, made daily" },
        { name: "Brownie", price: 3.25, description: "Fudgy and rich" },
        { name: "Cinnamon Roll", price: 4.50, description: "Fresh baked with cream cheese frosting" }
      ]
    },
    {
      name: "Beverages",
      items: [
        { name: "Fresh Coffee", price: 2.75, description: "Locally roasted, freshly brewed" },
        { name: "Espresso", price: 2.25, description: "Rich and bold" },
        { name: "Cappuccino", price: 3.50, description: "Perfect foam and balance" },
        { name: "Hot Chocolate", price: 3.25, description: "Rich and creamy" },
        { name: "Fresh Juice", price: 4.00, description: "Orange, apple, or mixed berry" }
      ]
    }
  ]

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
