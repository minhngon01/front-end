import React,{Component} from 'react';
import Slider from "react-slick";
import Cart from "../../Fragment/CartFragment/cart/Cart";
import axios from "axios";
class BestSeller extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bestSellerProducts : []
    }
  }
  //this.state.bestSellerProducts = [
  //   {
  //     'name-product' : "Tesla Generation",
  //     'branch' : 'PowerBank',
  //     'sub-branch' : 'Computer Hardware',
  //     'type' : 'Computer Hardware',
  //     'price' : '$300.00',
  //     'amount-available' : 20,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
  //   },
  //   {
  //     'name-product' : "Misfit Shine 2",
  //     'branch' : 'Misfit',
  //     'sub-branch' : 'Smart Watch',
  //     'type' : 'Smart Watches',
  //     'price' : '$269.00',
  //     'amount-available' : 20,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2015/05/10.jpg",
  //   },
  //   {
  //     'name-product' : "Samsung Gear Blue",
  //     'branch' : 'Samsung',
  //     'sub-branch' : 'Smart Watch',
  //     'type' : 'Smart Watches',
  //     'price' : '$20.00',
  //     'amount-available' : 20,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/05/4.jpg",
  //   },
  //   {
  //     'name-product' : "Macbook Pro 2016",
  //     'branch' : 'Apple',
  //     'sub-branch' : 'Apple Macbook',
  //     'type' : 'Laptop',
  //     'price' : '$1300.00',
  //     'amount-available' : 2,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
  //   },
  //   {
  //     'name-product' : "12-inch Intel Macbook",
  //     'branch' : 'Apple',
  //     'sub-branch' : 'Apple Macbook',
  //     'type' : 'Laptop',
  //     'price' : '$1400.00',
  //     'amount-available' : 2,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/13-3.jpg",
  //   },
  //   {
  //     'name-product' : "Samsung Galaxy S8",
  //     'branch' : 'Samsung',
  //     'sub-branch' : 'Samsung Phone',
  //     'type' : 'Cell Phones',
  //     'price' : '$500.00',
  //     'amount-available' : 2,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/14-3.jpg",
  //   },
  //   {
  //     'name-product' : "Samsung Galaxy J5 Black",
  //     'branch' : 'Samsung',
  //     'sub-branch' : 'Samsung Phone',
  //     'type' : 'Cell Phones',
  //     'price' : '$200.00',
  //     'amount-available' : 2,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
  //   },
  //   {
  //     'name-product' : "Samsung Galaxy J5 Black",
  //     'branch' : 'Samsung',
  //     'sub-branch' : 'Samsung Phone',
  //     'type' : 'Cell Phones',
  //     'price' : '$200.00',
  //     'amount-available' : 2,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/20-2.jpg",
  //   },
  //   {
  //     'name-product' : "Sony Watch 3 SWR50",
  //     'branch' : 'Sony',
  //     'sub-branch' : 'Sony Watch',
  //     'type' : 'Smart Watch',
  //     'price' : '$100.00',
  //     'amount-available' : 2,
  //     'rating' : 4,
  //     'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/17-3.jpg",
  //   },
  //
  //]

  componentDidMount(){
      axios({
      method : 'GET',
      url    : "http://localhost:3003/products/bestseller",
      params : {
        amount : 8,
      }
    })
    .then(products => {
    console.log(products);
    this.setState({bestSellerProducts : products.data.products});
  })
  }

  render(){
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 20000,
          settings:{
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
      ],
      customPaging: i => (
        <div
          style={{
            width: "10px",
            height:"10px",
            backgroundColor: "grey",
            border: "0px solid",
            borderRadius: "50%",
            marginTop:"10px",
          }}
        >
        </div>
      )
    };
    return(
      <div className="container">
        <h3>Best seller</h3>
          <Slider {...settings}>
            {this.state.bestSellerProducts.map( product => (<div className="px-3"><Cart product={product}/></div>))}
          </Slider>
      </div>
    )
  }

}
export default BestSeller;
