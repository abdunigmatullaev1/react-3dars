import React from 'react'
import './hero.scss'
import locIcon from '../../assets/loc-icon.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero__con containere">
            <form>
                <img src={locIcon} alt="" />
                <select>
                    <option>Москва</option>
                    <option>Моcква</option>
                    <option>Москва</option>
                </select>
            </form>
            <p>Среднее время доставки*: 00:24:19</p>
        </div>  
    </div>
  )
}

export default Hero