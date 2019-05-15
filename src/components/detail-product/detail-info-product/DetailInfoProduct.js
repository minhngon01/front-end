import React from 'react';
import StarRating from '../../Fragment/StarRating/StarRating';
import TimeCountDown from '../../Fragment/TimeCountDown/TimeCountDown';
import Review from '../../Fragment/Review/Review';
import axios from 'axios'
import { Transition, animated } from 'react-spring/renderprops';
import {UserContext} from '../../../context/UserProvider';
import  { Redirect } from 'react-router-dom'

class DetailInfoProduct extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      detailProductInfo : {},
      index: 0 ,
      directToLoginpage : false
    }
  }
  async componentDidMount(){
    var detailProduct = await axios({
      method : 'get',
      url    : 'http://localhost:3003/products/detail',
      params : {
        product_id : this.props.productid
      }
    })
    this.setState({detailProductInfo : detailProduct.data.products[0]})
    // console.log("@@@", detailProduct);
  }


  toggle = numberIndex => e => {
    this.previousIndex = this.state.index;
    this.setState({index : numberIndex});
  }
  checkSignIn = (addToCart,product,isLogin) => _ => {
    if(isLogin){
      addToCart(product.product_id)()
    }
    else {
      this.setState({directToLoginpage : true})
    }
  }

  render(){
    const info = this.state.detailProductInfo;
    let imageProducts = {
      backgroundImage : "url(" + info['product_image_url'] + ")"
    }

    var productsTab = [
      style => (
        <animated.div style={{ ...style}}>
          <div className="animation-products">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique nibh ac ligula dapibus, quis ornare felis malesuada. Cras in feugiat diam. Donec euismod purus lorem, vel euismod sem pharetra at. Integer elit nulla, aliquet eget nisi lobortis, varius accumsan dui. Quisque semper dolor nibh, ac aliquet quam vehicula a. Aenean id consequat sapien, venenatis feugiat neque. Donec sit amet elit non ante eleifend sagittis sit amet eget mauris. Vestibulum nec pretium leo, sed lacinia odio. Vestibulum et tempor nunc. Etiam mattis porttitor lectus, vel egestas nunc dignissim ut. Sed mollis nisi nisl, porta egestas lectus porttitor quis. Sed arcu neque, consectetur ut bibendum at, tincidunt ut elit.

          </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style}}>
          <div className="animation-products">
              <table class="table">
                  <tr>
                    <th scope="row">Color</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">Dimensions</th>
                    <td>Otto</td>

                  </tr>
                  <tr>
                    <th scope="row">Input Method</th>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">Country of Origin</th>
                    <td>@mdo</td>
                  </tr>
              </table>
          </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style}}>
          <div className="row animation-products">
            <div className="col-sm-8">
              <b>1 review for {" "+info.product_name}</b>
              <Review/>
            </div>
            <div className="col-sm-4 d-flex flex-column">
                <b>Add a review</b>
                Your Rating
                <StarRating/>
                <textarea className="my-2"placeholder="Your Review"/>
                <input className="my-2" placeholder="Name *"/>
                <input className="my-2" placeholder="Email *"/>
                <button className="c-review__input__add-review">ADD REVIEW</button>
            </div>
          </div>

        </animated.div>
      )
    ]

    console.log(info);
    return this.state.directToLoginpage ? <Redirect to="/signin"/> :
    (
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-5 c-detail-product__image" style={imageProducts}/>
          <div className="col-sm-7">
            <h3 className="c-detail-product__name mt-3">{info.product_name}</h3>
            <StarRating/>
            <div className="d-flex flex-row mt-2">
              <div className="c-detail-product__price-sale">{"$"+info.product_price}</div>
              <div className="c-detail-product__price-actual">{info.sale_price ? "$"+info.sale_price : ""}</div>
            </div>
            {
              info.sale_price &&
              <div className="c-detail-product__box-time my-4">
                <TimeCountDown time="April 10, 2020 15:27:08"/>
              </div>
            }
            <div className="c-detail-product__description">
             {info.product__description}
            </div>
            <div className="d-flex flex-row my-3">
              <UserContext.Consumer>
                {
                  (state) => <button className="c-detail-product__add-to-cart" onClick={this.checkSignIn(state.addToCart,info,state.isLogin)}>ADD TO CART</button>
                }
              </UserContext.Consumer>

            </div>
            <div className="categories-share">
              <div className="row ">
                <div className="col"><b>Categories:</b></div>
                <div className="col">{info.product_category}</div>
              </div>
              <div className="row">
                <div className="col"><b>Share:</b></div>
                <div className="col">{info.product_brand}</div>
              </div>
            </div>
            <div>Add to Wishlist</div>
            <div>Compare</div>
          </div>
        </div>

        <div className="c-review">
          <ul className="nav nav-recent my-5 d-flex justify-content-center ">
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(0)}>Description</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(1)}>Additional infomation</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(2)}>Reviews</a></li>
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
              { index => productsTab[index] }
            </Transition>)
            :
            (<Transition
              native
              items={this.state.index}
              from={{ opacity: 0, transform: 'translateY(0px)' }}
              enter={{ opacity: 1, transform: 'translateY(0px)' }}
              leave={{ opacity: 0,transform: 'translateY(100px)'}}>
              { index => productsTab[index] }
            </Transition>)
          }
          </div>
        </div>
      </div>
    );
  }
}

export default DetailInfoProduct;
