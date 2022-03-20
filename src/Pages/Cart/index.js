import React from "react";
import EmptyCart from "../../Components/Cart/EmptyCart";
import Footer from "../../Components/common/Footer/indexFooter";
import Logo from "../../Components/common/Logo/indexLogo";
import { menuItemsData } from "../../Components/common/Menu/data";
import Menu from '../../Components/common/Menu/indexMenu'
import "./styled.css"
const Cart = () => {
  return (
    <div>
      <div className="Cart-header">
        <Logo />
      </div>
      <EmptyCart/>
      {/* <hr></hr> */}
      <div className="orders">
        <h1 className="order-heading">Your Orders</h1>
        <div className="order-menu">
          <Menu list={menuItemsData}/> {/* menuItemsData pass is a props */}
        </div>
      
        <div className="order-total">
          <h4>Total MRP(incl. of texes): 600$</h4>
        {/* <div> <p>Cupon Code :<input placeholder="Enter cuppon code"></input></p></div> */}
        {/* <h4>Total tex: 23$</h4> */}
        <h4>Cuppon Discount: -45$</h4>
        <h4 className="order-discount">Big Discount=<strike>-$345</strike></h4>
        <h3 >Subtotal = $210</h3>
        </div>
        <button className="button">BUY NOW</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
