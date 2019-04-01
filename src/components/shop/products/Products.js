import React from 'react';
import Cart from './cart/Cart';
class Products extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">

          <div className="col-sm-4">
            <Cart/>
          </div>

          <div className="col-sm-4">
            <Cart/>
          </div>

          <div className="col-sm-4">
            <Cart/>
          </div>

          <div className="col-sm-4">
            <Cart/>
          </div>

          <div className="col-sm-4">
            <Cart/>
          </div>

          <div className="col-sm-4">
            <Cart/>
          </div>
          
        </div>
      </div>
    )
  }
}
export default Products;
