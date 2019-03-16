import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
class Demo extends Component {
  render() {
    return (
        <div className = "container ">
          <div className ="row justify-content-center">
            <div className="col-sm-12 col-md-4">
              <div className="d-flex flex-column border border-primary justify-content-center align-items-center" style={{height : 450}}>
                <div>
                <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid p-5" alt="..."/>
                </div>
                <div>
                <h5>Heloooo</h5>
                </div>
                <div>
                <h5>wkoqdkoqwkdoqkwodqw</h5>
                <br/>
                <h5>Joedokdoqwkdoqkwo</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Demo;
