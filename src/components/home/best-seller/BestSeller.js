import React,{Component} from 'react';
import "./bestseller.css";
import Slider from "react-slick";
import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";
import Cart from "../../Fragment/CartFragment/cart/Cart";

class BestSeller extends Component{
  render(){
    return(
      <div className="best-seller container">
          <h3>Best seller</h3>

          <div className="best-seller-box" id="container" >

              <div className="row slide-best-seller" >

                <div className="col-sm" >
                    <Cart/>
                </div>
                <div className="col-sm" >
                    <Cart/>
                </div>
                <div className="col-sm" >
                    <Cart/>
                </div>
                <div className="col-sm" >
                    <Cart/>
                </div>
                <div className="col-sm" >
                    <Cart/>
                </div>
                <div className="col-sm" >
                    <Cart/>
                </div>
            </div>
          </div>
      </div>
    )
  }

}
export default BestSeller;
