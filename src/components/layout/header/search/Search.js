import React,{Component} from 'react';
import "./search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import CartPanel from '../../../Fragment/Cart/CartPanel';
class Search extends Component{
  render(){
    return(
      <div className="container second-navigate d-flex flex-row pt-3 align-items-center">
          <div className="logo-brand">
              <Link to="/"><img className="logo-brand-img card-img-top"  src="https://devicer.cmsmasters.net/wp-content/uploads/2018/03/device-home-1-logo-retina.png" alt="Card image cap"/></Link>
          </div>

          <div className="c-search-bar d-flex ">
              <div className="dropdown">
                <button className="c-search-bar__dropdown-button dropdown-toggle  " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All categories
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <input type="text" className="c-search-bar__input c-search-bar__input__icon" placeholder="Search for product"/>
          </div>

          <div className="c-cart">
              <div class="c-cart__number-products">1</div>
              <FontAwesomeIcon className="icon-cart " icon="cart-plus" size="3x" color="DarkSlateGrey"/>
              <div className="ml-3">
                  <p className="m-0 font-weight-light">Your cart</p>
                  <p>$589.00</p>
              </div>
              <div className="c-cart__dropdown-content">
                <CartPanel/>
              </div>
          </div>
          <div className="c-navBar__middle-bar__button">
            <div className="c-navBar__middle-bar__button__stick"/>
            <div className="c-navBar__middle-bar__button__stick"/>
            <div className="c-navBar__middle-bar__button__stick"/>
          </div>
      </div>
    )
  }
}

export default Search;
