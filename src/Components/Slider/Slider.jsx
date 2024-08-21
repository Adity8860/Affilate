import React from 'react';
import Slider from 'react-slick';
import "../Slider/Slider.css"
import "../Slider/ResSlider.css"
import "../Slider/Slider2.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: 'https://m.media-amazon.com/images/I/511QQRzEXFL._SL1024_.jpg',
    title: 'GoHome Polyester Single Electric Blanket',
    paragraph: 'The Comfort Control Electric Blanket by GoHome helps you to take complete control of your comfort and warmth. You will no longer need to get into a cold bed, let Comfort Control do the work for you. Featuring two heat settings that you can adjust to set the temperature so it is right for you, made from 100% polyester, the under blanket is durable but soft, providing ultimate comfort. You can use Comfort Control to warm your bed before use.'
  },
  {
    image: 'https://m.media-amazon.com/images/I/41mLeP5TciL.jpg',
    title: '   GRSHUB Portable Room Heater For Home',
    paragraph: 'The Comfort Control Electric Blanket by GoHome helps you to take complete control of your comfort and warmth. You will no longer need to get into a cold bed, let Comfort Control do the work for you. Featuring two heat settings that you can adjust to set the temperature so it is right for you, made from 100% polyester, the under blanket is durable but soft, providing ultimate comfort. You can use Comfort Control to warm your bed before use.'

  }
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div className='slide' key={index} style={{ display: 'flex' }}>
          <div className='image'>
            <img className='side-img' src={slide.image} alt={`Slide ${index + 1}`} />
            <div className='content'>
              <h3>{slide.title}</h3>
              <h6>Definition</h6>
              <p>{slide.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
