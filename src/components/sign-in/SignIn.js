import React from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../../context/UserProvider';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email   : "",
      password: "",
      success : "",
    }
  }
  handleInputChange = e => {
    this.setState( {[e.target.name] : e.target.value});
  }

  requestToServer = (id, password, dispatchLogin) => _ => {
    var {email, password} = this.state;
    if( email.length == 0 || password.length == 0 ){
      return ;
    }
    axios({
      method: 'post',
      url   : 'http://localhost:3003/users/signin',
      data  : {
        user_email    : email,
        user_password : password,
      }
    })
    .then(res => {

      var {data} = res
      if(data.success){
        this.setState({success : true});
        dispatchLogin(data.token);
      }
      else{
        this.setState({success : data.success.message});
      }

    })
  }

  render(){
    var {success} = this.state;
    return success ? <Redirect to='/'  /> :
    (
        <div className = "c-authentication ">
          <h1 className = "font-sign-in mb-3">Sign Up for faster checkout.</h1>
          <input  className = "c-authentication__input c-authentication__input--id"
                value = {this.state.email}
                placeholer = "email"
                name = "email"
                type = "email"
                onChange = {this.handleInputChange}
          />
          <input  className = "c-authentication__input c-authentication__input--password"
                type = "password"
                value = {this.state.password}
                placeholder = "password"
                name = "password"
                onChange = {this.handleInputChange}
          />
          <UserContext.Consumer>
            { (state) =>
              <button className="c-authentication__button"
                      onClick = {this.requestToServer(this.state.email,this.state.password,state.dispatchLogin)}>Sign In</button>
            }
          </UserContext.Consumer>
          {success}
          <Link to="/" className="forgot-email-addres">Forgot your ID or password?</Link>
          <Link to="/signup"className="register">Don't have an account? Create one now.</Link>
        </div>
    )
  }
}

export default SignIn;
//
