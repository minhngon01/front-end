import React from 'react';
const ProductInCart = (props) => {
  return(
    <div className="d-flex c-cart-panel__cart-product align-items-center">
      <div className="c-cart-panel__cart-product__image"/>
      <div className="d-flex flex-column flex-grow-1">
        <div className="c-cart-panel__cart-product__name">OnePlus 5T</div>
        <div className="c-cart-panel__cart-product__price">$120.00 x 1</div>
      </div>
      <div className="c-cart-panel__delete-icon">x</div>
    </div>
  )
}

export default ProductInCart;
