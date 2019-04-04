import React, { Component }  from 'react'
import {style} from 'glamor';
import './cartsale.css';
import StarRating from '../../StarRating/StarRating';
const CartSale = (props) => {
  let product = props.product;

  let imageProducts = {
    backgroundImage : "url(" + product['image'] + ")"
  }

  return (

    <React.Fragment>
      <div className="cart-product-sale">
      <div className="card-img-top-modify-sale" />
      <blockquote className="blockquote mb-0 card-body text-center">
        <StarRating/>
        <p className="name-product-sale">{product['name-product']}</p>
        <div className="d-flex align-items-center justify-content-center">
            <p className="cross-price">$400.00</p>
            <p className="sale-price">$350.00</p>
        </div>
        <div className="d-flex flex-row justify-content-center">
              <div className="d-flex flex-column m-1">
                  <p className="time-figure">33</p>
                  <p className="time-word">DAY</p>
              </div>
              <div className="d-flex flex-column m-1">
                  <p className="time-figure">12</p>
                  <p className="time-word">HRS</p>
              </div>
              <div className="d-flex flex-column m-1">
                  <p className="time-figure">13</p>
                  <p className="time-word">MIN</p>
              </div>
              <div className="d-flex flex-column m-1">
                  <p className="time-figure">26</p>
                  <p className="time-word">SEC</p>
              </div>
          </div>

      </blockquote>
      <div className="sale-box">SALE!</div>
    </div>
  </React.Fragment>
);
}

export default CartSale;
