import React,{Component} from 'react';

class Authentication extends Component{
  render(){
    return(
      <ul class="nav flex-row">
          <li class="p-2 pl-5">
              Welcome To Devicer Customer Care 1-800-123-4567
          </li>
          <li class="nav-item active py-2 px-3 ml-auto">
              <a href="#">Sign up</a>
          </li>
          <li class="nav-item active py-2 px-3" >
              <a href="#">Log in</a>
          </li>
          <li class="nav-item active py-2 pl-4 pr-5">
              <a href="#">My list</a>
          </li>
      </ul>
    )
  }
}
export default Authentication;
