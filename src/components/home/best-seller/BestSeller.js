import React,{Component} from 'react';
import "./bestseller.css";
import Slider from "react-slick";
import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";

class BestSeller extends Component{
  render(){
    return(
      <div className="best-seller container ">
          <h3>Best seller</h3>
          
          <div className="best-seller-box container-fluid" id="container" >
              
              <div className="row slide-best-seller" >
              
                <div className="card card-product col-sm m-3 p-3" >
                  <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg" alt="Card image cap"/>
                  <label for="" class="pre"></label>
                  <label for="" class="nxt"></label>
                  <blockquote className="blockquote mb-0 card-body text-center">
                    <a href="#">Cell Phones, Xiaomi</a>
                    <p>Xiaomi Mi Mix 2</p>
                    <div className="d-flex flex-column justify-content-center">
                        <p>$55.00</p>
                        <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                    </div>
                  </blockquote>
                </div>


               <div className="card card-product col-sm m-3 p-3" >
                      <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg" alt="Card image cap"/>
                      <label for="" class="pre"></label>
                      <label for="" class="nxt"></label>

                      <blockquote className="blockquote mb-0 card-body text-center">
                        <a href="#">Cell Phones, Xiaomi</a>
                        <p>Xiaomi Mi Mix 2</p>
                        <div className="d-flex flex-column justify-content-center">
                            <p>$55.00</p>
                            <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                        </div>
                      </blockquote>
              </div>


              <div className="card card-product col-sm m-3 p-3" >
                  <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417455" alt="Card image cap"/>
                  <blockquote className="blockquote mb-0 card-body text-center">
                    <a href="#">Apple, Iphone</a>
                    <p>Iphone XS</p>
                    <div className="d-flex flex-column justify-content-center">
                        <p>$1000.00</p>
                        <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                    </div>
                  </blockquote>
              </div>


              <div className="card card-product col-sm m-3 p-3" >
                  <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417455" alt="Card image cap"/>
                  <blockquote className="blockquote mb-0 card-body text-center">
                    <a href="#">Apple, Iphone</a>
                    <p>Iphone XS</p>
                    <div className="d-flex flex-column justify-content-center">
                        <p>$1000.00</p>
                        <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                    </div>
                  </blockquote>
              </div>
          
            </div>      
          </div>      
      </div>
    )
  }

}
export default BestSeller;
