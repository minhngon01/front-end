import React from 'react';
import Cart from '../../Fragment/CartFragment/cart/Cart';
import ReactPaginate from 'react-paginate';
import Products from '../products/Products';
class Pagination extends React.Component{
  render(){
    return(
      <div className="products-shop">
        <Products/>
        <ReactPaginate
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={"active"}
        />
      </div>
    )
  }
}
export default Pagination;
