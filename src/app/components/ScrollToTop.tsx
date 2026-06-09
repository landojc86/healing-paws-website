import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // Otherwise scroll to top immediately when route changes
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

      // Also ensure scroll happens after render
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [pathname, hash]);

  return null;
}
