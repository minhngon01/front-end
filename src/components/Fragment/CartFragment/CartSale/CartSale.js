import React, { Component }  from 'react'
import {style} from 'glamor';
// import './cartsale.css';
import StarRating from '../../StarRating/StarRating';
import TimeCountDown from '../../TimeCountDown/TimeCountDown';
import {Link} from 'react-router-dom'

const CartSale = (props) => {
  let product = props.product;

  let imageProducts = {
    backgroundImage : "url(" + product['product_image_url'] + ")"
  }
  return (
      <div className="c-card">
      <div className="c-card--basic__image" style={imageProducts}/>
        <StarRating/>
        <Link className="c-card--basic__name-product" to={"product/"+product['product_id']}>{product['product_name']}</Link>
        <div className="c-card--sale__price">
          <p className="c-card--sale__price-actual">{product['product_price']}</p>
          <p className="c-card--sale__price-sale">{product['sale_price']}</p>
        </div>
        <TimeCountDown time={product['sale_date']}/>
      <div className="c-card--sale__sale-tag">SALE!</div>
    </div>
);
}

export default CartSale;
