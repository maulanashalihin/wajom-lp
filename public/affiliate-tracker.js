/**
 * Wajom Affiliate Tracking Script for Static Landing Pages
 * 
 * This script handles affiliate tracking by:
 * 1. Parsing affiliate info from URL query parameters
 * 2. Displaying affiliate info in the page header
 * 3. Persisting affiliate data in sessionStorage for multi-page tracking
 */

const WajomAffiliate = (function() {
  'use strict';

  /**
   * Parse URL query parameters
   * @returns {Object} Object containing query parameters
   */
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      name: params.get('aff_name'),
      phone: params.get('aff_phone')
    };
  }

  /**
   * Get affiliate data from sessionStorage
   * @returns {Object|null} Affiliate data or null
   */
  function getStoredAffiliate() {
    const stored = sessionStorage.getItem('wajom_affiliate');
    return stored ? JSON.parse(stored) : null;
  }

  /**
   * Store affiliate data in sessionStorage
   * @param {Object} data - Affiliate data {name, phone}
   */
  function storeAffiliate(data) {
    sessionStorage.setItem('wajom_affiliate', JSON.stringify(data));
  }

  /**
   * Clear affiliate data from sessionStorage
   */
  function clearAffiliate() {
    sessionStorage.removeItem('wajom_affiliate');
  }

  /**
   * Sanitize string to prevent XSS
   * @param {string} str - String to sanitize
   * @returns {string} Sanitized string
   */
  function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Format phone number for display
   * @param {string} phone - Phone number
   * @returns {string} Formatted phone number
   */
  function formatPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.length >= 10) {
      if (cleaned.startsWith('62') || cleaned.startsWith('60')) {
        return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)}-${cleaned.slice(4, 8)}-${cleaned.slice(8)}`;
      }
      return phone;
    }
    return phone;
  }

  /**
   * Create affiliate info HTML element
   * @param {Object} affiliate - Affiliate data {name, phone}
   * @returns {HTMLElement} Affiliate info element
   */
  function createAffiliateElement(affiliate) {
    const container = document.createElement('div');
    container.className = 'wajom-affiliate-badge';
    container.setAttribute('role', 'complementary');
    container.setAttribute('aria-label', 'Informasi affiliate');

    const name = sanitize(affiliate.name);
    const phone = sanitize(formatPhone(affiliate.phone));

    container.innerHTML = `
      <div class="affiliate-content">
        <div class="affiliate-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div class="affiliate-info">
          <div class="affiliate-label">Dirujuk oleh:</div>
          <div class="affiliate-details">
            <strong>${name}</strong>
            <span class="affiliate-phone">${phone}</span>
          </div>
        </div>
      </div>
    `;

    return container;
  }

  /**
   * Initialize affiliate tracking
   * @param {string} containerSelector - CSS selector for the container element
   * @param {Object} options - Configuration options
   */
  function init(containerSelector, options = {}) {
    const defaults = {
      autoHide: false,
      hideDelay: 0,
      onDisplay: null,
      onError: null
    };

    const config = { ...defaults, ...options };

    try {
      // Get affiliate data from URL or storage
      let affiliate = getQueryParams();

      // If no data in URL, check sessionStorage
      if (!affiliate.name || !affiliate.phone) {
        affiliate = getStoredAffiliate();
      } else {
        // Store new affiliate data
        storeAffiliate(affiliate);
      }

      // If we have affiliate data, display it
      if (affiliate && affiliate.name && affiliate.phone) {
        const container = document.querySelector(containerSelector);
        
        if (!container) {
          console.warn(`[WajomAffiliate] Container "${containerSelector}" not found`);
          if (config.onError) config.onError('Container not found');
          return;
        }

        // Clear existing content
        container.innerHTML = '';

        // Create and append affiliate element
        const affiliateElement = createAffiliateElement(affiliate);
        container.appendChild(affiliateElement);

        // Callback on successful display
        if (config.onDisplay) {
          config.onDisplay(affiliate);
        }

        // Auto-hide if configured
        if (config.autoHide && config.hideDelay > 0) {
          setTimeout(() => {
            affiliateElement.style.opacity = '0';
            setTimeout(() => {
              affiliateElement.remove();
            }, 300);
          }, config.hideDelay);
        }

        console.log('[WajomAffiliate] Affiliate info displayed:', affiliate);
      } else {
        console.log('[WajomAffiliate] No affiliate data found');
      }
    } catch (error) {
      console.error('[WajomAffiliate] Error initializing:', error);
      if (config.onError) config.onError(error);
    }
  }

  /**
   * Get current affiliate data
   * @returns {Object|null} Current affiliate data
   */
  function getAffiliate() {
    return getStoredAffiliate();
  }

  // Public API
  return {
    init: init,
    getAffiliate: getAffiliate,
    clearAffiliate: clearAffiliate
  };
})();

// Auto-initialize function
function autoInitialize() {
  const autoInitElement = document.querySelector('[data-wajom-affiliate-auto-init]');
  if (autoInitElement) {
    const containerSelector = autoInitElement.getAttribute('data-wajom-affiliate-container') || '#wajom-affiliate';
    WajomAffiliate.init(containerSelector);
  }
}

// Check if DOM is already loaded
if (document.readyState === 'loading') {
  // DOM is still loading, wait for it
  document.addEventListener('DOMContentLoaded', autoInitialize);
} else {
  // DOM is already ready, execute immediately
  autoInitialize();
}
