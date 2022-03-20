import React from 'react'
import ButtonAddRemoveItem from '../../ButtonAddRemovItem'
import './styled.css'

const MenuItem = ({item}) => {
    const { name, info, price, img}=item
  return (
    <div className='item'>
        <img src={img} alt="item" />
        <div className="item-head_desc">
            <p className='head_desc-name'>{name}</p>
            <p className='head_desc-info'><small>{info}</small></p>
        </div>
        <div className='item-foot_desc'>
            <span className='foot_desc-price'>${price}</span>
            <ButtonAddRemoveItem quantity={1} />
        </div>
    </div>
  )
}

export default MenuItem