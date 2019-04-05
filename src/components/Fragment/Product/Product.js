import React from 'react';
import StarRating from '../StarRating/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product =  (props) => {
  let product = props.product;
  let img = {
    backgroundImage   : "url(" + product['image'] + ")",
    backgroundPosition: "center",
    backgroundRepeat  : "no-repeat",
    backgroundSize: "contain",
    width : "100px",
    height: "100px",
  };

  return (
    <div className="d-flex align-items-center">
      <div className = "img-product-filter" style={img}/>
      <div className = "d-flex flex-column">
        <div className = "price">
          {product.price}
        </div>
        <StarRating/>
      </div>
  </div>
);
}

export default Product;
