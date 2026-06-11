// Vercel Web Analytics
// This script initializes Vercel Web Analytics for the site
// See: https://vercel.com/docs/analytics/quickstart

(function() {
  'use strict';
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Initialize the analytics queue
  if (!window.va) {
    window.va = function() {
      if (!window.vaq) window.vaq = [];
      window.vaq.push(arguments);
    };
  }
  
  // Detect environment
  var mode = 'production';
  try {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      mode = 'development';
    }
  } catch (e) {}
  
  window.vam = mode;
  
  // Create and inject the analytics script
  var script = document.createElement('script');
  script.src = '/_vercel/insights/script.js';
  script.defer = true;
  
  // Inject script when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  } else {
    document.head.appendChild(script);
  }
})();
