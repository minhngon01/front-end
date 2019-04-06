import React,{Component} from 'react';
import "./AllProduct.css"
import Product from "../../Fragment/Product/Product";

class AllProduct extends Component{
  products = {
    "top-rated-products" : [
      {
        'price' : '$168.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/11-2-540x540.jpg'
      },
      {
        'price' : '$800.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2015/05/9-3.jpg'
      },
      {
        'price' : '$900.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-2-540x540.jpg'
      }
    ],
    "products": [
      {
        'price' : '$60.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2015/05/29-2-540x540.jpg'
      },
      {
        'price' : '$300.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2015/05/8-3-540x540.jpg'
      },
      {
        'price' : '$400.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/05/3-540x540.jpg'
      }
    ],
    "recent-reviews": [
      {
        'price' : '$55.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/10-2-540x540.jpg'
      },
      {
        'price' : '$140.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/17-3-540x540.jpg'
      },
      {
        'price' : '$40.00',
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/05/3-540x540.jpg'
      }
    ]
  }
  render(){
    return(
      <div className="container my-5 pl-0">
        <div className="row">
          <div className="col-sm-4 d-flex flex-column align-items-start" >
            <h3 className="product-heading"> Popular Products </h3>
            <h4 className="product-title"><b>Top rated products </b></h4>
            {this.products['top-rated-products'].map(product => (<Product product={product}/>))}
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-start" >
            <h3 className="product-heading"> Featured Products </h3>
            <h4 className="product-title"><b> Products </b></h4>
            {this.products['products'].map(product => (<Product product={product}/>))}
          </div>
         <div className="col-sm-4 d-flex flex-column align-items-start">
            <h3 className="product-heading"> On-sale Products </h3>
            <h4 className="product-title"><b>Recent Review</b> </h4>
            {this.products['recent-reviews'].map(product => (<Product product={product}/>))}
          </div>
        </div>
      </div>
    )
  }
}
export default AllProduct;
