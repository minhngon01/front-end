import React,{Component} from 'react';
import './menuNav.css';
class MenuNav extends Component{
  render(){
    return(
      <div className="container third-navigate pt-4 px-5">
          <ul className="nav nav-pills">

              <li className="nav-item">
                  <a className="nav-link" href="#">Shop</a>
              </li>


              <li className="dropdown-item-nav nav-item" >
                  <a className="nav-link" href="#">Feature</a>
                  <div className="dropdown-modify dropdown-shortcodes">
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
                      <a className="dropdown-item-modify">Action</a>
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
