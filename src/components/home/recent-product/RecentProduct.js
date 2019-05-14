import React,{Component} from 'react';

import { Transition, animated } from 'react-spring/renderprops'

import Cart from '../../Fragment/CartFragment/cart/Cart';
import CartSale from '../../Fragment/CartFragment/CartSale/CartSale';
import "./recentproduct.css"
import axios from 'axios'


class RecentProduct extends Component{
  constructor(props){
    super(props);
    this.state = {
      topRatedProduct : [],
      saleProduct : [],
      recentProduct : [],
      featuredProduct : [],
      index: 0
    }
  }
  getToprated = () =>  axios({
    method : 'GET',
    url    : "http://localhost:3003/products/rate",
    params : {
      amount : 4,
    }
  })

  getFeatureProduct = () => axios({
    method : 'GET',
    url    : "http://localhost:3003/products/bestseller",
    params : {
      amount : 4,
    }
  })
  getSaleProduct = () => axios({
    method : 'GET',
    url    : "http://localhost:3003/products/sale",
    params : {
      amount : 4,
    }
  })
  getRecentProduct = () => axios({
    method : 'GET',
    url    : "http://localhost:3003/products/newproduct",
    params : {
      amount : 4,
    }
  })

  async componentDidMount(){
    var topRatedProduct = await this.getToprated()
    var  saleProduct =  await this.getSaleProduct()
    var recentProduct = await this.getRecentProduct()
    var featuredProduct = await this.getFeatureProduct()

    this.setState({
        topRatedProduct : topRatedProduct.data.products,
        saleProduct     : saleProduct.data.products,
        recentProduct   : recentProduct.data.products,
        featuredProduct : featuredProduct.data.products
      })
  }



  previousIndex =-1;
  toggle = numberIndex => e => {
    this.previousIndex = this.state.index;
    this.setState({index : numberIndex});
  }
  render(){
    var productsTab = [
      style => (
        <animated.div style={{ ...style}}>
          <div className="o-layout--4-col animation-products">
            {
              this.state.recentProduct.map( product => (
                  <Cart product={product}/>
              ))
            }
          </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style}}>
          <div className="o-layout--4-col animation-products">
            {
              this.state.featuredProduct.map( product => (
                  <Cart product={product}/>
              ))
            }
          </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style}}>
          <div className="o-layout--4-col animation-products">
            {
              this.state.topRatedProduct.map( product => (
                  <Cart product={product}/>
              ))
            }
          </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style}}>
            <div className="o-layout--4-col animation-products">
            {
                this.state.saleProduct.map( product => (
                  <CartSale product={product}/>
              ))
            }
            </div>
        </animated.div>
      ),
    ]
    return(
      <div className="container o-layout__shop-product my-4">
          <ul className="nav nav-recent my-3">
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(0)}>Recent</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(1)}>Featured</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(2)}>Top Rated</a></li>
              <li className="nav-item px-4"><a className="recent-link" onClick={this.toggle(3)}>Sale</a></li>
          </ul>

          <div className="recent-products-home">
          {
            this.state.index > this.previousIndex ?
            (<Transition
              native
              items={this.state.index}
              from={{ opacity: 0, transform: 'translateY(100px)' }}
              enter={{ opacity: 1, transform: 'translateY(0px)' }}
              leave={{ opacity: 0}}>
              { index => productsTab[index] }
            </Transition>)
            :
            (<Transition
              native
              items={this.state.index}
              from={{ opacity: 0, transform: 'translateY(0px)' }}
              enter={{ opacity: 1, transform: 'translateY(0px)' }}
              leave={{ opacity: 0,transform: 'translateY(100px)'}}>
              { index => productsTab[index] }
            </Transition>)
          }
          </div>

      </div>
    )
  }
}
export default RecentProduct;



// products = {
//   'recent-products':[
//     {
//       'product_name' : "Samsung Galaxy S8",
//       'product_brand' : 'Samsung',
//       'product_brand' : 'Samsung Phone',
//       'product_type' : 'Cell Phones',
//       'product_price' : '$500.00',
//       'product_amount' : 2,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/14-3.jpg",
//     },
//     {
//       'product_name' : "Samsung Galaxy J5 Black",
//       'product_brand' : 'Samsung',
//       'product_brand' : 'Samsung Phone',
//       'product_type' : 'Cell Phones',
//       'product_price' : '$200.00',
//       'product_amount' : 2,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
//     },
//     {
//       'product_name' : "Samsung Galaxy J5 Black",
//       'product_brand' : 'Samsung',
//       'product_brand' : 'Samsung Phone',
//       'product_type' : 'Cell Phones',
//       'product_price' : '$200.00',
//       'product_amount' : 2,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
//     },
//     {
//       'product_name' : "Sony Watch 3 SWR50",
//       'product_brand' : 'Sony',
//       'product_brand' : 'Sony Watch',
//       'product_type' : 'Smart Watch',
//       'product_price' : '$100.00',
//       'product_amount' : 2,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/17-3.jpg",
//     },
//   ],
//   'featured-products':[
//     {
//       'product_name' : "Apple Macbook",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Macbook',
//       'product_type' : 'Laptop',
//       'product_price' : '$1200.00',
//       'sale_price' : '$800.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
//     },
//     {
//       'product_name' : "3M PF Apple iMac",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Apple iMac, Laptops',
//       'product_type' : 'Laptops',
//       'product_price' : '$120.00',
//       'sale_price' : '$80.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/4-2.jpg",
//     },
//     {
//       'product_name' : "Apple Fitness Watch",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Smart Watches',
//       'product_type' : 'Watch',
//       'product_price' : '$150.00',
//       'sale_price' : '$130.00',
//       'product_amount' : 30,
//       'product_rating' : 3,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/26-2.jpg",
//     },
//     {
//       'product_name' : "Apple Macbook",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Macbook',
//       'product_type' : 'Laptop',
//       'product_price' : '$1200.00',
//       'sale_price' : '$800.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
//     }
//   ],
//   'top-rated-products':[
//     {
//       'product_name' : "Apple Macbook",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Macbook',
//       'product_type' : 'Laptop',
//       'product_price' : '$1200.00',
//       'sale_price' : '$800.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
//     },
//     {
//       'product_name' : "3M PF Apple iMac",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Apple iMac, Laptops',
//       'product_type' : 'Laptops',
//       'product_price' : '$120.00',
//       'sale_price' : '$80.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/4-2.jpg",
//     },
//     {
//       'product_name' : "Apple Fitness Watch",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Smart Watches',
//       'product_type' : 'Watch',
//       'product_price' : '$150.00',
//       'sale_price' : '$130.00',
//       'product_amount' : 30,
//       'product_rating' : 3,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/26-2.jpg",
//     },
//     {
//       'product_name' : "Apple Macbook",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Macbook',
//       'product_type' : 'Laptop',
//       'product_price' : '$1200.00',
//       'sale_price' : '$800.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
//     }
//   ],
//   'sale-products':[
//     {
//       'product_name' : "Apple Macbook",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Macbook',
//       'product_type' : 'Laptop',
//       'product_price' : '$1200.00',
//       'sale_price' : '$800.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'time': 'April 10, 2019 15:27:08',
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
//     },
//     {
//       'product_name' : "3M PF Apple iMac",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Apple iMac, Laptops',
//       'product_type' : 'Laptops',
//       'product_price' : '$120.00',
//       'sale_price' : '$80.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'time': 'April 10, 2019 15:27:08',
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/4-2.jpg",
//     },
//     {
//       'product_name' : "Apple Fitness Watch",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Smart Watches',
//       'product_type' : 'Watch',
//       'product_price' : '$150.00',
//       'sale_price' : '$130.00',
//       'product_amount' : 30,
//       'product_rating' : 3,
//       'time': 'April 10, 2019 15:27:08',
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/26-2.jpg",
//     },
//     {
//       'product_name' : "Apple Macbook",
//       'product_brand' : 'Apple',
//       'product_brand' : 'Macbook',
//       'product_type' : 'Laptop',
//       'product_price' : '$1200.00',
//       'sale_price' : '$800.00',
//       'product_amount' : 20,
//       'product_rating' : 4,
//       'time': 'April 10, 2019 15:27:08',
//       'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
//     }
//   ],
// }
