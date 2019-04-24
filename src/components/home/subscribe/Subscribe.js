import React,{Component} from 'react';
class Subscribe extends Component{
  render(){
    return(
      <div className="subcribe container d-flex flex-column align-items-center my-5">
        <h3>Newsletter Signup</h3>
        <div className="c-subcribe d-flex my-4 ">
          <input type ="email" className="c-subcribe__input " placeholder="Your Email..."/>
          <button className="c-subcribe__button"><b>Subscribe</b></button>
        </div>
        <h4>Never miss our great deals. Huge sake every week!</h4>
      </div>
    )
  }
}
export default Subscribe;
