import React,{Component} from 'react';
import CartPromotion from '../../Fragment/CartFragment/CartPromotion/CartPromotion';
class NewProduct extends Component{
  render(){
    return(
      <div className="container">
      <div className="o-layout--2-col">
          <CartPromotion/>
          <CartPromotion/>
        </div>
      </div>
    )
  }
}
export default NewProduct
