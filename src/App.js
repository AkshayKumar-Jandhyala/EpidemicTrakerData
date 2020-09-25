import React from 'react';


import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'

import {Home} from './components/Home'
import {Patient} from './components/Patient'
import Case from './components/Case'
import {Navigation} from './components/Navigation'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { NavLink } from 'react-bootstrap';



function App() {
  return(
    <BrowserRouter>
    <div >
      
      
      <Navigation/>
      
      <Switch>
        <Route path= '/' component={Home} exact />
        <Route path = '/patient' component={Patient} />
        <Route path= '/case' component={Case} />
      </Switch>
    </div>
    </BrowserRouter>
  );
   
}

export default App;
