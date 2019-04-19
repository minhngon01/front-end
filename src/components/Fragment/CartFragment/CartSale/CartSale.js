import React, { Component }  from 'react'
import {style} from 'glamor';
// import './cartsale.css';
import StarRating from '../../StarRating/StarRating';
import TimeCountDown from '../../TimeCountDown/TimeCountDown';
import {Link} from 'react-router-dom'

const CartSale = (props) => {
  let product = props.product;

  let imageProducts = {
    backgroundImage : "url(" + product['image'] + ")"
  }

  return (
      <div className="c-card">
      <div className="c-card--basic__image" style={imageProducts}/>
      <blockquote className="blockquote mb-0 card-body text-center">
        <StarRating/>
        <Link className="c-card--basic__name-product" to={"product/"+product['name-product']}>{product['name-product']}</Link>
        <div className="c-card--sale__price">
          <p className="c-card--sale__price-actual">$400.00</p>
          <p className="c-card--sale__price-sale">$350.00</p>
        </div>
        <TimeCountDown time={product['time']}/>
      </blockquote>
      <div className="c-card--sale__sale-tag">SALE!</div>
    </div>
);
}

export default CartSale;
