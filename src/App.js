import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/*
  Web's Components
*/
import Header from './components/layout/header/Header';
import Bottom from './components/layout/bottom/Bottom';

import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Contacts from './components/feature/Contacts/Contacts';
import AboutUs from './components/feature/AboutUs/AboutUs';
import FAQ from './components/feature/FAQ/FAQ';
import News from './components/feature/News/News';
import Sale from './components/feature/Sale/Sale';
import DetailProduct from './components/detail-product/DetailProduct';
/*
  external library
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo,faStar, faCartPlus, faSearch,faHome,faPaperPlane,faHeadset,faRocket,faHeart,faRecycle, faComments} from '@fortawesome/free-solid-svg-icons'
library.add(faIgloo,faStar, faSearch,faCartPlus,faHome,faPaperPlane,faHeadset,faRocket,faHeart,faRecycle,faComments);
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Shop}/>
              <Route path="/Contacts" component={Contacts}/>
              <Route path="/aboutus" component={AboutUs}/>
              <Route path="/news" component={News}/>
              <Route path="/FAQ" component={FAQ}/>
              <Route path="/sale" component={Sale}/>
              <Route path="/product/:id" component={DetailProduct}/>
            </Switch>
          <Bottom/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
