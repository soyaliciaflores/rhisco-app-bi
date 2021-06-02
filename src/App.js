import React, { Fragment } from 'react';
import AppAnalista from './AppAnalista';
import AppDirectivo from './AppDirectivo';
import Navigation from './General/Navigation/Navigation';

import './App.css';
import './Graficos/Return/FilterReturn.css'
import './General/Navigation/NavGraphTable.css'
import './General/Navigation/Navigation.css'
import './Graficos/Sector/Sector.css';
import './Graficos/Asset_Allocation/AssetAllocation.css'
import '../src/AppDirectivo.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path = '/directivo'>
            <AppDirectivo/>
          </Route>
          <Route path = '/analista'>
            <AppAnalista/>
          </Route>
          <Route path = '/'>
            <Navigation/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
