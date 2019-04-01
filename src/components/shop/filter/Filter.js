import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './filter.css';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from 'react-select';

const devices = [
  { label: "Apple", value: 1 },
  { label: "Headphone", value: 2 },
  { label: "Monitor", value: 3 },
  { label: "Nokia", value: 4 },
  { label: "Samsung", value: 5 },
  { label: "Sony", value: 6 },
];

class Filter extends React.Component{
  render(){
    return(
      <body>
      <div className="filter">
          <div className="search-products-shop mb-4">
            <input type="text" className="input-search-shop" placeholder="Search products..."/>
            <FontAwesomeIcon className="icon-heart" icon="search" color="black"/>
          </div>
          <br/>


          <h5>Product categories</h5>
          <div className="app">
              <div className="container">
                <Select className= "dropdown-search" options={devices} placeholder = "Select a category" />
              </div>
          </div>
          <br/>


          <h5>Filter by price</h5> 
          <Range className ="filter">
          </Range>
          <div class="price_label">
            Price: 
            <span class="from">
                <span>$</span>20
            </span> — 
            <span class="to">
                <span>$</span>1,120  <button type="submit" class="filter-button"><b>FILTER</b></button>
            </span>   
          </div>


          <br/>
          
          <h5>Products</h5>

          <div className="products-shop">
          <ul className = "list-product">
            <li className="product-shop-img">
              <div className="rating-product">
                <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>

              </div>
            </li>
            <li className="product-shop-img"></li>
            <li className="product-shop-img"></li>
          </ul>
          </div>

          <div className="carts-shop">
          </div>

      </div>
      </body>
    )
  }


}
export default Filter;
