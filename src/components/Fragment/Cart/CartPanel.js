import React from 'react';
import ProductInCart from './ProductInCart';
import {UserContext} from '../../../context/UserProvider';
const CartPanel = (props) => {

  return(
    <div>
      <div className="d-flex flex-column c-cart-panel">
        <UserContext.Consumer>
          {

            (state) => {
              return state.carts.length == 0 ? <div>No product in cart</div> : state.carts.map( (cart,index) => (<ProductInCart key={index} cart={cart.products[0]} deleteProduct = {state.deleteFromCart}/>))
            }
          }
        </UserContext.Consumer>
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
