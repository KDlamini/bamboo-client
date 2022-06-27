import React from 'react';

const AdvertBanner = ({ image, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="advert-banner border">
      <img src={image} alt="advertisement" className="advert-banner-img w-100" />
    </div>
  </a>
);

export default AdvertBanner;
