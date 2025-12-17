import React, { useEffect } from 'react';

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://bariessential.com.br/wp-content/uploads/2024/09/cropped-Prancheta-3-1-32x32.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return <>{children}</>;
}