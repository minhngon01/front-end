import React,{Component} from 'react';
import "./subcribe.css"
class Subcribe extends Component{
  render(){
    return(
      <div className="subcribe container d-flex flex-column align-items-center my-5">
          <h3>Newsletter Signup</h3>
          <div className="input-box d-flex my-4 ">
              <input  className="p-3 border border-0 " value="Your Email..."/>
              <input  className="btn border border-0 " value="SUBCRIBE"/>
          </div>
          <h4>Never miss our great deals. Huge sake every week!</h4>
      </div>
    )
  }
}
export default Subcribe;
