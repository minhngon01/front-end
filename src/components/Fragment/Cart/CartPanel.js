import React from 'react';
import ProductInCart from './ProductInCart';
const CartPanel = (props) => {
  return(
    <div>
      <div className="d-flex flex-column c-cart-panel">
        <ProductInCart/>
        <div className="c-cart-panel__subtotal">SubTotal: $575.00</div>
        <div className="d-flex justify-content-around">
          <button className="c-cart-panel__view-cart">VIEW CART</button>
          <button className="c-cart-panel__checkout">CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default CartPanel;
