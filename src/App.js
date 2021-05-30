import './App.css';
import './Graficos/Sector/Sector.css';
import React from 'react';
import Holdings from './Graficos/Holdings/Holdings'

import Sectors from './Graficos/Sector/Sector';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhisco</h1>
        
        <Sectors></Sectors>
        <Holdings></Holdings>
        
      </header>
    </div>
  );
}

export default App;
