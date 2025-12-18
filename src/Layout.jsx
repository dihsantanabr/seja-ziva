import React, { useEffect } from 'react';

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://bariessential.com.br/wp-content/uploads/2024/09/cropped-Prancheta-3-1-32x32.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    // Google Tag Manager - GTM-5W3W7GML
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5W3W7GML');

    // Google Tag Manager - GTM-MV8BHBGB
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MV8BHBGB');
  }, []);

  return (
    <>
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-5W3W7GML"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MV8BHBGB"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {children}
    </>
  );
}