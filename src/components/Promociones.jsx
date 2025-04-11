import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Importando imágenes desde la carpeta assets
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';
import imagen4 from '../assets/imagen4.jpg';
import imagen5 from '../assets/imagen5.jpg';
import imagen6 from '../assets/imagen6.jpg';
import imagen7 from '../assets/imagen7.jpg';

const imagenes = [imagen6, imagen7];

function Promociones() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="promociones" style={{ width: '80%', margin: 'auto', paddingTop: '20px' }}>
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={imagen} 
              alt={`Slide ${index + 1}`} 
              style={{ 
                width: '100%', 
                maxWidth: '1038px', 
                height: '180px', 
                objectFit: 'contain', 
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Promociones;
