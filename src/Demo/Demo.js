import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Card, CardImg, CardText, CardBody, CardLink,
//   CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

class Demo extends Component {
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
  render() {

    return (
        <div className = "container-fluid mt-5">
          <div className="d-flex flex-row  align-items-center">
            <img src="https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300" className="img-fluid" style={{width :150, height:100}} />
              <div className="d-flex flex-row align-items-center input-group input-group-lg mb-3 border rounded-pill border-primary m-2 p-3">
                <div class="input-group-prepend flex-1">
                  <button className=" dropdown-toggle border-0 " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div role="separator" class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <input type="text" class="form-control rounded-0 border-0 flex-2"  placeholder="search" aria-label="search" aria-describedby="basic-addon1"/>
                <FontAwesomeIcon icon="search"/>
              </div>
            <FontAwesomeIcon icon="search" />
          </div>
        </div>
    );
  }
}

export default Demo;

//
// <div className = "container m-5">
//   <div className ="row justify-content-center ">
//     <div className="sm-sm-12 col-md-4"/>
//
//     <div className="col-sm-12 col-md-4">
//       <div className="d-flex flex-column border border-primary rounded-lg justify-content-center align-items-center" style={{height : 450, width : 300}}>
//           <div>
//           <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid p-5" alt="..."/>
//           </div>
//           <div className="d-flex d-column pt-3">
//             <FontAwesomeIcon icon="star" />
//             <FontAwesomeIcon icon="star" />
//             <FontAwesomeIcon icon="star" />
//             <FontAwesomeIcon icon="star" />
//             <FontAwesomeIcon icon="star" />
//           </div>
//
//           <div>
//           <h5>Meizu M6 Note Blue</h5>
//           </div>
//           <div className="d-flex flex-row align-items-center">
//             <h6 className="text-secondary mr-2"><del>$400.000</del></h6>
//             <h5>$350.000</h5>
//           </div>
//           <div className="d-flex flex-row">
//             <div className="d-flex flex-column p-2">
//               <h5>44</h5>
//               <h7>DAY</h7>
//             </div>
//             <div className="d-flex flex-column p-2">
//               <h5>35</h5>
//               <h7>HRS</h7>
//             </div>
//             <div className="d-flex flex-column p-2">
//               <h5>12</h5>
//               <h7>MIN</h7>
//             </div>
//             <div className="d-flex flex-column p-2">
//               <h5>11</h5>
//               <h7>SEC</h7>
//             </div>
//           </div>
//       </div>
//     </div>
//
//     <div className="sm-sm-12 col-md-4"/>
//   </div>
// </div>
//
