import React,{Component} from 'react';
import "./brandslogo.css"
class BrandsLogo extends Component{
  render(){
    return(
      <div className="container mt-5 px-5">
        <div className="d-flex justify-content-around">
          <div className="adobe-brand"/>
          <div className="envato-brand"/>
          <div className="jquery-brand"/>
          <div className="wordpress-brand"/>
          <div className="github-brand"/>
        </div>
      </div>
    )
  }
}
export default BrandsLogo;
