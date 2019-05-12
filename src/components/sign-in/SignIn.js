import React from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../../context/UserProvider';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email   : "",
      password: "",
    }
  }
  handleInputChange = e => {
    this.setState( {[e.target.name] : e.target.value});
  }

  requestToServer = (id, password, dispatchLogin) => {
    
  }

  render(){
    return(
        <div className = "c-authentication ">
          <h1 className = "font-sign-in mb-3">Sign Up for faster checkout.</h1>
          <div  className = "c-authentication__input c-authentication__input--id"
                contenteditable="true"
                value = {this.state.email}
                onChange = {}
                name = "email"
          />
          <div  className = "c-authentication__input c-authentication__input--password"
                contenteditable = "true"
                value = {this.state.password}
                onChange = {}
                name = "password"
          />
          <UserContext.Consumer>
            { ({dispatchLogin}) =>
              <button className="c-authentication__button"
                      onClick = {this.requestToServer(this.state.email,this.state.password,dispatchLogin)}>Sign In</button>
            }
          </UserContext.Consumer>
          <Link to="/" className="forgot-email-addres">Forgot your ID or password?</Link>
          <Link to="/signup"className="register">Don't have an account? Create one now.</Link>
        </div>
    )
  }
}

export default SignIn;
