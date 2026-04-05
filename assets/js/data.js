/**
 * Restaurant Configuration - Single Source of Truth
 * Centralized data for restaurant information, theme, and menu
 */

export const RESTAURANT_CONFIG = {
  // Restaurant Information
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
  },

  // Theme Settings
  theme: {
    colors: {
      primary: "#FF6B35",
      secondary: "#F7931E",
      accent: "#004643",
      background: "#FFFFFF",
      surface: "#F8F9FA",
      text: "#212529",
      textLight: "#6C757D"
    },
    defaultMode: "light", // "light" | "dark"
    fonts: {
      primary: "'DM Sans', sans-serif",
      secondary: "'Forum', cursive"
    }
  },

  // Menu Categories
  menuCategories: [
    {
      id: "appetizers",
      name: {
        en: "Appetizers",
        fr: "Entrées",
        ar: "مقبلات"
      }
    },
    {
      id: "mains",
      name: {
        en: "Main Course",
        fr: "Plat Principal",
        ar: "الطبق الرئيسي"
      },
      featured: true
    },
    {
      id: "desserts",
      name: {
        en: "Desserts",
        fr: "Desserts",
        ar: "الحلويات"
      }
    },
    {
      id: "beverages",
      name: {
        en: "Beverages",
        fr: "Boissons",
        ar: "المشروبات"
      }
    }
  ],

  // Menu Items
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
    {
      id: "lasagne",
      category: "mains",
      name: {
        en: "Lasagne",
        fr: "Lasagnes",
        ar: "لازانيا"
      },
      price: 40.00,
      description: {
        en: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
        fr: "Légumes, fromages, viandes hachées, sauce tomate, assaisonnements et épices",
        ar: "خضروات، جبن، لحم مفروم، صلصة الطماطم، التوابل والبهارات"
      },
      image: "./assets/images/menu-2.png",
      featured: false
    },
    {
      id: "butternut-pumpkin",
      category: "mains",
      name: {
        en: "Butternut Pumpkin",
        fr: "Potiron Butternut",
        ar: "قرع العسل"
      },
      price: 10.00,
      description: {
        en: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
        fr: "Industrie de la composition lorem Lorem Ipsum est simplement un texte factice du priand.",
        ar: "صناعة الطباعة لوريم لوريم إيبسوم هو ببساطة نص وهمي للبريان."
      },
      image: "./assets/images/menu-3.png",
      featured: false
    },
    {
      id: "tokusen-wagyu",
      category: "mains",
      name: {
        en: "Tokusen Wagyu",
        fr: "Wagyu Tokusen",
        ar: "واجيو توكسين"
      },
      price: 39.00,
      description: {
        en: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
        fr: "Légumes, fromages, viandes hachées, sauce tomate, assaisonnements et épices.",
        ar: "خضروات، جبن، لحم مفروم، صلصة الطماطم، التوابل والبهارات."
      },
      image: "./assets/images/menu-4.png",
      featured: true,
      badge: "New"
    },
    {
      id: "olivas-rellenas",
      category: "appetizers",
      name: {
        en: "Olivas Rellenas",
        fr: "Olives Farcies",
        ar: "زيتون محشي"
      },
      price: 25.00,
      description: {
        en: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
        fr: "Avocats avec viande de crabe, oignon rouge, salade de crabe farcie poivron rouge et poivron vert.",
        ar: "أفوكادو مع لحم السرطان، بصل أحمر، سلطة السرطان المحشوة بالفلفل الأحمر والأخضر."
      },
      image: "./assets/images/menu-5.png",
      featured: false
    },
    {
      id: "opu-fish",
      category: "mains",
      name: {
        en: "Opu Fish",
        fr: "Poisson Opu",
        ar: "سمك أوبو"
      },
      price: 49.00,
      description: {
        en: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
        fr: "Légumes, fromages, viandes hachées, sauce tomate, assaisonnements et épices",
        ar: "خضروات، جبن، لحم مفروم، صلصة الطماطم، التوابل والبهارات"
      },
      image: "./assets/images/menu-6.png",
      featured: false
    }
  ],

  // Navigation Items
  navigation: [
    {
      id: "home",
      label: "Home",
      href: "#home",
      active: true
    },
    {
      id: "menu",
      label: "Menus",
      href: "#menu",
      active: false
    },
    {
      id: "about",
      label: "About Us",
      href: "#about",
      active: false
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      active: false
    }
  ],

  // Hero Slider Images
  heroImages: [
    "./assets/images/hero-slider-1.jpg",
    "./assets/images/hero-slider-2.jpg",
    "./assets/images/hero-slider-3.jpg"
  ],

  // SEO and Meta
  meta: {
    title: "Grilli - Amazing & Delicious Food",
    description: "This is a Restaurant html template made by codewithsadee",
    favicon: "./favicon.svg"
  }
};

// Helper functions for data access
export const getRestaurantName = () => RESTAURANT_CONFIG.restaurant.name;
export const getRestaurantContact = () => RESTAURANT_CONFIG.restaurant.contact;
export const getMenuItemsByCategory = (categoryId) => 
  RESTAURANT_CONFIG.menuItems.filter(item => item.category === categoryId);
export const getFeaturedItems = () => 
  RESTAURANT_CONFIG.menuItems.filter(item => item.featured);
export const getMenuItemById = (id) => 
  RESTAURANT_CONFIG.menuItems.find(item => item.id === id);
