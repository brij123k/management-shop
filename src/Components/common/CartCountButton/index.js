import React from 'react'
import { useHistory } from 'react-router'
import './styled.css'

const CartCountButton = ({cartCount}) => {
  const historay = useHistory();
  return (
    <div className='btnCartCount' onClick={()=>historay.push('/Cart')}>
      <div className='count'>5+{cartCount>=100?'99+': cartCount}</div>
      <i className='fas fa-shopping-cart'></i>
    </div>
  )
}

export default CartCountButton