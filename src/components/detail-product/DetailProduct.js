import React from 'react';
import DetailInfoProduct from './detail-info-product/DetailInfoProduct';
import RelatedProducts from './related-products/RelatedProducts'
class DetailProduct extends React.Component{
  render(){
    return(
      <div>
        <DetailInfoProduct/>
        <RelatedProducts/>
      </div>
    )
  }
}

export default DetailProduct;
