import React from 'react';
import {UserContext} from '../../context/UserProvider';

class Cart extends React.Component{
  render(){
    return (
      <div className= "container my-5">
        <h1 className="py-3">My cart</h1>
        <table class="table">
          <thead>
            <tr className="bg-primary" style={{color:"white"}}>
              <th scope="col">Delete</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Insert To Order</th>
            </tr>
          </thead>
          <tbody>
            <UserContext.Consumer>
              {
                (state) => {
                  return state.carts.length == 0 ?
                  (
                    <tr>
                      <th scope="row"></th>
                      <td>none</td>
                      <td>none</td>
                      <td>none</td>
                      <td>none</td>
                    </tr>
                )
                  :
                  state.carts.map( cart => {
                    let cartProduct = cart.products[0]
                    let img = {
                      backgroundImage   : "url(" + cartProduct['product_image_url'] + ")",
                      height : "100px",
                      width  : "100px",
                    };
                    return (<tr>
                      <th scope="row">
                        <div className="c-cart-panel__delete-icon" onClick={state.deleteFromCart(cartProduct['product_id'])}>x</div>
                      </th>
                      <td scope="row"><div className="c-cart-panel__cart-product__image" style={img}/></td>
                      <td>{cartProduct.product_name}</td>
                      <td>{cartProduct.product_price}</td>
                      <td >
                        <div className="c-card--basic__button" onClick={state.addToOrder(cartProduct['product_id'])}>ADD TO ORDER</div>
                      </td>
                    </tr>
                  )
                }
                )}
              }
            </UserContext.Consumer>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart ;
