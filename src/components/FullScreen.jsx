import React, { useEffect } from 'react';

export const FullScreen = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.siteminder.com/ibe.min.js';//Adding the Javascript Library to your website
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
{/*Create Links and Widgets to The Booking Engine*/}
  return (
   
    
     <div class="ibe" data-widget="embed"></div> 
    
  );
};
