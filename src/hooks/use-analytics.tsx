
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Define types for the gtag function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

/**
 * Hook to track page views in Google Analytics
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-BRMQ1NKW97', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  // Function to track custom events
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  return { trackEvent };
};
