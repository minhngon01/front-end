import React,{Component} from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';


class Search extends Component{
  constructor(props) {
  super(props);

  this.toggleDropDown = this.toggleDropDown.bind(this);
  this.state = {
    dropdownOpen: false,
    splitButtonOpen: false
  };
  }

toggleDropDown() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });
}
render(){
  return (
    <div>
      <InputGroup>

        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
          <DropdownToggle caret>
            All Categories
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input />
      </InputGroup>
      <br/>
    </div>
  );
}
};


export default Search;
