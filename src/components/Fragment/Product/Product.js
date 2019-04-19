import React from 'react';
import StarRating from '../StarRating/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product =  (props) => {
  let product = props.product;
  let img = {
    backgroundImage   : "url(" + product['image'] + ")",


  };

  return (
    <div className="d-flex align-items-center">
      <div className = "c-product__image" style={img}/>
      <div className = "d-flex flex-column">
        <div className = "c-product__price">
          {product.price}
        </div>
        <StarRating/>
      </div>
  </div>
);
}

export default Product;
