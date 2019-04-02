import React from 'react';
import StarRating from "../StarRating/StarRating";

import './cart/cart.css';
/*
  argument : select type of cart , JSOn product
*/
function cartHOC (WrapperComponent,selectTypeOfCart){
  return class extends React.Component {
    render(){
      return (
        <div className="cart-product">
          <div className="image-product"/>
          <div className="info-product mt-3">
            <div className="brand-product">
              Apple Macbook, Laptops
            </div>
            <div className="name-product">
              12-inch Intel Core
            </div>
            <div className="price-product">
              $1,120.00
            </div>
            <StarRating/>

            <WrapperComponent/>
            </div>
          </div>
      )
    }
  }
}
export default cartHOC;
