import React from 'react';

const AdvertBanner = ({ image }) => (
  <div className="advert-banner mt-4 border">
    <img src={image} alt="advertisement" className="advert-banner-img w-100" />
  </div>
);

export default AdvertBanner;
