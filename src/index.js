import React from 'react';
import ReactDOM from 'react-dom';
import {  createStore , applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
// Required for Redux store setup
import { Provider } from 'react-redux';
import configureStore from './store';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reducer from './reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
const sagaMiddleware = createSagaMiddleware()

createStore(reducer,applyMiddleware(sagaMiddleware))

ReactDOM.render (
 <Provider store={configureStore()}>
 <BrowserRouter>
            <Switch>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/AppData' component={App}></Route>
              <Route exact path='/' component={Home}></Route>
            </Switch>
  </BrowserRouter></Provider> ,document.getElementById('root')
);


registerServiceWorker();
