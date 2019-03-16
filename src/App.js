import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './Demo/Demo.js';
class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>

          <div className="App">
            <Switch>
              {/*<Route exact path = "/" component={} />*/}
            </Switch>
            <Demo></Demo>
          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
