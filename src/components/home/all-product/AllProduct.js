import React,{Component} from 'react';
import "./AllProduct.css"
import Products from "../../Fragment/Products/products";

class AllProduct extends Component{
  render(){
    return(
      <div className="container">
        <div className="on-sale">
            <div className="row">
              <div className="col-sm-4 m-0 p-0" >
                <h3 className="product-heading"> Popular Products </h3>
                <h4 className="product-title"><b>Top rated products </b></h4>
                <Products/>
              </div>
              <div className="col-sm-4 m-0 p-0" >
                <h3 className="product-heading"> Featured Products </h3>
                <h4 className="product-title"><b> Products </b></h4>
                <Products/>
              </div>
             <div className="col-sm-4 m-0 p-0">
                <h3 className="product-heading"> On-sale Products </h3>
                <h4 className="product-title"><b>Recent Review</b> </h4>
                <Products/>
              </div>
            </div>
        </div>
    </div>
  )  
  }
}
export default AllProduct