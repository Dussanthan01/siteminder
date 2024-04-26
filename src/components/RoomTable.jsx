import React, { useEffect } from 'react';

export const RoomTable = () => {
    
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
    <div>
     
     <div class="ibe" data-widget="property_grid"></div>
    </div>
  );
};
