import React from 'react'
import './karusel.scss'
import Slider from "react-slick";

const Karusel = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <div className='karusel'>
          <div className="karusel__con clas">
            <Slider {...settings}>
              <div className='karusel__box' style={{ width: '280px', backgroundColor: 'grey' }}>
                <h3>3 средние пиццы от 999 рублей</h3>
              </div>
              <div className='karusel__box' style={{ width: '280px', backgroundColor: 'grey' }}>
                <h3>3 средние пиццы от 999 рублей</h3>
              </div>
              <div className='karusel__box' style={{ width: '280px', backgroundColor: 'grey' }}>
                <h3>3 средние пиццы от 999 рублей</h3>
              </div>
              <div className='karusel__box' style={{ width: '280px', backgroundColor: 'grey' }}>
                <h3>3 средние пиццы от 999 рублей</h3>
              </div>
              <div className='karusel__box' style={{ width: '280px', backgroundColor: 'grey' }}>
                <h3>3 средние пиццы от 999 рублей</h3>
              </div>
              <div className='karusel__box' style={{ width: '280px', backgroundColor: 'grey' }}>
                <h3>3 средние пиццы от 999 рублей</h3>
              </div>
            </Slider>
          </div>
        </div>
      );    
}

export default Karusel  