import React from 'react';
import Cart from '../../Fragment/CartFragment/cart/Cart';
function RelatedProducts(props){
  let relatedProducts=[
    {
      'product_name' : "Samsung Galaxy S8",
      'product_brand' : 'Samsung',
      'product_type' : 'Samsung Phone',
      'product_type' : 'Cell Phones',
      'product_price' : '$500.00',
      'product_amount' : 2,
      'product_rating' : 4,
      'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/14-3.jpg",
    },
    {
      'product_name' : "Samsung Galaxy J5 Black",
      'product_brand' : 'Samsung',
      'product_type' : 'Samsung Phone',
      'product_type' : 'Cell Phones',
      'product_price' : '$200.00',
      'product_amount' : 2,
      'product_rating' : 4,
      'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
    },
    {
      'product_name' : "Samsung Galaxy J5 Black",
      'product_brand' : 'Samsung',
      'product_type' : 'Samsung Phone',
      'product_type' : 'Cell Phones',
      'product_price' : '$200.00',
      'product_amount' : 2,
      'product_rating' : 4,
      'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
    },
    {
      'product_name' : "Sony Watch 3 SWR50",
      'product_brand' : 'Sony',
      'product_type' : 'Sony Watch',
      'product_type' : 'Smart Watch',
      'product_price' : '$100.00',
      'product_amount' : 2,
      'product_rating' : 4,
      'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/17-3.jpg",
    },
  ]

  return(
    <div className="container mb-5">
      <h2>Related Products</h2>
      <div className="row">
        {relatedProducts.map(element=>(<div className="col-sm-3"><Cart product={element}/></div>))}
      </div>
    </div>
  )
}
export default RelatedProducts;
