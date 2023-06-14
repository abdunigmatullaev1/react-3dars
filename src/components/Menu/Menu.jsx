import React from 'react'
import './menu.scss'
import Slider from "react-slick";
import menuPz from '../../assets/menu-pizza.svg'
import menuWt from '../../assets/menu-wt.svg'
import menuZk from '../../assets/menu-zk.png'
import menuPz2 from '../../assets/menu-pz-2.svg'


const Menu = () => {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className="menu-con">
        <Slider {...settings} className='menu__slider'>
            <div style={{ width: "100px" ,  marginRight: "20px" , display: "flex"}} className='menu__box'>
                <img src={menuPz} alt="" />
                <h4>Пицца</h4>
            </div>
            <div style={{ width: "100px" , marginRight: "20px" , display: "flex"}} className='menu__box'>
                <img src={menuWt} alt="" />
                <h4>Напитки</h4>
            </div>
            <div style={{ width: "100px" , marginRight: "20px" , display: "flex"}} className='menu__box'>
                <img src={menuZk} alt="" />
                <h4>Закуски</h4>
            </div>
            <div style={{ width: "100px" ,  marginRight: "20px" , display: "flex"}} className='menu__box'>
                <img src={menuPz2} alt="" />
                <h4>Пицца</h4>
            </div>
        </Slider>
    </div>
  )
}

export default Menu