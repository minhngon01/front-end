import React,{Component} from 'react';
import CartSale from "../../Fragment/CartFragment/CartSale/CartSale";
import axios from 'axios';
class BigProduct extends Component{
  constructor(props){
    super(props);
    this.state = {
      saleProducts: []
    }
  }
  async componentDidMount(){
    var products = await axios({
      method : 'GET',
      url    : "http://localhost:3003/products/sale",
      params : {
        amount : 3,
      }
    })

    console.log(products);
      this.setState({saleProducts : products.data.products})

  }

  // saleProducts = [
  //   {
  //     'product_name' : "Apple Macbook",
  //     'product_brand' : 'Apple',
  //     'product_brand' : 'Macbook',
  //     'product_type' : 'Laptop',
  //     'product_price' : '$1200.00',
  //     'sale_price' : '$800.00',
  //     'product_amount' : 20,
  //     'product_rating' : 4,
  //     'sale_date': 'April 10, 2020 15:27:08',
  //     'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
  //   },
  //   {
  //     'product_name' : "3M PF Apple iMac",
  //     'product_brand' : 'Apple',
  //     'product_brand' : 'Apple iMac, Laptops',
  //     'product_type' : 'Laptops',
  //     'product_price' : '$120.00',
  //     'sale_price' : '$80.00',
  //     'product_amount' : 20,
  //     'product_rating' : 4,
  //     'sale_date': 'April 10, 2020 15:27:08',
  //     'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/4-2.jpg",
  //   },
  //   {
  //     'product_name' : "Apple Fitness Watch",
  //     'product_brand' : 'Apple',
  //     'product_brand' : 'Smart Watches',
  //     'product_type' : 'Watch',
  //     'product_price' : '$150.00',
  //     'sale_price' : '$130.00',
  //     'product_amount' : 30,
  //     'product_rating' : 3,
  //     'sale_date': 'April 10, 2020 15:27:08',
  //     'product_image_url' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/26-2.jpg",
  //   }
  // ]
  render(){
    return(
    <div className="container">
      <div className="on-sale">
        <div className="o-layout--3-col">
          {this.state.saleProducts.map(product => (
            <div className="">
              <CartSale product={product}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
  }
}
export default BigProduct;
