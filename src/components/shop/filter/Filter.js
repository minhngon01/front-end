import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './filter.css';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from 'react-select';
import StarRating from "../../Fragment/StarRating/StarRating";

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
          <br/>
          <h5>Products</h5>

          <div className="products-shop">
            <ul className = "products-list-filter">


              <li className = "container">
                  <a className = "box-product"> 
                    <img className = "img-product-filter"src = "https://cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/f/6fda03fbdf0073672946e3a58bf935da.jpg"/>
                  </a>

                  <div className = "row12">
                    <div class="price">
                      <span class="amount">
                      <span>
                        <span class="currencySymbol">
                          $
                        </span>
                      </span>
                          55.00
                      </span>
                    </div>
                    <div className={"rating-product"} >
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                    </div>
                  </div>
              </li>


              <li className = "container">
                <a className = "box-product"> 
                    <img className = "img-product-filter"src = "https://cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/f/6fda03fbdf0073672946e3a58bf935da.jpg"/>
                  </a>

                  <div className = "row12">
                    <div class="price">
                      <span class="amount">
                      <span>
                        <span class="currencySymbol">
                          $
                        </span>
                      </span>
                          55.00
                      </span>
                    </div>
                    <div className={"rating-product"} >
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                    </div>
                  </div>
              </li>

              <li className = "container">
                <a className = "box-product"> 
                    <img className = "img-product-filter"src = "https://cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/f/6fda03fbdf0073672946e3a58bf935da.jpg"/>
                </a>
                  <div className = "row12">
                    <div class="price">
                      <span class="amount">
                      <span>
                        <span class="currencySymbol">
                          $
                        </span>
                      </span>
                          55.00
                      </span>
                    </div>
                    <div className={"rating-product"} >
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
                    </div>
                  </div>
              </li>
            </ul>
          </div>

          <div className="carts-shop">
            <h5> Cart </h5>
            <p> No products in the cart </p>
          </div>

      </div>
      </body>
    )
  }


}
export default Filter;
