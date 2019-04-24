import React,{Component} from 'react';
import './menuNav.css';
import {Link} from 'react-router-dom'
class MenuNav extends Component{
  render(){
    return(
      <div className="container third-navigate pt-4 px-5 c-navBar__bottom-bar">
          <ul className="c-navBar__bottom-bar__menu">

              <li className="nav-item">
                  <Link className="nav-link" to="/shop">Shop</Link>
              </li>


              <li className="dropdown-item-nav nav-item" >
                  <a className="nav-link" href="#">Feature</a>
                  <div className="dropdown-modify dropdown-shortcodes">
                      <Link className="dropdown-item-modity" to="/aboutus"> About Us</Link>
                      <Link className="dropdown-item-modity" to="/news"> News</Link>
                      <Link className="dropdown-item-modity" to="/contacts"> Contacts</Link>
                      <Link className="dropdown-item-modity" to="/FAQ"> FAQ</Link>
                      <Link className="dropdown-item-modity" to="/sale"> Sale</Link>
                  </div>
              </li>

              <li className="nav-item dropdown-item-nav" >
                  <a className="nav-link" href="#">Shortcodes</a>
                  <div className="dropdown-modify dropdown-shortcodes">
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                  </div>
              </li>

              <li className="nav-item dropdown-item-nav" >
                  <a className="nav-link"href="#">Post Types</a>
                  <div className="dropdown-modify dropdown-post-types">
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                  </div>
              </li>
          </ul>
      </div>
    )
  }
}

export default MenuNav;
