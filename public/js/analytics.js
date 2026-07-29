// Vercel Web Analytics
// This script initializes Vercel Web Analytics for the site
// See: https://vercel.com/docs/analytics/quickstart

(function() {
  'use strict';
  
  // Initialize the analytics queue
  // This buffers analytics calls before the main script loads
  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Create and inject the analytics script
  var script = document.createElement('script');
  // Use the CDN URL for better reliability, falls back to Vercel's internal path when deployed
  script.src = 'https://cdn.vercel-insights.com/v1/script.js';
  script.defer = true;
  
  // Fallback to internal Vercel path on error (for Vercel deployments)
  script.onerror = function() {
    var fallbackScript = document.createElement('script');
    fallbackScript.src = '/_vercel/insights/script.js';
    fallbackScript.defer = true;
    document.head.appendChild(fallbackScript);
  };
  
  // Inject script when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  } else {
    document.head.appendChild(script);
  }
})();
