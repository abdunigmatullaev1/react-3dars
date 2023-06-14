import React from 'react'
import './topphone.scss'
import antena from '../../assets/antena.svg'
import wifi from '../../assets/Wifi.svg'
import batery from '../../assets/batery.svg'

const Topphone = () => {
  return (
    <div className='topphone'>
        <div className="topphone__con containere">
            <h3>9:41</h3>
            <ul>
                <li>
                    <img src={antena} alt="" />
                    <img src={wifi} alt="" />
                    <img src={batery} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Topphone