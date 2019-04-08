import React, { Component }  from 'react'
import {style} from 'glamor';
import './cartsale.css';
import StarRating from '../../StarRating/StarRating';
import TimeCountDown from '../../TimeCountDown/TimeCountDown';
import {Link} from 'react-router-dom'

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
        <Link className="name-product-sale" to={"product/"+product['name-product']}>{product['name-product']}</Link>
        <div className="d-flex align-items-center justify-content-center">
          <p className="cross-price">$400.00</p>
          <p className="sale-price">$350.00</p>
        </div>
        <TimeCountDown time={product['time']}/>
      </blockquote>
      <div className="sale-box">SALE!</div>
    </div>
  </React.Fragment>
);
}

export default CartSale;
