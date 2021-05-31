import React from 'react';
import FilterReturn from './Graficos/Return/FilterReturn';
import Return from './Graficos/Return/Return';
import './Graficos/Return/Return.css'
import './Graficos/Return/FilterReturn.css'
import './General/Navigation/NavGraph.css'
import './General/Navigation/NavTable.css'
import NavGraph from './General/Navigation/NavGraph';
import NavTable from './General/Navigation/NavTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhisco</h1>
        <FilterReturn/>
        <NavGraph/>
        <NavTable/>
      </header>
    </div>
  );
}

export default App;
