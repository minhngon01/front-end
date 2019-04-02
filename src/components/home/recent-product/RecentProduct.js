import React,{Component} from 'react';
import "./recentproduct.css"
import Cart from '../../Fragment/CartFragment/cart/Cart';
class RecentProduct extends Component{
  render(){
    return(
      <div className="recent container">
          <ul className="nav nav-recent">
              <li className="nav-item px-4"><a href="#">Recent</a></li>
              <li className="nav-item px-4"><a href="#">Featured</a></li>
              <li className="nav-item px-4"><a href="#">Top Rated</a></li>
              <li className="nav-item px-4"><a href="#">Sale</a></li>
          </ul>
          <div className="row">
            <div className="col-sm">
              <Cart/>
            </div>
            <div className="col-sm">
              <Cart/>
            </div>
            <div className="col-sm">
              <Cart/>
            </div>
            <div className="col-sm">
              <Cart/>
            </div>
            </div>
      </div>
    )
  }
}
export default RecentProduct;
