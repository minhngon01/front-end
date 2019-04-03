import React,{Component} from 'react';
// import "./bigproduct.css"


import CartSale from "../../Fragment/CartFragment/CartSale/CartSale";
// import cartHOC from "../../Fragment/CartFragment";
class BigProduct extends Component{
  render(){
    return(
      <div className="container">
        <div className="on-sale">
            <div className="row">
              <div className="col-sm-4" >
                <CartSale/>
              </div>
              <div className="col-sm-4" >
                <CartSale/>
              </div>
             <div className="col-sm-4">
                <CartSale/>
              </div>
            </div>
        </div>
    </div>
    )
  }
}
export default BigProduct;
