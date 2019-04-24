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


  account={
    first-name: string;
    last-name: string;
    counttry: vietnam;
    email: string ;
    password: string;
    birthday: date;
  }

*/

class Shop extends React.Component{
  products = [
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
      'name-product' : "Tesla Generation",
      'branch' : 'PowerBank',
      'sub-branch' : 'Computer Hardware',
      'type' : 'Computer Hardware',
      'price' : '$300.00',
      'amount-available' : 20,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
    },
    {
      'name-product' : "Misfit Shine 2",
      'branch' : 'Misfit',
      'sub-branch' : 'Smart Watch',
      'type' : 'Smart Watches',
      'price' : '$269.00',
      'amount-available' : 20,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2015/05/10.jpg",
    },
    {
      'name-product' : "Samsung Gear Blue",
      'branch' : 'Samsung',
      'sub-branch' : 'Smart Watch',
      'type' : 'Smart Watches',
      'price' : '$20.00',
      'amount-available' : 20,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/05/4.jpg",
    },
    {
      'name-product' : "Macbook Pro 2016",
      'branch' : 'Apple',
      'sub-branch' : 'Apple Macbook',
      'type' : 'Laptop',
      'price' : '$1300.00',
      'amount-available' : 2,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-3.jpg",
    },
    {
      'name-product' : "12-inch Intel Macbook",
      'branch' : 'Apple',
      'sub-branch' : 'Apple Macbook',
      'type' : 'Laptop',
      'price' : '$1400.00',
      'amount-available' : 2,
      'rating' : 4,
      'image' : "https://devicer.cmsmasters.net/wp-content/uploads/2017/09/13-3.jpg",
    },
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
  ]
  render(){
    return(
      <div className="container">
        <div className="o-layout--shop">
            <ProductsPagination products={this.products}/>
            <Filter/>
        </div>
    </div>
    )
  }
}

export default Shop;
