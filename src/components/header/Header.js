import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './search/Search.js';
import Signin from './sign-in/Signin.js';
import Menu from './Menu/Menu.js';
class Header extends Component {
  render() {
    return (
        <div className = "container-flex">
          <Signin/>
          <div className = "container">
            <Search/>
            <Menu/>
          </div>
        </div>
    );
  }
}

export default Header;
