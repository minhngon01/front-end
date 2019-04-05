import React from 'react';
import StarRating from '../../Fragment/StarRating/StarRating';
import TimeCountDown from '../../Fragment/TimeCountDown/TimeCountDown';

class DetailInfoProduct extends React.Component{
  render(){
    return(
      <div>
        <div className="">
          <div className="image-detail-product"/>
          <div className="">
            <h3>Asus Zenbook ux360ca</h3>
            <StarRating/>
            <div className="sale-price-detail-product">$900.00</div>
            <div className="cross-price-detail-product">$1,100.00</div>
            <div className="box-time-countdown">
              <TimeCountDown />
            </div>
            <div className="description-detail-product">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique nibh ac ligula dapibus, quis ornare felis malesuada. Cras in feugiat diam. Donec euismod purus lorem, vel euismod sem pharetra at. Integer elit nulla, aliquet eget nisi lobortis, varius accumsan dui. Quisque semper dolor nibh, ac aliquet quam vehicula a. Aenean id consequat sapien, venenatis feugiat neque. Donec sit amet elit non ante eleifend sagittis sit amet eget mauris. Vestibulum nec pretium leo, sed lacinia odio. Vestibulum et tempor nunc. Etiam mattis porttitor lectus, vel egestas nunc dignissim ut.
            </div>
            <div className="input-number"/>
            <div className="button-add-to-cart"/>
            <div className="row">
              <div className="col">Categories:</div>
              <div className="col">Cell Phones, Meizu</div>
            </div>
            <div className="row">
              <div className="col">Share:</div>
              <div className="col">Cell Phones, Meizu</div>
            </div>
            <div>Add to Wishlist</div>
            <div>Compare</div>
          </div>
        </div>

        /*
          detail additional reviews part
        */
      </div>
    );
  }
}
