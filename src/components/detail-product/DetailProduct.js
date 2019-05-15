import React from 'react';
import DetailInfoProduct from './detail-info-product/DetailInfoProduct';
import RelatedProducts from './related-products/RelatedProducts';
import axios from 'axios';

class DetailProduct extends React.Component{

  render(){
    return(
      <div>
        <DetailInfoProduct productid={this.props.match.params.id}/>
        <RelatedProducts/>
      </div>
    )
  }
}

export default DetailProduct;
