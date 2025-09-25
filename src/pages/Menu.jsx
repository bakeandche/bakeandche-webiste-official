import { Star, Clock, DollarSign } from 'lucide-react'

export function Menu() {
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

  const menuCategories = [
    {
      name: "DESSERT | CHÈ",
      items: [
        { name: "HOUSE SPECIAL (CHÈ ĐẶC BIỆT)", price: 7.50, description: "Chè đặc biệt với nhiều lớp hương vị", popular: true },
        { name: "THREE COLORS (CHÈ BA MÀU)", price: 6.75, description: "Chè ba màu truyền thống với đậu đỏ" },
        { name: "PANDAN GRASS JELLY (SƯƠNG SÁO BÁNH LỌT)", price: 6.25, description: "Sương sáo lá dứa với bánh lọt" },
        { name: "SMASHED COCONUT (DỪA DẦM THỐT NỐT)", price: 8.00, description: "Dừa dầm với thốt nốt tươi" },
        { name: "AVOCADO (CHÈ BƠ)", price: 5.50, description: "Chè bơ với sữa dừa và sữa đặc" },
        { name: "PREMIUM SOY PUDDING (ĐẬU HỦ ĐẶC BIỆT)", price: 6.00, description: "Đậu hủ đặc biệt với nước đường" },
        { name: "THAI DESSERT (CHÈ THÁI)", price: 5.75, description: "Chè Thái với nhiều loại thạch" },
        { name: "LONGAN ALOE VERA (CHÈ NHÂN NHỤC)", price: 4.50, description: "Chè nhãn nhục với nha đam" }
      ]
    },
    {
      name: "JELLY | RAU CÂU",
      items: [
        { name: "COCONUT JELLY (RAU CÂU DỪA)", price: 4.50, description: "Rau câu dừa tươi với nước cốt dừa", popular: true },
        { name: "PANDAN JELLY (RAU CÂU LÁ DỨA)", price: 4.25, description: "Rau câu lá dứa thơm ngon" },
        { name: "COFFEE JELLY (RAU CÂU CÀ PHÊ)", price: 4.75, description: "Rau câu cà phê đậm đà" },
        { name: "MIXED JELLY (RAU CÂU HỖN HỢP)", price: 5.00, description: "Rau câu nhiều màu sắc" }
      ]
    },
    {
      name: "BAKE | BÁNH",
      items: [
        { name: "BÁNH FLAN (CARAMEL CUSTARD)", price: 5.50, description: "Bánh flan truyền thống với caramel", popular: true },
        { name: "BÁNH BÔNG LAN (SPONGE CAKE)", price: 6.25, description: "Bánh bông lan mềm mịn" },
        { name: "BÁNH TIRAMISU", price: 6.75, description: "Bánh tiramisu kiểu Ý" },
        { name: "BÁNH TART CHANH (LEMON TART)", price: 5.00, description: "Bánh tart chanh chua ngọt" },
        { name: "BÁNH CHEESECAKE", price: 6.50, description: "Bánh cheesecake phong cách New York" },
        { name: "BÁNH CHOCOLATE", price: 5.75, description: "Bánh chocolate đậm đà" },
        { name: "BÁNH RED VELVET", price: 6.00, description: "Bánh red velvet với kem phô mai" },
        { name: "BÁNH CARROT CAKE", price: 5.25, description: "Bánh carrot cake với hạt óc chó" }
      ]
    },
    {
      name: "MIX & MATCH",
      type: "custom",
      items: [
        { name: "8 pcs", price: 0, description: "Custom selection" },
        { name: "12 pcs", price: 0, description: "Custom selection" },
        { name: "20 pcs", price: 0, description: "Custom selection" },
        { name: "30 pcs", price: 0, description: "Custom selection" },
        { name: "50 pcs", price: 0, description: "Custom selection" },
        { name: "100 pcs", price: 0, description: "Custom selection" }
      ]
    },
    {
      name: "PRESELECT GIFTBOX",
      type: "preselect",
      items: [
        { 
          name: "5 CAKES - THE SAMPLE", 
          price: 0, 
          description: "All cakes selection Cannot be changed or substituted",
          cakes: [
            { name: "Palm Sugar", quantity: 1, color: "#8B4513" },
            { name: "Pandan Layers", quantity: 1, color: "#FFD700" },
            { name: "Mung Bean", quantity: 1, color: "#D2B48C" },
            { name: "Cassava", quantity: 1, color: "#FFA500" },
            { name: "Taro", quantity: 1, color: "#90EE90" }
          ]
        },
        { 
          name: "8 CAKES - THE TOP SELLER", 
          price: 0, 
          description: "All cakes selection Cannot be changed or substituted",
          cakes: [
            { name: "Palm Sugar", quantity: 4, color: "#8B4513" },
            { name: "Pandan Layers", quantity: 4, color: "#90EE90" }
          ]
        },
        { 
          name: "12 CAKES - THE SAMPLE", 
          price: 0, 
          description: "All cakes selection Cannot be changed or substituted",
          cakes: [
            { name: "Palm Sugar", quantity: 4, color: "#8B4513" },
            { name: "Pandan Layers", quantity: 2, color: "#90EE90" },
            { name: "Mung Bean", quantity: 2, color: "#D2B48C" },
            { name: "Cassava", quantity: 2, color: "#FFA500" },
            { name: "Taro", quantity: 2, color: "#FFD700" }
          ]
        },
        { 
          name: "30 CAKES - XLARGE GIFTBOX", 
          price: 0, 
          description: "All cakes selection Cannot be changed or substituted",
          cakes: [
            { name: "Palm Sugar", quantity: 10, color: "#8B4513" },
            { name: "Pandan Layers", quantity: 5, color: "#90EE90" },
            { name: "Mung Bean", quantity: 5, color: "#D2B48C" },
            { name: "Cassava", quantity: 5, color: "#FFA500" },
            { name: "Taro", quantity: 5, color: "#FFD700" }
          ]
        }
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
            ) : category.type === "custom" ? (
              <div className="mix-match-section">
                <div className="mix-match-subtitle">SELECT YOUR OWN</div>
                <div className="quantity-grid">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="quantity-option">
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ) : category.type === "preselect" ? (
              <div className="preselect-section">
                <div className="preselect-subtitle">PRESELECT GIFTBOX</div>
                <div className="preselect-note">{category.items[0]?.description}</div>
                <div className="giftbox-grid">
                  {category.items.map((item, itemIndex) => (
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
