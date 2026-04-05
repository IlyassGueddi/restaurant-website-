# Restaurant Data Structure Documentation

## Overview
This project now uses a centralized data-driven approach with a single source of truth for all restaurant information. The data is separated from UI logic, making it easy to maintain and extend for future API integration.

## Files Structure
```
assets/js/
├── data.js          # Centralized restaurant configuration
├── ui-loader.js     # Dynamic UI rendering and data integration
└── script.js        # Existing functionality (unchanged)
```

## Data Configuration (`data.js`)

### Restaurant Information
```javascript
restaurant: {
  name: "Grilli",
  logo: "./assets/images/logo.svg",
  contact: {
    phone: "+212 710388625",
    whatsapp: "+212 710388625",
    email: "restaurant@gmail.com",
    address: "Restaurant St, Delicious City, Agadir 8080, MA"
  },
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#"
  },
  hours: {
    daily: "8.00 am to 10.00 pm",
    winter: "7:00 pm to 9:00 pm",
    weekend: "9.30 am - 2.30pm"
  }
}
```

### Theme Settings
```javascript
theme: {
  colors: {
    primary: "#FF6B35",
    secondary: "#F7931E",
    // ... more colors
  },
  defaultMode: "light",
  fonts: {
    primary: "'DM Sans', sans-serif",
    secondary: "'Forum', cursive"
  }
}
```

### Menu Categories
```javascript
menuCategories: [
  {
    id: "appetizers",
    name: {
      en: "Appetizers",
      fr: "Entrées",
      ar: "مقبلات"
    }
  },
  // ... more categories
]
```

### Menu Items
```javascript
menuItems: [
  {
    id: "greek-salad",
    category: "appetizers",
    name: {
      en: "Greek Salad",
      fr: "Salade Grecque",
      ar: "سلطة يونانية"
    },
    price: 25.50,
    description: {
      en: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
      fr: "Tomates, poivron vert, concombre tranché, oignon, olives et fromage feta.",
      ar: "طماطم، فلفل أخضر، خيار مفروم، بصل، زيتون وجبنة فيتا."
    },
    image: "./assets/images/menu-1.png",
    featured: true,
    badge: "Seasonal"
  },
  // ... more items
]
```

## Helper Functions

### Data Access Functions
```javascript
import { 
  RESTAURANT_CONFIG, 
  getRestaurantName, 
  getRestaurantContact,
  getMenuItemsByCategory,
  getFeaturedItems,
  getMenuItemById
} from './data.js';
```

- `getRestaurantName()` - Returns restaurant name
- `getRestaurantContact()` - Returns contact information
- `getMenuItemsByCategory(categoryId)` - Filter items by category
- `getFeaturedItems()` - Get all featured menu items
- `getMenuItemById(id)` - Find specific menu item

## UI Integration (`ui-loader.js`)

The UI loader automatically:
1. Updates loading screen with restaurant name
2. Updates page title and meta information
3. Updates logo alt text dynamically
4. Updates all contact information throughout the page
5. Renders navigation menu dynamically
6. Renders menu items dynamically
7. Applies theme settings

## How to Update Restaurant Information

### 1. Change Restaurant Name
```javascript
// In data.js
restaurant: {
  name: "Your New Restaurant Name",
  // ... other properties
}
```

### 2. Add New Menu Item
```javascript
// In data.js menuItems array
{
  id: "new-item",
  category: "mains",
  name: {
    en: "New Dish",
    fr: "Nouveau Plat",
    ar: "طبق جديد"
  },
  price: 29.99,
  description: {
    en: "Description of the new dish",
    fr: "Description du nouveau plat",
    ar: "وصف الطبق الجديد"
  },
  image: "./assets/images/new-dish.png",
  featured: false
}
```

### 3. Update Contact Information
```javascript
// In data.js
contact: {
  phone: "+1234567890",
  email: "new-email@restaurant.com",
  address: "New Address, City, Country",
  // ... other contact info
}
```

### 4. Change Theme Colors
```javascript
// In data.js
theme: {
  colors: {
    primary: "#FF5733",
    secondary: "#33FF57",
    // ... other colors
  }
}
```

## Future API Integration

The data structure is designed to easily integrate with APIs:

```javascript
// Example API integration
async function loadRestaurantData() {
  try {
    const response = await fetch('/api/restaurant/config');
    const apiData = await response.json();
    
    // Merge with default config or replace entirely
    Object.assign(RESTAURANT_CONFIG, apiData);
    
    // Re-initialize UI with new data
    initializeDynamicUI();
  } catch (error) {
    console.error('Failed to load restaurant data:', error);
    // Fallback to default data
  }
}
```

## Benefits

1. **Single Source of Truth**: All data in one place
2. **Easy Maintenance**: Update data without touching UI code
3. **Multi-language Support**: Built-in support for English, French, and Arabic
4. **API Ready**: Structure prepared for future backend integration
5. **Type Safety**: Clear data structure for better development experience
6. **Modular**: Clean separation of concerns

## Dynamic Elements

The following elements are now dynamically generated:
- Loading screen text
- Page title and meta tags
- Navigation menu
- Menu items and categories
- Contact information (phone, email, address)
- Business hours
- Logo alt text

All hardcoded "Grilli" references have been replaced with dynamic variables from the configuration.
