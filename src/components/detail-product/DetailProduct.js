import React from 'react';
import DetailInfoProduct from './detail-info-product/DetailInfoProduct';
import RelatedProducts from './related-products/RelatedProducts';
import axios from 'axios';
class DetailProduct extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.match.params);
  }
  async componentDidMount(){
    var detailProduct = await axios({
      method : 'get',
      url    : 'http://localhost:3003/products/detail',
      params : {
        product_id : this.props.math.params
      }
    })

  }
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
