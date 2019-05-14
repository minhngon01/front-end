import React from 'react';
import Cart from '../../Fragment/CartFragment/cart/Cart';
import ReactPaginate from 'react-paginate';
import ShopProducts from '../shop-products/ShopProducts';
import './productspagination.css';
import axios from 'axios';
class ProductsPagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      offset : 0,
      pageCount : 5,
      products : []
    }
  }
  componentDidMount() {
    axios({
      method : 'GET',
      url    : "http://localhost:3003/products/page-product",
      params : {
        offset : 0,
      }
    })
    .then(products => {
      this.setState({products : products.data.products})
    })
  }
  handlePageClick = data => {
    axios({
      method : 'GET',
      url    : "http://localhost:3003/products/page-product",
      params : {
        offset : 0,
      }
    })
    .then(products => {
      this.setState({products : products.data.products})
    })
  }

  render(){
    return(
      <div className="products-shop">
        <ShopProducts products={this.state.products}/>
        <ReactPaginate
          previousLabel={''}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages-pagination'}
          activeClassName={"active"}
          pageClassName={"pageSub"}
        />
      </div>
    )
  }
}
export default ProductsPagination;
