import React,{Component} from 'react';
import "./bigproduct.css"
class BigProduct extends Component{
  render(){
    return(
      <div className="container on-sale">
          <div className="row">
            <div className="card-big-product card col-sm m-3 p-1" >
              <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2017/09/1-3.jpg" alt="Card image cap"/>
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
            <div className="card col-sm m-3 p-1" >
              <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2017/09/2-3.jpg" alt="Card image cap"/>
              <blockquote className="blockquote mb-0 card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
           <div className="card col-sm m-3 p-1">
              <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2017/05/4.jpg" alt="Card image cap"/>
              <blockquote className="blockquote mb-0 card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
          </div>
      </div>
    )
  }
}
export default BigProduct;
