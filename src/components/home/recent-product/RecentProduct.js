import React,{Component} from 'react';

import { Transition, animated } from 'react-spring/renderprops'

import Cart from '../../Fragment/CartFragment/cart/Cart';
import CartSale from '../../Fragment/CartFragment/CartSale/CartSale';
import "./recentproduct.css"

const products = [
  style => (
    <animated.div style={{ ...style}}>
      <div className="row animation-products">
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style}}>
      <div className="row animation-products">
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style}}>
      <div className="row animation-products">
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
        <div className="col-sm-3">
          <Cart/>
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style}}>
      <div className="row animation-products">
        <div className="col-sm-3">
          <CartSale/>
        </div>
        <div className="col-sm-3">
          <CartSale/>
        </div>
        <div className="col-sm-3">
          <CartSale/>
        </div>
        <div className="col-sm-3">
          <CartSale/>
        </div>
      </div>
    </animated.div>
  ),

]

class RecentProduct extends Component{
  previousIndex =-1;
  state = { index: 0 }
  toggle = numberIndex => e => {
    this.previousIndex = this.state.index;
    this.setState({index : numberIndex});

  }
  render(){
    return(
      <div className="recent container">
          <ul className="nav nav-recent">
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(0)}>Recent</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(1)}>Featured</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(2)}>Top Rated</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(3)}>Sale</a></li>
          </ul>

          <div className="recent-products-home">
          {
            this.state.index > this.previousIndex ?
            (<Transition
              native
              items={this.state.index}
              from={{ opacity: 0, transform: 'translateY(100px)' }}
              enter={{ opacity: 1, transform: 'translateY(0px)' }}
              leave={{ opacity: 0}}>
              { index => products[index] }
            </Transition>)
            :
            (<Transition
              native
              items={this.state.index}
              from={{ opacity: 0, transform: 'translateY(0px)' }}
              enter={{ opacity: 1, transform: 'translateY(0px)' }}
              leave={{ opacity: 0,transform: 'translateY(100px)'}}>
              { index => products[index] }
            </Transition>)
          }
          </div>

      </div>
    )
  }
}
export default RecentProduct;
