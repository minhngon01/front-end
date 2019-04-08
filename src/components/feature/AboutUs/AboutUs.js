import React from 'react';
import './aboutus.css';
// import StarRating from "../../StarRating/StarRating";
import PopularNews from '../../home/popular-new/PopularNew'
import CountUpComponent from './CountUp/CountUpComponent';
class AboutUs extends React.Component{
  countUpContents = [
    {
      icon        : "home",
      countNumber : 2345,
      content     : "goods available for purchase"
    },
    {
      icon        : "paper-plane",
      countNumber : 3758,
      content     : "returning customers",
    },
    {
      icon        : "home",
      countNumber : 837,
      content     : "of users visited",
    },
    {
      icon        : "rocket",
      countNumber : 1285,
      content     : "new arrivals",
    }
  ]
  render(){
    return(
      <div className = "container">

        <div className="row">
        	<div className = "row-inner" id="hello-here-we-are">
            <div className="column-heading">
              <h2>Hello!</h2>
              <h2>Here we are.</h2>
            </div>
        	</div>
        </div>

        <div className="row my-5">
            <div className="col-sm-6 d-flex flex-column justify-content-center">
              <h3 className="heading-3xtu">We will help you to choose</h3>
              <h2 className="heading-3xty">We offer a wide range of electronics,
               appliances and various consumer products from clothing to alcoholic beverages.</h2>
            </div>
            <div className="col-sm-6" id="column-1c2h3d"/>
        </div>

        <div className="row my-5">
            {this.countUpContents.map(element =>(<div className="col-sm-3"><CountUpComponent contents={element}/></div>))}
        </div>

        <div className="row my-5">
          <div className="col-sm-6" id="column-1c2h3e"/>
          <div className="col-sm-6 d-flex flex-column justify-content-center">
            <h3 className="heading-3xtu">We are trusted</h3>
            <h2 className="heading-3xty">Our main goal and fundamental principle in the work is the satisfaction of customers –
            both retail buyers and organizations.</h2>
          </div>
        </div>

        <PopularNews/>
      </div>
    )
  }
}

export default AboutUs;
