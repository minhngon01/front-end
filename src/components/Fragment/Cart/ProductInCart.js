import React from 'react';

const ProductInCart = (props) => {
  console.log("&&",props.cart);
  let cart = props.cart;
  let img = {
    backgroundImage   : "url(" + cart['product_image_url'] + ")",
  };
  return(
    <div className="d-flex c-cart-panel__cart-product align-items-center" >
      <div className="c-cart-panel__cart-product__image" style={img}/>
      <div className="d-flex flex-column flex-grow-1">
        <div className="c-cart-panel__cart-product__name">{cart.product_name}</div>
        <div className="c-cart-panel__cart-product__price">{cart.product_price}</div>
      </div>

      <div className="c-cart-panel__delete-icon" onClick={props.deleteProduct(cart.product_id)}>x</div>
    </div>
  )
}

export default ProductInCart;
