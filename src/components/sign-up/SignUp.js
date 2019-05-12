import React from 'react';
import {Link} from 'react-router-dom';
class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user_email       : "",
      user_password    : "",
      user_lastname    : "",
      user_firstname   : "",
      user_phone       : "",
      user_address     : "",
      is_female        : "",
      confirm_password : "",
    }
  }
  handleInputChange = e => {
    this.setState( {[e.target.name] : e.target.value});
  }

  requestToServer = () => {

  }
  render(){
    return(
      <div className="c-authentication--sign-up ">
        <h1 className="font-sign-in mb-3">Sign Up for access our services.</h1>
        <div className="c-authentication__input c-authentication__input--first-name" contenteditable="true" name="user_firstname"/>
        <div className="c-authentication__input c-authentication__input--last-name" contenteditable="true"  name="user_lastname"/>
        <div className="c-authentication__input c-authentication__input--birth-day" contenteditable="true" name=""/>

        <div className="c-authentication__input c-authentication__input--id" contenteditable="true" name="user_email"/>
        <div className="c-authentication__input c-authentication__input--password" contenteditable="true" name="user_password"/>
        <div className="c-authentication__input c-authentication__input--confirm-password" contenteditable="true" name="confirm_password"/>

        <button className="c-authentication__button" onClick={this.requestToServer}>Sign Up</button>
      </div>
    )
  }
}

export default SignUp;
