import React,{Component} from 'react';
import "./subscribe.css"
class Subscribe extends Component{
  render(){
    return(
      <div className="subcribe container d-flex flex-column align-items-center my-5">
        <h3>Newsletter Signup</h3>
        <div className="input-box d-flex my-4 ">
          <input type ="email" className="p-3 border border-0 " placeholder="Your Email..."/>
          <button id ="subscribe-button"  className="btn border border-0 "><b>Subscribe</b></button>
        </div>
        <h4>Never miss our great deals. Huge sake every week!</h4>
      </div>
    )
  }
}
export default Subscribe;
