import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import { useData } from "../../../Context/Context"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


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

  // Obtener datos desde el contexto
  const data = useData();

  return (
    <div className="slider-container container-fluid">
      <Navbar/>
      <Slider {...settings}>
        {data.map((item, index) => {
          const imageUrl = item.c[1]?.v; // Suponiendo que la URL de la imagen está en la primera columna
          if (!imageUrl) {
            return null; // Si no hay URL, saltar esta entrada
          }

          return (
            <div key={index} className="item-slider">
              <img className='img-fluid' src={imageUrl} alt={`Slide ${index}`} />
            </div>
          );
        })}
      </Slider>
      <Footer/>
    </div>
  );
}

export default SimpleSlider;
