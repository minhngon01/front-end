import React from 'react';
import Cart from '../../Fragment/CartFragment/cart/Cart';
function RelatedProducts(props){
  let relatedProducts=[
    {
      'name-product' : "Samsung Galaxy S8",
      'branch' : 'Samsung',
      'sub-branch' : 'Samsung Phone',
      'type' : 'Cell Phones',
      'price' : '$500.00',
      'amount-available' : 2,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/14-3.jpg",
    },
    {
      'name-product' : "Samsung Galaxy J5 Black",
      'branch' : 'Samsung',
      'sub-branch' : 'Samsung Phone',
      'type' : 'Cell Phones',
      'price' : '$200.00',
      'amount-available' : 2,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
    },
    {
      'name-product' : "Samsung Galaxy J5 Black",
      'branch' : 'Samsung',
      'sub-branch' : 'Samsung Phone',
      'type' : 'Cell Phones',
      'price' : '$200.00',
      'amount-available' : 2,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
    },
    {
      'name-product' : "Sony Watch 3 SWR50",
      'branch' : 'Sony',
      'sub-branch' : 'Sony Watch',
      'type' : 'Smart Watch',
      'price' : '$100.00',
      'amount-available' : 2,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/17-3.jpg",
    },
  ]

  return(
    <div className="container">
      <h2>Related Products</h2>
      <div className="row">
        {relatedProducts.map(element=>(<div className="col-sm-3"><Cart product={element}/></div>))}
      </div>
    </div>
  )
}
export default RelatedProducts;
