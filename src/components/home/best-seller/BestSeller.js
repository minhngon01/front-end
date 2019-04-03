import React,{Component} from 'react';
import "./bestseller.css";
import Slider from "react-slick";
import Cart from "../../Fragment/CartFragment/cart/Cart";
class BestSeller extends Component{
  render(){
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      customPaging: i => (
        <div
          style={{
            marginTop : "-500px",
            marginLeft : "450px",
            width: "10px",
            height:"10px",
            backgroundColor: "grey",
            border: "0px solid",
            borderRadius: "50%",
            position:"absolute",
            top:"0%"
          }}
        >
        </div>
      )
    };
    return(
      <div className="best-seller container">
          <h3>Best seller</h3>
          <div className="best-seller-box" id="container" >
                 <Slider {...settings}>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                  </Slider>
          </div>
      </div>
    )
  }

}
export default BestSeller;
