// SimpleSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import proyectos from '../../proyectos';

function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />
  };

  return (
    <div className="slider-container container-fluid">
      <Slider {...settings}>
        {proyectos.map(proyecto => (
          <div key={proyecto.id} className='item-slider'>
            <img src={proyecto.src} alt={proyecto.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
