import React from 'react';
import FilterReturn from './Graficos/Return/FilterReturn';
import Return from './Graficos/Return/Return';
import './Graficos/Return/Return.css'
import './Graficos/Return/FilterReturn.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhisco</h1>
        <FilterReturn/>
      </header>
    </div>
  );
}

export default App;
