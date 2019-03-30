import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './filter.css';
class Filter extends React.Component{
  render(){
    return(
      <div className="filter">
          <div className="search-products-shop mb-4">
            <input type="text" className="input-search-shop" placeholder="Search products..."/>
            <FontAwesomeIcon className="icon-heart" icon="search" color="black"/>
          </div>
          <h5>Product categories</h5>
          <div className="product-categories mb-4">
            <input type="text" className="input-categories-shop" placeholder="Select a category"/>
            <FontAwesomeIcon className="icon-heart" icon="search" color="black"/>
          </div>
          <h5>Filter by price</h5>
          <div className="filter-by-price my-4">
            Price: $20 - $1,120
            <div className="filter-button my-3">FILTER</div>
          </div>
          <h5>Products</h5>
          <div className="products-shop">
          </div>
          <div className="carts-shop"></div>
      </div>
    )
  }
}
export default Filter;
