import React from 'react'
import CartCountButton from '../../Components/common/CartCountButton'
import Footer from '../../Components/common/Footer/indexFooter'
import Banner1 from '../../Components/common/Home/Banner/Banner1'
import { menuItemsData } from '../../Components/common/Menu/data'
import Menu from '../../Components/common/Menu/indexMenu'
import Proceed from '../../Components/common/Proceed/indedx'
import './index.css'

const Home = () => {
  return (
    <div>
        <Banner1/>
         <Menu list={menuItemsData} /> {/* menuItemData pass as a props */}
        <Footer/>
        <Proceed/>
        <CartCountButton/>
    </div>
  )
}

export default Home