import React from 'react';
import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {UserContext} from '../../../../context/UserProvider';

// {
//   'product_name' : "Samsung Galaxy J5 Black",
//   'product_brand' : 'Samsung',
//   'product_brand' : 'Samsung Phone',
//   'product_type' : 'Cell Phones',
//   'price' : '$200.00',
//   'amount-available' : 2,
//   'rating' : 4,
//   'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
// },
const Cart = props => {
  let product = props.product;
  console.log(product['product_image_url']);
  let imageProducts = {
    backgroundImage : "url(" + product['product_image_url'] + ")"
  }

  return(
      <div className="c-card">
        <div className="c-card--basic__image" style={imageProducts}/>

          <div className="c-card--basic__brand-name">
            {product['product_type']+', '+product['product_brand']}
          </div>
          <Link className="c-card--basic__product_name" to={"/product/"+product['product_id']}>{product['product_name']}</Link>
          <div className="c-card--basic__price">
          {product['product_price']}
          </div>
          <StarRating />
          <UserContext.Consumer>
            {
              (state) => <div className="c-card--basic__button" onClick={state.addToCart(product['product_id'])}>ADD TO CART</div>
            }

          </UserContext.Consumer>
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
