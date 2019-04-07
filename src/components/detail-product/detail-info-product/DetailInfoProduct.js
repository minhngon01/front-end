import React from 'react';
import StarRating from '../../Fragment/StarRating/StarRating';
import TimeCountDown from '../../Fragment/TimeCountDown/TimeCountDown';
import { Transition, animated } from 'react-spring/renderprops';
import './detailinfoproduct.css';

class DetailInfoProduct extends React.Component{
  productsTab = [
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
            <b>1 review for Meizu M6 Note Blue</b>
            <div className="review-post d-flex flex-row">
              <div className="image-review-poster"/>
              <div className="content-review-poster f-flex flex-column">
                <div className="d-flex flex-row">
                  <StarRating/>
                  <div className="poster-name">cmsmasters</div>
                </div>
                <div className="date-review">October 12, 2017</div>
                <div className="content-review">Aenean semper varius pellentesque</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column">
              <b>Add a review</b>
              Your Rating
              <StarRating/>
              <textarea className="my-3"placeholder="Your Review"/>
              <input className="my-3" placeholder="Name *"/>
              <input className="my-3" placeholder="Email *"/>
              <div className="button-add-to-cart ">ADD REVIEW</div>
          </div>
        </div>
      </animated.div>
    )
  ]
  previousIndex =-1;
  state = { index: 0 }
  toggle = numberIndex => e => {
    this.previousIndex = this.state.index;
    this.setState({index : numberIndex});
  }
  render(){
    return(
      <div className="container ">
        <div className="row">
          <div className="col-sm-5 image-detail-product"/>
          <div className="col-sm-7">
            <h3 className="mt-3">Asus Zenbook ux360ca</h3>
            <StarRating/>
            <div className="d-flex flex-row mt-2">
              <div className="sale-price-detail-product">$900.00</div>
              <div className="cross-price-detail-product">$1,100.00</div>
            </div>
            <div className="box-time-countdown my-4">
              <TimeCountDown time="April 10, 2019 15:27:08"/>
            </div>
            <div className="description-detail-product">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique nibh ac ligula dapibus, quis ornare felis malesuada. Cras in feugiat diam. Donec euismod purus lorem, vel euismod sem pharetra at. Integer elit nulla, aliquet eget nisi lobortis, varius accumsan dui. Quisque semper dolor nibh, ac aliquet quam vehicula a. Aenean id consequat sapien, venenatis feugiat neque. Donec sit amet elit non ante eleifend sagittis sit amet eget mauris. Vestibulum nec pretium leo, sed lacinia odio. Vestibulum et tempor nunc. Etiam mattis porttitor lectus, vel egestas nunc dignissim ut.
            </div>
            <div className="d-flex flex-row my-3">
              <input type="number" className="input-number mr-4"/>
              <div className="detail--button-add-to-cart">ADD TO CARD</div>
            </div>
            <div className="categories-share">
              <div className="row ">
                <div className="col">Categories:</div>
                <div className="col">Cell Phones, Meizu</div>
              </div>
              <div className="row">
                <div className="col">Share:</div>
                <div className="col">Cell Phones, Meizu</div>
              </div>
            </div>
            <div>Add to Wishlist</div>
            <div>Compare</div>
          </div>
        </div>

        /*
          detail additional reviews part
        */
        <div className="review-part">
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
              { index => this.productsTab[index] }
            </Transition>)
            :
            (<Transition
              native
              items={this.state.index}
              from={{ opacity: 0, transform: 'translateY(0px)' }}
              enter={{ opacity: 1, transform: 'translateY(0px)' }}
              leave={{ opacity: 0,transform: 'translateY(100px)'}}>
              { index => this.productsTab[index] }
            </Transition>)
          }
          </div>
        </div>
      </div>
    );
  }
}

export default DetailInfoProduct;
