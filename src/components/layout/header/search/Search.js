import React,{Component} from 'react';
import "./search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Search extends Component{
  render(){
    return(
      <div className="container second-navigate d-flex flex-row pt-3 align-items-center">
          <div className="logo-brand">
              <img className="logo-brand-img card-img-top"  src="https://devicer.cmsmasters.net/wp-content/uploads/2018/03/device-home-1-logo-retina.png" alt="Card image cap"/>
          </div>


          <div className="search-box d-flex ">
              <div className="dropdown">
                <button className="button-search dropdown-toggle m-0 border-0 " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              {
                //fix this one, overflow box
              }
              <input type="text" className="input-search border-0 flex-item-1" placeholder="Search for product"/>
          </div>

          <div className="cart-box d-flex ml-3 mt-2">
              <div class="number-products">1</div>
              <FontAwesomeIcon className="icon-cart " icon="cart-plus" size="3x" color="DarkSlateGrey"/>
              <div className="ml-3">
                  <p className="m-0 font-weight-light">Your cart</p>
                  <p>$589.00</p>
              </div>
              <div className="dropdown-content">
                <p> No products in your cart </p>
              </div>

          </div>
      </div>
    )
  }
}

export default Search;
