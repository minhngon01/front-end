import React from 'react';
import './cart.css';
import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cart extends React.Component{
  render(){
    return(
        <div className="cart-product">
          <div className="image-product"/>
          <div className="info-product mt-3">
            <div className="brand-product">
              Apple Macbook, Laptops
            </div>
            <div className={"name-product"}>
              12-inch Intel Core
            </div>
            <div className={"price-product"}>
              $1,120.00
            </div>
            <StarRating/>
            <div className={"button-add-to-cart"}>ADD TO CART</div>
            <div className={"rate-search-compare" + " d-flex" +  " flex-column"}>
              <div className={"circle-around" }>
                <FontAwesomeIcon className={"icon-heart"} icon="heart" color="black"/>
              </div>
              <div className = {"circle-around" }>
                <FontAwesomeIcon className={"icon-heart"} icon="recycle" color="black"/>
              </div>
              <div className = {"circle-around" }>
                <FontAwesomeIcon className={"icon-heart"} icon="search" color="black"/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Cart;
