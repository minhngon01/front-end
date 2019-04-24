import React,{Component} from 'react';
import Search from './search/Search';
import MenuNav from './menu-nav/MenuNav';
import Authentication from './authentication/Authentication';

class Header extends Component{
  render(){
    return(
       <div class="c-navBar mb-2">
        <Authentication/>
        <Search/>
        <MenuNav/>
       </div>
    )
  }
}
export default Header;
