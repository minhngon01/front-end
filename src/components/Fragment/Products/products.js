import React, { Component }  from 'react';
import './products.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Products =  (props) => {
  return (
    <React.Fragment>
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
    
  </React.Fragment>
);
}

export default Products;