import React from 'react'
import { PiBuildingFill, PiLaptopFill } from 'react-icons/pi'
import "./Logo.css"

const Logo = () => {
  return (
      <div className='logo'>
          <div className="icon_container">
              <PiLaptopFill/>
          </div>
          <h1 className="name">ZyonTech<span> Ventures</span></h1>
    </div>
  )
}

export default Logo
