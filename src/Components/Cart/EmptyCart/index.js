import React from 'react'
import './styled.css'
import img from'./imgcart.png'
import { useHistory } from 'react-router'

const EmptyCart = () => {
    const history= useHistory();
  return (
    <div className='emptycart'>
        <img src={img} alt="empty" />
        <p>Hey, it feels so light</p>
        <span>There is nothing in your bags.Let's add some items</span>
        <button className='button-shop' onClick={()=>history.push('/')}>
            <i className='fas fa-long-arrow-alt-left'></i>SHOP NOW</button>
    </div>
  )
}

export default EmptyCart