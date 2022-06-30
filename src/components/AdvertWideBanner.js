/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

const AdvertWideBanner = ({ ads }) => {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {
        ads.map((advert) => {
          const { image, url } = advert;
          return (
            <a key={image} href={url} target="_blank" rel="noopener noreferrer">
              <div className="long-banner border">
                <img src={image} alt="advertisement" className="advert-banner-img w-100" />
              </div>
            </a>
          );
        })
        }
    </Slider>
  );
};

export default AdvertWideBanner;
