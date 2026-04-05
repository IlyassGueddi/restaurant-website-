/**
 * UI Loader - Dynamic Data Integration
 * Handles loading restaurant data and updating UI elements
 */

import { RESTAURANT_CONFIG, getRestaurantName } from './data.js';

/**
 * Initialize dynamic UI elements with restaurant data
 */
function initializeDynamicUI() {
  // Update loading screen with restaurant name
  updateLoadingScreen();
  
  // Update page title and meta
  updatePageMeta();
  
  // Update logo alt text
  updateLogoAltText();
  
  // Update contact information
  updateContactInfo();
  
  // Update navigation
  updateNavigation();
  
  // Render menu items dynamically
  renderMenuItems();
}

/**
 * Update loading screen with restaurant name
 */
function updateLoadingScreen() {
  const loadingText = document.querySelector('.preload .text');
  if (loadingText) {
    loadingText.textContent = getRestaurantName();
  }
}

/**
 * Update page title and meta information
 */
function updatePageMeta() {
  const titleElement = document.querySelector('title');
  const metaTitle = document.querySelector('meta[name="title"]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const favicon = document.querySelector('link[rel="shortcut icon"]');
  
  if (titleElement) titleElement.textContent = RESTAURANT_CONFIG.meta.title;
  if (metaTitle) metaTitle.content = RESTAURANT_CONFIG.meta.title;
  if (metaDescription) metaDescription.content = RESTAURANT_CONFIG.meta.description;
  if (favicon) favicon.href = RESTAURANT_CONFIG.meta.favicon;
}

/**
 * Update logo alt text with restaurant name
 */
function updateLogoAltText() {
  const logos = document.querySelectorAll('.logo img');
  logos.forEach(logo => {
    const currentAlt = logo.alt;
    if (currentAlt.includes('Grilli')) {
      logo.alt = currentAlt.replace('Grilli', getRestaurantName());
    }
  });
}

/**
 * Update contact information throughout the page
 */
function updateContactInfo() {
  const contact = RESTAURANT_CONFIG.restaurant.contact;
  
  // Update phone numbers
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    const phoneText = link.querySelector('.span, .contact-number');
    if (phoneText) {
      phoneText.textContent = contact.phone;
    }
    link.href = `tel:${contact.phone.replace(/\s/g, '')}`;
  });
  
  // Update email links
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    const emailText = link.querySelector('.span, .sidebar-link');
    if (emailText) {
      emailText.textContent = contact.email;
    }
    link.href = `mailto:${contact.email}`;
  });
  
  // Update address in top bar
  const topBarAddress = document.querySelector('.topbar-item address .span');
  if (topBarAddress && topBarAddress.textContent.includes('Restaurant St')) {
    topBarAddress.textContent = contact.address;
  }
  
  // Update address in sidebar
  const sidebarAddress = document.querySelector('.navbar-list address');
  if (sidebarAddress && sidebarAddress.textContent.includes('Restaurant Agadir')) {
    sidebarAddress.innerHTML = `${contact.address.replace(', ', ', <br>')}`;
  }
  
  // Update hours in top bar
  const topBarHours = document.querySelectorAll('.topbar-item .span');
  topBarHours.forEach(element => {
    if (element.textContent.includes('Daily :')) {
      element.textContent = `Daily : ${RESTAURANT_CONFIG.restaurant.hours.daily}`;
    }
  });
  
  // Update hours in sidebar
  const sidebarHours = document.querySelector('.navbar-text');
  if (sidebarHours && sidebarHours.textContent.includes('Open:')) {
    sidebarHours.textContent = `Open: ${RESTAURANT_CONFIG.restaurant.hours.weekend}`;
  }
  
  // Update winter hours in menu section
  const winterHours = document.querySelector('.menu-text .span');
  if (winterHours && winterHours.textContent.includes('7:00 pm')) {
    const menuText = document.querySelector('.menu-text');
    if (menuText) {
      menuText.innerHTML = `during winter we open daily from <span class="span">${RESTAURANT_CONFIG.restaurant.hours.winter.split(' to ')[0]}</span> to <span class="span">${RESTAURANT_CONFIG.restaurant.hours.winter.split(' to ')[1]}</span>`;
    }
  }
}

/**
 * Update navigation menu
 */
function updateNavigation() {
  const navList = document.querySelector('#navbar-list');
  if (!navList) return;
  
  navList.innerHTML = '';
  
  RESTAURANT_CONFIG.navigation.forEach(navItem => {
    const li = document.createElement('li');
    li.className = 'navbar-item';
    
    const a = document.createElement('a');
    a.href = navItem.href;
    a.className = `navbar-link hover-underline ${navItem.active ? 'active' : ''}`;
    
    a.innerHTML = `
      <div class="separator"></div>
      <span class="span">${navItem.label}</span>
    `;
    
    li.appendChild(a);
    navList.appendChild(li);
  });
}

/**
 * Render menu items dynamically
 */
function renderMenuItems() {
  const menuGrid = document.querySelector('#menu-grid');
  if (!menuGrid) return;
  
  menuGrid.innerHTML = '';
  
  RESTAURANT_CONFIG.menuItems.forEach(item => {
    const li = document.createElement('li');
    
    const badgeHtml = item.badge ? 
      `<span class="badge label-1">${item.badge}</span>` : '';
    
    li.innerHTML = `
      <div class="menu-card hover:card">
        <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
          <img src="${item.image}" width="100" height="100" loading="lazy" 
               alt="${item.name.en}" class="img-cover">
        </figure>
        <div>
          <div class="title-wrapper">
            <h3 class="title-3">
              <a href="#" class="card-title">${item.name.en}</a>
            </h3>
            ${badgeHtml}
            <span class="span title-2">$${item.price.toFixed(2)}</span>
          </div>
          <p class="card-text label-1">
            ${item.description.en}
          </p>
        </div>
      </div>
    `;
    
    menuGrid.appendChild(li);
  });
}

/**
 * Apply theme settings
 */
function applyTheme() {
  const root = document.documentElement;
  const colors = RESTAURANT_CONFIG.theme.colors;
  
  // Apply CSS custom properties for theming
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
}

/**
 * Initialize everything when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  initializeDynamicUI();
  applyTheme();
});

/**
 * Also initialize when window loads (for fallback)
 */
window.addEventListener('load', () => {
  initializeDynamicUI();
});
