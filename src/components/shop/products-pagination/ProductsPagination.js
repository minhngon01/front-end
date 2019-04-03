import React from 'react';
import Cart from '../../Fragment/CartFragment/cart/Cart';
import ReactPaginate from 'react-paginate';
import ShopProducts from '../shop-products/ShopProducts';
import './productspagination.css';

class ProductsPagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      offset : 0,
      pageCount : 5,
    }
  }
  handlePageClick = data => {

  }

  render(){
    return(
      <div className="products-shop">
        <ShopProducts products={this.state.data}/>
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
