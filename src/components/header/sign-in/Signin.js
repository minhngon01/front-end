import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Signin extends Component {
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
         <NavbarBrand className="" tag={Link} to="/">Welcome to Devicer Customer Care <a>1-800-123-4567</a></NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink tag={Link} to="/signup">Sign Up</NavLink>
             </NavItem>
             <NavItem>
               <NavLink tag={Link} to="/Login">Log in</NavLink>
             </NavItem>
             <NavItem>
               <NavLink tag={Link} to="/MyList">My List</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Signin;
