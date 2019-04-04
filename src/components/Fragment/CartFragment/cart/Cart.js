import React from 'react';
import './cart.css';
import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// {
//   'name-product' : "Samsung Galaxy J5 Black",
//   'branch' : 'Samsung',
//   'sub-branch' : 'Samsung Phone',
//   'type' : 'Cell Phones',
//   'price' : '$200.00',
//   'amount-available' : 2,
//   'rating' : 4,
//   'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
// },
const Cart = props => {
  let product = props.product;
  console.log(product['image']);
  let imageProducts = {
    backgroundImage : "url(" + product['image'] + ")"
  }

  return(
      <div className="cart-product ">
        <div className="image-product" style={imageProducts}/>
        <div className="info-product d-flex flex-column align-items-center ">
          <div className="brand-product">
            {product['type']+', '+product['sub-branch']}
          </div>
          <div className="name-product">
            {product['name-product']}
          </div>
          <div className="price-product">
          {product['price']}
          </div>
          <StarRating/>

          <div className={"button-add-to-cart"}>ADD TO CART</div>
          <div className={"rate-search-compare" + " d-flex" +  " flex-column"}>
            <div className={"circle-around" }>
              <FontAwesomeIcon className={"icon-heart"} icon="heart" color="black"/>
            </div>
            <div className = "circle-around" >
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

export default Cart;
