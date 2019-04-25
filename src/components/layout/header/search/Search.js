import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import CartPanel from '../../../Fragment/Cart/CartPanel';
import MenuNav from '../menu-nav/MenuNav';
class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      toggle : false,
    }
  }
  render(){
    return(
      <React.Fragment>
      <div className="c-navBar__middle-bar">
          <Link to="/"><img className="c-navBar__middle-bar__logo"  src="https://devicer.cmsmasters.net/wp-content/uploads/2018/03/device-home-1-logo-retina.png" alt="Card image cap"/></Link>
          <div className="c-navBar__middle-bar__right">
            <div className="c-search-bar c-navBar__middle-bar__search">
                <div className="dropdown">
                  <button className="c-search-bar__dropdown-button dropdown-toggle  " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    All categories
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <input type="text" className="c-search-bar__input" placeholder="Search for product"/>
            </div>

            <div className="c-cart c-navBar__middle-bar__cart">
                <div className="c-cart__icon">
                  <div class="c-cart__number-products">1</div>
                  <FontAwesomeIcon className="icon-cart" icon="cart-plus" size="3x" color="DarkSlateGrey"/>
                </div>
                <div className="c-cart__your-cart">
                    <p className="m-0 font-weight-light">Your cart</p>
                    <p>$589.00</p>
                </div>
                <div className="c-cart__dropdown-content">
                  <CartPanel/>
                </div>
            </div>

            <div
              className="c-navBar__middle-bar__button"
              onClick={() => {this.setState({toggle: !this.state.toggle}); console.log(this.state)}}
            >
              <div className="c-navBar__middle-bar__button__stick"/>
              <div className="c-navBar__middle-bar__button__stick"/>
              <div className="c-navBar__middle-bar__button__stick"/>
            </div>
          </div>
      </div>
      <MenuNav toggle={this.state.toggle}/>
      </React.Fragment>
    )
  }
}

export default Search;
