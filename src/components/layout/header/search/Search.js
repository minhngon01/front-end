import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import CartPanel from '../../../Fragment/Cart/CartPanel';
import MenuNav from '../menu-nav/MenuNav';
import {UserContext} from '../../../../context/UserProvider';
import axios from 'axios';
import { Route, Redirect } from 'react-router';

class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      products: [],
      query : "",
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    // var query = this.input.value;
    if(this.input.value.length == 0 ){
      this.setState({query : " "});
    }
    else
      this.setState({query : this.input.value});
    // this.componentDidMoun(query);
  }


  render(){
    if(this.state.query.length > 0) {
      this.setState({query : ""})
      return <Redirect to={"/search/"+this.state.query}/>
    }
    return(
      <React.Fragment>
      <div className="c-navBar__middle-bar mb-3">
          <Link to="/"><img className="c-navBar__middle-bar__logo"  src="https://devicer.cmsmasters.net/wp-content/uploads/2018/03/device-home-1-logo-retina.png" alt="Card image cap"/></Link>
          <div className="c-navBar__middle-bar__right">
            <div className="c-search-bar c-navBar__middle-bar__search">

            <div class="selectdiv">
              <label>
                  <select className="c-search-bar__selection">
                      <option selected> All categories </option>
                      <option>Camera</option>
                      <option>Computer</option>
                      <option>Headphone</option>
                      <option>Smart Phone</option>
                      <option>TV</option>
                  </select>
              </label>
            </div>
                <form onSubmit = {this.onSubmit}>
                <input type="text" className="c-search-bar__input" placeholder="Search for products" name="product_name"
                ref = {input => this.input = input}
                 />
                 </form>

            </div>
            <UserContext.Consumer>
              { state =>
            <div className="c-cart c-navBar__middle-bar__cart">

                  <div className="c-cart__icon">
                    <div class="c-cart__number-products">{state.carts.length}</div>
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
            }
          </UserContext.Consumer>

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
