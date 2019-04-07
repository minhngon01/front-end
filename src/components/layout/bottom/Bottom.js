import React, { Component } from 'react';
import './bottom.css';
class Bottom extends Component{
  render(){
    return(
      <div className="bottom bg-dark p-5">
        <div className="m-5">
          <div className="row m-4 text-secondary">
              <div className="col-sm d-flex flex-column">
                  <h3 className="text-light">Products</h3>
                  <p>Apple Watch Series</p>
                  <p>Refurbished iPad 4th</p>
                  <p>Apple 9.7" iPad</p>
                  <p>Apple iPhone 6s 16GB</p>
                  <p>Apple Magic Mouse</p>
              </div>

              <div className="col-sm d-flex flex-column">
                  <h3 className="text-light">Customer Service</h3>
                  <p>News</p>
                  <p>FAQ</p>
                  <p>Shop</p>
                  <p>About us</p>
                  <p>Contacts</p>
              </div>

              <div className="col-sm d-flex flex-column">
                  <h3 className="text-light">Socials</h3>
                  <p>Twitter</p>
                  <p>Youtube</p>
                  <p>Instagram</p>
                  <p>Snapchat</p>
                  <p>Facebook</p>
              </div>

              <div className="col-sm d-flex flex-column">
                  <h3 className="text-light">Customer Care</h3>
                  <p>Sale</p>
                  <p>Shop</p>
                  <p>Cart</p>
                  <p>My Orders</p>
                  <p>Contacts</p>
              </div>
          </div>
      </div>
      </div>
    )
  }
}

export default Bottom;
