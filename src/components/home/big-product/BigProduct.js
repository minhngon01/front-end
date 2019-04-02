import React,{Component} from 'react';
// import "./bigproduct.css"


import CartSale from "../../Fragment/CartFragment/CartSale/CartSale";
// import cartHOC from "../../Fragment/CartFragment";
class BigProduct extends Component{
  render(){
    return(
      <div className="container on-sale">
          <div className="row">
            <div className="col-sm-4 m-0 p-0" >
              <CartSale/>
            </div>
            <div className="col-sm-4 m-0 p-0" >
              <CartSale/>
            </div>
           <div className="col-sm-4 m-0 p-0">
              <CartSale/>
            </div>
          </div>
      </div>
    )
  }
}
export default BigProduct;
