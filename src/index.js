import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
    , document.getElementById('root'));
