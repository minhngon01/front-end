import React from 'react';
import ProductsPagination from './products-pagination/ProductsPagination';
import Filter from './filter/Filter';

/*
  product={
  name-product : "12-inch Intel Core";
  brand : "Apple";
  branch : "Macbook"  // dong san pham ???
  type: "Laptop";
  price : "$120000.00";
  amount-available : 20;
  rating : x ( 1 <= x <= 5);
  describe : "";
  additional-information : {
    Color: [blue,grey,..];
    installed-RAM : "8 GB";
    Volumn : "854 ml";
    "Multi-core Technology": "dual-core";
    "Dimensions": "7.74 x 11.04 x 0.052";
  }
  reviews: [
    {
      name-user-ID : "asojdoajwdoawdamwd"
      name-user: "dungasdas";
      date-review: "October 12,2017";
      content-review : "1fasefsaefse";
      rating : x ( 1 <= x <= 5);
    },
    {

    }
  ]
}
*/

class Shop extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">

          <div className="col-9">
            <ProductsPagination/>
          </div>

          <div className="col-3">
            <Filter/>
          </div>

        </div>
    </div>
    )
  }
}

export default Shop;
