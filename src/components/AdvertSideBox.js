import React from 'react';

const AdvertSideBox = ({ image, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="side-advert ms-3 mt-4 border rounded-1">
      <img src={image} alt="advertisement" className="advert-banner-img w-100" />
    </div>
  </a>
);

export default AdvertSideBox;
