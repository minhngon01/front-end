import React from 'react';
import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
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
      <div className="c-card">
        <div className="c-card--basic__image" style={imageProducts}/>

          <div className="c-card--basic__brand-name">
            {product['type']+', '+product['sub-branch']}
          </div>
          <Link className="c-card--basic__name-product" to={"/product/"+product['name-product']}>{product['name-product']}</Link>
          <div className="c-card--basic__price">
          {product['price']}
          </div>
          <StarRating />

          <div className="c-card--basic__button" >ADD TO CART</div>
          <div className={"c-card--basic-icon"}>
            <div className={"c-card--basic-icon__item" }>
              <FontAwesomeIcon className={"icon-heart"} icon="heart" color="black"/>
            </div>
            <div className = "c-card--basic-icon__item" >
              <FontAwesomeIcon className={"icon-heart"} icon="recycle" color="black"/>
            </div>
            <div className = {"c-card--basic-icon__item" }>
              <FontAwesomeIcon className={"icon-heart"} icon="search" color="black"/>
            </div>
          </div>
        </div>
  )
}

export default Cart;
