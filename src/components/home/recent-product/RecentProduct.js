import React,{Component} from 'react';
import "./recentproduct.css"
class RecentProduct extends Component{
  render(){
    return(
      <div className="recent container py-4">
          <ul className="nav">
              <li className="nav-item px-4"><a href="#">Recent</a></li>
              <li className="nav-item px-4"><a href="#">Featured</a></li>
              <li className="nav-item px-4"><a href="#">Top Rated</a></li>
              <li className="nav-item px-4"><a href="#">Sale</a></li>
          </ul>
          <div className="row">
            <div className="recent-product-card card col-sm m-3 p-3">
              <img className="card-img-top" src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg" alt="Card image cap"/>
              <blockquote className="blockquote mb-0 card-body text-center">
                <a href="#">Cell Phones, Xiaomi</a>
                <p>Xiaomi Mi Mix 2</p>
                <div className="d-flex flex-column justify-content-center">
                    <p>$55.00</p>
                    <input className="btn border border-2 rounded py-3" value="ADD TO CART"/>
                </div>

                <div className="d-flex flex-row justify-content-center">
                </div>
              </blockquote>
            </div>
            <div className="card col-sm m-3">
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
           <div className="card col-sm m-3">
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
            <div className="card col-sm m-3">
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
export default RecentProduct;
