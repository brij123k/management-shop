import React from 'react'
import './indexLogo.css'
import logoimg from './logo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <div>
        <img src={logoimg} alt="Logo"/>
        
          <b className='test'>Test</b>
        
      </div>
      <p>
        <b>Restaurent & Dukan</b>
      </p>
    </div>

  )
}

export default Logo