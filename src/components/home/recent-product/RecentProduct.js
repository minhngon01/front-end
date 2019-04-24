import React,{Component} from 'react';

import { Transition, animated } from 'react-spring/renderprops'

import Cart from '../../Fragment/CartFragment/cart/Cart';
import CartSale from '../../Fragment/CartFragment/CartSale/CartSale';
import "./recentproduct.css"



class RecentProduct extends Component{
  products = {
    'recent-products':[
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
    ],
    'featured-products':[
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
      },
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
      }
    ],
    'top-rated-products':[
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
      },
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
      }
    ],
    'sale-products':[
      {
        'name-product' : "Apple Macbook",
        'branch' : 'Apple',
        'sub-branch' : 'Macbook',
        'type' : 'Laptop',
        'price' : '$1200.00',
        'sale-price' : '$800.00',
        'amount-available' : 20,
        'rating' : 4,
        'time': 'April 10, 2019 15:27:08',
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
        'time': 'April 10, 2019 15:27:08',
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
        'time': 'April 10, 2019 15:27:08',
        'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/26-2.jpg",
      },
      {
        'name-product' : "Apple Macbook",
        'branch' : 'Apple',
        'sub-branch' : 'Macbook',
        'type' : 'Laptop',
        'price' : '$1200.00',
        'sale-price' : '$800.00',
        'amount-available' : 20,
        'rating' : 4,
        'time': 'April 10, 2019 15:27:08',
        'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
      }
    ],
  }
  productsTab = [
    style => (
      <animated.div style={{ ...style}}>
        <div className="o-layout--4-col animation-products">
          {
            this.products['recent-products'].map( product => (
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
            this.products['featured-products'].map( product => (
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
            this.products['top-rated-products'].map( product => (
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
              this.products['sale-products'].map( product => (
                <CartSale product={product}/>
            ))
          }
          </div>
      </animated.div>
    ),

  ]

  previousIndex =-1;
  state = { index: 0 }
  toggle = numberIndex => e => {
    this.previousIndex = this.state.index;
    this.setState({index : numberIndex});
  }
  render(){
    return(
      <div className="container o-layout__shop-product">
          <ul className="nav nav-recent">
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
              { index => this.productsTab[index] }
            </Transition>)
            :
            (<Transition
              native
              items={this.state.index}
              from={{ opacity: 0, transform: 'translateY(0px)' }}
              enter={{ opacity: 1, transform: 'translateY(0px)' }}
              leave={{ opacity: 0,transform: 'translateY(100px)'}}>
              { index => this.productsTab[index] }
            </Transition>)
          }
          </div>

      </div>
    )
  }
}
export default RecentProduct;
