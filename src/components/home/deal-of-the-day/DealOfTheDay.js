import React,{Component} from 'react';
import "./dealoftheday.css"
class DealOfTheDay extends Component{
  render(){
    return(
      <div className="container deal-of-the-days">
          <h3>Deal of the days</h3>
          <div className="d-flex flex-row">
            <div className="card-product-deal card col-sm m-3  d-flex flex-row">
                <img  src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/9-3.jpg" alt="Card image cap"/>
                <blockquote className="blockquote mb-0 card-body text-center">
                {
                // <div className="d-flex flex-row justify-content-center">
                //     <span style="color: Tomato">
                //       <i className="fas fa-star"/>
                //     </span>
                //     <span style="color: Tomato">
                //       <i className="fas fa-star"/>
                //     </span>
                //     <span style="color: Tomato">
                //       <i className="fas fa-star"/>
                //     </span>
                //     <span style="color: Tomato">
                //       <i className="fas fa-star"/>
                //     </span>
                //     <span style="color: Tomato">
                //       <i className="fas fa-star"/>
                //     </span>
                // </div>
              }
                <p>Meizu M6 Note</p>
                <div className="d-flex justify-content-center">
                    <p>$400.00</p>
                    <p>$350.00</p>
                </div>
                <div className="d-flex flex-row justify-content-center">
                      <div className="d-flex flex-column m-1">
                          <p>33</p>
                          <p>DAY</p>
                      </div>
                      <div className="d-flex flex-column m-1">
                          <p>12</p>
                          <p>HRS</p>
                      </div>
                      <div className="d-flex flex-column m-1">
                          <p>13</p>
                          <p>MIN</p>
                      </div>
                      <div className="d-flex flex-column m-1">
                          <p>26</p>
                          <p>SEC</p>
                      </div>
                  </div>
              </blockquote>
            </div>
          <div className="card bg-dark text-white p-1">
            <img className="card-img card-second"  src="https://devicer.cmsmasters.net/wp-content/uploads/2017/05/4.jpg" alt="Card image"/>
            <div className="card-img-overlay m-1">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
          </div>
      </div>
    )
  }
}
export default DealOfTheDay;
