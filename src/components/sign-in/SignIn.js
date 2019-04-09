import React from 'react';
import './signin.css';
import {Link} from 'react-router-dom';
class SignIn extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="sign-in-container my-5 d-flex flex-column">
          <h1 className="font-sign-in mb-3">Sign in for faster checkout.</h1>
          <div className="id-input" contenteditable="true"/>
          <div className="password-input" contenteditable="true"/>
          <button className="btn btn-primary btn-modify my-3" >Sign In</button>
          <Link to="/" className="forgot-email-addres">Forgot your ID or password?</Link>
          <Link to="/signup"className="register">Don't have an account? Create one now.</Link>
        </div>
      </div>
    )
  }
}

export default SignIn;
