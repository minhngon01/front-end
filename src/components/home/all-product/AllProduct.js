import React,{Component} from 'react';
import Product from "../../Fragment/Product/Product";

class AllProduct extends Component{
  products = {
    "top-rated-products" : [
      {
        'product_price' : '$168.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/11-2-540x540.jpg'
      },
      {
        'product_price' : '$800.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2015/05/9-3.jpg'
      },
      {
        'product_price' : '$900.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-2-540x540.jpg'
      }
    ],
    "products": [
      {
        'product_price' : '$60.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2015/05/29-2-540x540.jpg'
      },
      {
        'product_price' : '$300.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2015/05/8-3-540x540.jpg'
      },
      {
        'product_price' : '$400.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/05/3-540x540.jpg'
      }
    ],
    "recent-reviews": [
      {
        'product_price' : '$55.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/10-2-540x540.jpg'
      },
      {
        'product_price' : '$140.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/17-3-540x540.jpg'
      },
      {
        'product_price' : '$40.00',
        'product_image_url' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/05/3-540x540.jpg'
      }
    ]
  }
  render(){
    return(
      <div className="container my-5 pl-0">
        <div className="o-layout--3-col">
          <div className="d-flex flex-column align-items-start" >
            <h3 className="product-heading"> Popular Products </h3>
            <h5 className="product-title"><b>Top rated products </b></h5>
            {this.products['top-rated-products'].map(product => (<Product product={product}/>))}
          </div>
          <div className="d-flex flex-column align-items-start" >
            <h3 className="product-heading"> Featured Products </h3>
            <h5 className="product-title"><b> Products </b></h5>
            {this.products['products'].map(product => (<Product product={product}/>))}
          </div>
         <div className="d-flex flex-column align-items-start">
            <h3 className="product-heading"> On-sale Products </h3>
            <h5 className="product-title"><b>Recent Review</b> </h5>
            {this.products['recent-reviews'].map(product => (<Product product={product}/>))}
          </div>
        </div>
      </div>
    )
  }
}
export default AllProduct;
