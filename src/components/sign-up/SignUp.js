import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../../context/UserProvider';

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
      is_female        : true,
      confirm_password : "",
      validate         : "",
    }
  }
  handleInputChange = e => {
    this.setState( {[e.target.name] : e.target.value});
  }

  requestToServer = () => {
    console.log(this.state);
    var {state} = this;
    if (this.state.user_password != this.state.confirm_password) {
      this.setState({validate : "confirm password is not match"})
      return ;
    }
    axios({
      method : 'post',
      url   : 'http://localhost:3003/users/signup',
      data  : {
        user_email       : state.user_email,
        user_password    : state.user_password,
        user_lastname    : state.user_lastname,
        user_firstname   : state.user_lastname,
        user_phone       : state.user_phone,
        user_address     : state.user_address,
        is_female        : state.is_female-0,
      }
    })
    .then( res => {
      this.setState({validate : res.data.message})
    })
  }

  handleChangeChk = (e) => {
    e.target.name == "male" && this.state.is_female && this.setState({is_female : !this.state.is_female})
    e.target.name == "female" && !this.state.is_female && this.setState({is_female : !this.state.is_female})
  }
  render(){
    return(
      <div className="c-authentication--sign-up ">
        <h1 className="font-sign-in mb-3">Sign Up for access our services.</h1>
        <input
          type = "text"
          className="c-authentication__input c-authentication__input--first-name"
          name="user_firstname"
          placeholder = "first name"
          onChange = {this.handleInputChange}
          required
        />
        <input
          type = "text"
          className="c-authentication__input "
          name="user_lastname"
          placeholder = "last name"
          onChange = {this.handleInputChange}
          required
        />
        <input
          type = "tel"
          className="c-authentication__input "
          name="user_phone"
          placeholder = "phone number"
          onChange = {this.handleInputChange}
          required
        />
        <input
          type = "email"
          className="c-authentication__input "
          name="user_email"
          placeholder = "email"
          pattern=".+@gmail.com"
          size="30"
          onChange = {this.handleInputChange}
          required
        />
        <input
          type = "password"
          className="c-authentication__input"
          name="user_password"
          placeholder = "password"
          onChange = {this.handleInputChange}
          required
        />

        <input
          type = "password"
          className="c-authentication__input"
          name="confirm_password"
          placeholder = "confirm password"
          onChange = {this.handleInputChange}
          required
        />
        <input
          type = "text"
          className="c-authentication__input"
          name="user_address"
          placeholder = "address"
          onChange = {this.handleInputChange}
        />
      <div className="my-3 ">
          <input type="checkbox" name="male" className="mx-3" checked={!this.state.is_female} onChange={this.handleChangeChk} />
          <span>male</span>
          <input type="checkbox" name="female" className="mx-3"  checked={this.state.is_female} onChange={this.handleChangeChk} />
          <span>female</span>
        </div>
        <div>{this.state.validate}</div>
        <button className="c-authentication__button" onClick={this.requestToServer}>Sign Up</button>
      </div>
    )
  }
}

export default SignUp;
