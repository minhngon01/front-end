import React from 'react';
import './aboutus.css';
// import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import PopularNews from '../../home/popular-new/PopularNew'

class AboutUs extends React.Component{
  render(){
    return(
      <div className = "container">	

        <div className = "row">
        	<div className = "row-inner" id="hello-here-we-are">
            <div className="column-heading">
              <div>
                <h2>Hello!</h2>
              </div>
              <div>
                <h2>Here we are.</h2>
              </div>
            </div>   
        	</div>
        </div>


        <div className="row">
            <div className="column-one-half">
              <div className="column-inner">
                <div id="heading-3xtu">
                  <h3>We will help you to choose</h3>
                </div>

                <div id="heading-3xty">
                  <h2>We offer a wide range of electronics, 
                   appliances and various consumer products from clothing to alcoholic beverages.</h2>
                </div>
              </div>
            </div>

            <div className="column-one-half" id="column-1c2h3d">
            </div>

        </div>


          <div className="row">
            <div className="column-one-fourth">
              <div className="icon">
                <FontAwesomeIcon className="icon-cart pr-2" icon="home" size="3x" color="blue"/>
              </div>

              <div className="count-up">
                <CountUp end={2345} duration={2} precision={1}/>
              </div>

              <div>
                <span class="cmsmasters_counter_subtitle">goods available for purchase </span>
              </div>
            </div>

            <div className="column-one-fourth">
              <div className="icon">
                <FontAwesomeIcon className="icon-cart pr-2" icon="paper-plane" size="3x" color="blue"/>
              </div>

              <div className="count-up">
                <CountUp end={3758} delay={0.5} duration={2} precision={1}/>
              </div>

              <div>
                <span class="cmsmasters_counter_subtitle">returning customers</span>
              </div>
            </div>

            <div className="column-one-fourth">
              <div className="icon">
                <FontAwesomeIcon className="icon-cart pr-2" icon="home" size="3x" color="blue"/>
              </div>

              <div className="count-up">
                <CountUp end={837} delay={1}duration={2} precision={1}/>
              </div>

              <div>
                <span class="cmsmasters_counter_subtitle">of users visited</span>
              </div>
            </div>

            <div className="column-one-fourth">
              <div className="icon">
                <FontAwesomeIcon className="icon-cart pr-2" icon="rocket" size="3x" color="blue"/>
              </div>

              <div className="count-up">
                <CountUp end={1285} delay={1.5} duration={2} precision={1}/>
              </div>

              <div>
                <span class="cmsmasters_counter_subtitle">new arrivals</span>
              </div>
            </div>

          </div>

          <div className="row">

            <div className="column-one-half" id="column-1c2h3e">
            </div>
            <div className="column-one-half">
              <div className="column-inner-1">
                <div id="heading-3xtu">
                  <h3>We are trusted</h3>
                </div>

                <div id="heading-3xty">
                  <h2>Our main goal and fundamental principle in the work is the satisfaction of customers – 
                  both retail buyers and organizations.</h2>
                </div>
              </div>
            </div>


        </div>

        <div className="row" id="new-popular">
            <PopularNews/>
        </div>
     
      </div>
    )
  }
}

export default AboutUs;
