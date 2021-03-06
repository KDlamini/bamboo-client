/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Slider from 'react-slick';

const ProductCarousel = ({ renderProducts }) => {
  const [slider, setSlider] = useState();

  const settings = {
    className: 'center',
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  return (
    <div className="me-0">
      <div className="slider-items-wrapper">
        <button className="slider-btn-left" type="button" onClick={previous}>
          {renderProducts && <i className="fa-solid fa-angle-left slider-arrow text-secondary" />}
        </button>
        <Slider ref={(c) => setSlider(c)} {...settings}>
          {renderProducts}
        </Slider>
        <button className="slider-btn-right" type="button" onClick={next}>
          {renderProducts && <i className="fa-solid fa-angle-right slider-arrow text-secondary" />}
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
