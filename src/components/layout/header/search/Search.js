import React,{Component} from 'react';
import "./search.css";
class Search extends Component{
  render(){
    return(
      <div className="container second-navigate d-flex flex-row">
          <div className="logo-brand py-4 ">
              <img className="logo-brand-img card-img-top"  src="https://devicer.cmsmasters.net/wp-content/uploads/2018/03/device-home-1-logo-retina.png" alt="Card image cap"/>
          </div>


          <div className="search-box d-flex p-2 m-4">
              <div className="dropdown">
                <button className="btn  dropdown-toggle m-0 border-0 " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All Categories
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <input type="text" className="form-control border-0 flex-item-1" placeholder="Search for product"/>
          </div>

          <div className="cart d-flex">
              <i className="fas fa-shopping-cart fa-3x mt-4"></i>
              <div className="cart">
                  Your cart<br/>
                  $0,00
              </div>
              <div class="dropdown-content">
                <p> No products in your cart </p>
              </div>
          </div>
      </div>
    )
  }
}

export default Search;
