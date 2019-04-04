import React,{Component} from 'react';
// import "./bigproduct.css"


import CartSale from "../../Fragment/CartFragment/CartSale/CartSale";
// import cartHOC from "../../Fragment/CartFragment";
class BigProduct extends Component{

  saleProducts = [
    {
      'name-product' : "Apple Macbook",
      'branch' : 'Apple',
      'sub-branch' : 'Macbook',
      'type' : 'Laptop',
      'price' : '$1200.00',
      'sale-price' : '$800.00',
      'amount-available' : 20,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
    },
    {
      'name-product' : "3M PF Apple iMac",
      'branch' : 'Apple',
      'sub-branch' : 'Apple iMac, Laptops',
      'type' : 'Laptops',
      'price' : '$120.00',
      'sale-price' : '$80.00',
      'amount-available' : 20,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/4-2.jpg",
    },
    {
      'name-product' : "Apple Fitness Watch",
      'branch' : 'Apple',
      'sub-branch' : 'Smart Watches',
      'type' : 'Watch',
      'price' : '$150.00',
      'sale-price' : '$130.00',
      'amount-available' : 30,
      'rating' : 3,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/26-2.jpg",
    }
  ]
  render(){
    return(
      <div className="container">
        <div className="on-sale">
            <div className="row">
              {
                this.saleProducts.map(product => {
                  
                  return(
                  <div className="col-sm-4">
                    <CartSale product={product}/>
                  </div>
                  )
              }
              )}

            </div>
        </div>
    </div>
    )
  }
}
export default BigProduct;
