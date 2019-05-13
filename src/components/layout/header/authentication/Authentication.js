import React,{Component} from 'react';
import SignIn from '../../../sign-in/SignIn';
import {Link} from 'react-router-dom';
import {UserContext} from '../../../../context/UserProvider';

class Authentication extends Component{
  constructor(props){
    super(props);
    this.state={
      checked: false,
    }
  }
  render(){
    let animationToggle_authentication = this.state.checked ? {height: "100%"} : {};
    let animationToggle_welcome = this.state.checked === true ? {opacity: "1", display:"flex"} : {}

    return(
      <div className="bg-light m-0">
        <div className="c-navBar__top">
          <div className="c-navBar__top-bar" style={animationToggle_authentication}>
              <div className="c-navBar__top-bar__welcome" style={animationToggle_welcome}>
                  <p className="font-weight-light text-muted" >Welcome To Devicer</p>
                  <p>Customer Care</p>
                  <p className="font-weight-light text-muted">1-800-123-4567</p>
              </div>
              <div className="c-navBar__top-bar__authenticate">
                <div className="c-navBar__top-bar__authenticate-group" style={animationToggle_welcome}>
                  <UserContext.Consumer>
                    { (state) =>
                      { return !state.isLogin ?
                          (
                            <React.Fragment>
                              <Link className="c-navBar__top-bar__authenticate-group__link" to="/signup">Sign up</Link>
                              <Link className="c-navBar__top-bar__authenticate-group__link" to="/signin">Sign in</Link>
                              <Link className="c-navBar__top-bar__authenticate-group__link" to="/mylist">My list</Link>
                            </React.Fragment>
                        )
                          :
                          (
                            <React.Fragment>
                              {state.user_lastname}
                              <Link className="c-navBar__top-bar__authenticate-group__link" to="/" onClick={state.dispatchLogout} >Sign out</Link>
                              <Link className="c-navBar__top-bar__authenticate-group__link" to="/mylist">My list</Link>

                            </React.Fragment>
                          )
                      }
                    }
                  </UserContext.Consumer>

                </div>
              </div>
            </div>
            <input  type="checkbox"
                    className="c-navBar__top-bar__icon-toggle"
                    id="label01"

                    onChange={() => {this.setState({checked: !this.state.checked});}}
                    defaultChecked={this.state.checked}
                    checked={this.state.checked}
            />
            <label className="c-navBar__top-bar__icon-toggle__label" htmlFor="label01"><i className="arrow-down"/></label>
        </div>
      </div>
    )
  }
}
export default Authentication;
