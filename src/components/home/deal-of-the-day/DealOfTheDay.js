import React,{Component} from 'react';
import StarRating from "../../Fragment/StarRating/StarRating";
import CartSale from "../../Fragment/CartFragment/CartSale/CartSale";
import CartPromotion from "../../Fragment/CartFragment/CartPromotion/CartPromotion";
import axios from 'axios'
class DealOfTheDay extends Component{
  async componentDidMount(){
    const products = await axios({
      method : 'GET',
      url    : "localhost:3003/products/sale",
      params : {
        amount : 1,
      }
    })
  }
  product = {
      'product_name' : "Apple Fitness Watch",
      'product_brand' : 'Apple',
      'product_brand' : 'Smart Watches',
      'product_type' : 'Watch',
      'product_price' : '$150.00',
      'sale_price' : '$130.00',
      'product_amount' : 30,
      'product_rating' : 3,
      'sale_date': 'April 10, 2020 15:27:08',
      'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
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
