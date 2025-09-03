// Google Analytics utility functions

export const GA_TRACKING_ID = 'G-PK8QE4THP2';

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific events for Global Carnival Jeddah
export const trackEvent = {
  // Track pavilion views
  pavilionView: (pavilionName) => {
    event({
      action: 'view_pavilion',
      category: 'engagement',
      label: pavilionName,
    });
  },

  // Track activity interactions
  activityInteraction: (activityName) => {
    event({
      action: 'interact_activity',
      category: 'engagement',
      label: activityName,
    });
  },

  // Track food item views
  foodView: (foodItem) => {
    event({
      action: 'view_food',
      category: 'engagement',
      label: foodItem,
    });
  },

  // Track contact form submissions
  contactFormSubmit: () => {
    event({
      action: 'submit_contact_form',
      category: 'conversion',
      label: 'contact_form',
    });
  },

  // Track newsletter signups
  newsletterSignup: () => {
    event({
      action: 'newsletter_signup',
      category: 'conversion',
      label: 'newsletter',
    });
  },

  // Track external link clicks
  externalLinkClick: (url) => {
    event({
      action: 'click_external_link',
      category: 'outbound',
      label: url,
    });
  },
};
