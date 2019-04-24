import React,{Component} from 'react';
import StarRating from "../../Fragment/StarRating/StarRating";
import CartSale from "../../Fragment/CartFragment/CartSale/CartSale";
import CartPromotion from "../../Fragment/CartFragment/CartPromotion/CartPromotion";
class DealOfTheDay extends Component{
  product = {
      'name-product' : "Apple Macbook",
      'branch' : 'Apple',
      'sub-branch' : 'Macbook',
      'type' : 'Laptop',
      'price' : '$1200.00',
      'sale-price' : '$800.00',
      'amount-available' : 20,
      'rating' : 4,
      'time': 'April 10, 2020 15:27:08',
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
  }
  render(){
    return(
      <div className="container">
          <h3>Deal of the days</h3>
          <div className="o-layout--3-5-col">
            <CartSale product= {this.product}/>
            <CartPromotion/>
          </div>

          </div>
    )
  }
}
export default DealOfTheDay;
