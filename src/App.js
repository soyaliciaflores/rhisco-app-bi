import React, { Fragment } from 'react';
import AppAnalista from './AppAnalista';
import AppDirectivo from './AppDirectivo';
import './App.css';
import './Graficos/Return/FilterReturn.css'
import './General/Navigation/NavGraph.css'
import './General/Navigation/NavTable.css'
import './Graficos/Sector/Sector.css';
import './Graficos/Asset_Allocation/AssetAllocation.css'
import '../src/AppDirectivo.css'
import './General/Header_Analista/HeaderAnalista.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  return (
    <Fragment>
      <Router>
        <Link to = '/analista'>
        {/* <button>Analista</button> */}
        </Link>
        <Link to = '/directivo'>
        {/* <button>Directivo</button> */}
        </Link>
        <Switch>
          <Route path = '/directivo'>
            <AppDirectivo/>
          </Route>
          <Route path = '/analista'>
            <AppAnalista/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
