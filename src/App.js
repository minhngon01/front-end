import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <BrowserRouter>
          <div className="App">
            <Switch>
              {/*<Route exact path = "/" component={} />*/}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
