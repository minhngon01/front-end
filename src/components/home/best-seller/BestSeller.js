import React,{Component} from 'react';
import "./bestseller.css"
class BestSeller extends Component{
  render(){
    return(
      <div className="best-seller container ">
          <h3>Best seller</h3>
          <div className="best-seller-box container-fluid " >
              <div className="row slide-best-seller" >
                <div className="card card-product col-sm m-3 p-3" >
                  <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg" alt="Card image cap"/>
                  <blockquote className="blockquote mb-0 card-body text-center">
                    <a href="#">Cell Phones, Xiaomi</a>
                    <p>Xiaomi Mi Mix 2</p>
                    <div className="d-flex flex-column justify-content-center">
                        <p>$55.00</p>
                        <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                    </div>
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
                  </blockquote>
                </div>
               <div className="card card-product col-sm m-3 p-3" >
                      <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg" alt="Card image cap"/>
                      <blockquote className="blockquote mb-0 card-body text-center">
                        <a href="#">Cell Phones, Xiaomi</a>
                        <p>Xiaomi Mi Mix 2</p>
                        <div className="d-flex flex-column justify-content-center">
                            <p>$55.00</p>
                            <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                        </div>
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
                      </blockquote>
              </div>
              <div className="card card-product col-sm m-3 p-3" >
                  <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg" alt="Card image cap"/>
                  <blockquote className="blockquote mb-0 card-body text-center">
                    <a href="#">Cell Phones, Xiaomi</a>
                    <p>Xiaomi Mi Mix 2</p>
                    <div className="d-flex flex-column justify-content-center">
                        <p>$55.00</p>
                        <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                    </div>
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

                  </blockquote>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
export default BestSeller;
