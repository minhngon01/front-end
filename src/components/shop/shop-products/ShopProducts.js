import React from 'react';
import Cart from '../../Fragment/CartFragment/cart/Cart';
// import ReactPaginate from 'react-paginate';
class ShopProducts extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="o-layout--3-col--shop">
          {this.props.products.map(product => (
              <Cart product={product}/>
          ))}
        </div>
      </div>
    )
  }
}
export default ShopProducts;
