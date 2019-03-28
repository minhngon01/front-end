import React,{Component} from 'react';

class MenuNav extends Component{
  render(){
    return(
      <div class="container third-navigate">
          <ul class="nav nav-pills">

              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item">Action</a>
                  </div>
              </li>

              <li class="nav-item dropdown" >
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Feature</a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item">Action</a>
                  </div>
              </li>

              <li class="nav-item dropdown" >
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shortcodes</a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item">Action</a>
                  </div>
              </li>

              <li class="nav-item dropdown" >
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Post Types</a>
                  <div class="dropdown-menu">
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <a class="dropdown-item">Action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item">Action</a>
                  </div>
              </li>

              <li class="nav-item mt-2" >
                  <a href="#">Shop</a>
              </li>
          </ul>
      </div>
    )
  }
}

export default MenuNav;
