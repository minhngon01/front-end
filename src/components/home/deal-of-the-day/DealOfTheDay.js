import React,{Component} from 'react';
import "./dealoftheday.css"
import StarRating from "../../Fragment/StarRating/StarRating";

class DealOfTheDay extends Component{
  render(){
    return(
      <div className="container deal-of-the-days">
          <h3 className="deal-of-the-day-title">Deal of the days</h3>
          <div className="d-flex flex-row align-items-start justify-content-between">
            <div className="cart-product-DealOfTheDay d-flex flex-row">
            <div className="card-img-top-modify-DealOfTheDay" />
            <blockquote className="d-flex flex-column justify-content-center align-items-start  blockquote mb-0 card-body text-center">
              <StarRating/>
              <p className="name-product-sale">Meizu M6 Note</p>
              <div className="d-flex align-items-center justify-content-center">
                  <p className="cross-price">$400.00</p>
                  <p className="sale-price">$350.00</p>
              </div>
              <div className="describe-product-deal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo em solo tempor incididunt ut labore et dolore magna</div>
              <div className="d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column m-1">
                        <p className="time-figure">33</p>
                        <p className="time-word">DAY</p>
                    </div>
                    <div className="d-flex flex-column m-1">
                        <p className="time-figure">12</p>
                        <p className="time-word">HRS</p>
                    </div>
                    <div className="d-flex flex-column m-1">
                        <p className="time-figure">13</p>
                        <p className="time-word">MIN</p>
                    </div>
                    <div className="d-flex flex-column m-1">
                        <p className="time-figure">26</p>
                        <p className="time-word">SEC</p>
                    </div>
                </div>

            </blockquote>
            <div className="sale-box">SALE!</div>
          </div>
          <div className="card-best-digital">
            <div className="card-img-top-modify-best-digital" />
              <h5 className="best-digital">Best Digital</h5>
              <p className="sale-iphone-x">Sale iPhone X</p>
              <p className="best-digital-cross-price">$240</p>
              <p className="best-digital-sale-price">$1199</p>
            </div>
          </div>
      </div>
    )
  }
}
export default DealOfTheDay;
