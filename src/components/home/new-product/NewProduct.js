import React,{Component} from 'react';
import "./newproduct.css"
class NewProduct extends Component{
  render(){
    return(
      <div className="container">
      <div className="new-product row">
        <div className="col-sm">
          <div class="card-new-product bg-dark text-white">
            <div class="card-img card-modify card-img-left"  alt="Card image"/>
            <div class="card-img-overlay d-flex flex-column align-items-start">
              <h5 class="">New Step</h5>
              <p class="">Apple Iphone</p>
              <p class="">Starting at</p>
              <p class="">$599</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card-new-product bg-dark text-white">
            <div class="card-img card-modify card-img-right" alt="Card image"/>
            <div class="card-img-overlay d-flex flex-column align-items-start">
              <h5 class="">New Step</h5>
              <p class="">Apple Iphone</p>
              <p class="">Starting at</p>
              <p class="">$599</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default NewProduct
