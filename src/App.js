import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Bottom from './components/layout/bottom/Bottom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo,faStar, faCartPlus, faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo,faStar, faSearch,faCartPlus);
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Switch>
              <Route exact path = "/" component={Home} />
            </Switch>
          <Bottom/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
