import React,{Component} from 'react';
import './authentication.css';
import SignIn from '../../../sign-in/SignIn';
import {Link} from 'react-router-dom';
class Authentication extends Component{

  render(){
    return(
      <div className="bg-light m-0">
        <ul className="c-navBar__top-bar">
            <li className="c-navBar__top-bar__welcome">
                <p className="font-weight-light text-muted">Welcome To Devicer</p>
                <p>Customer Care</p>
                <p className="font-weight-light text-muted">1-800-123-4567</p>
            </li>
            <div className="c-navBar__top-bar__authenticate">
              <div className="c-navBar__top-bar__authenticate-group">
                <li className="">
                    <Link className="a-modify" to="/signup">Sign up</Link>
                </li>
                <li className="" >
                    <Link className="a-modify" to="/signin">Sign in</Link>
                </li>
                <li className="">
                    <a className="a-modify " href="#">My list</a>
                </li>
              </div>
            </div>
            <div className="c-navBar__top-bar__icon-toggle">V</div>
        </ul>
      </div>
    )
  }
}
export default Authentication;
