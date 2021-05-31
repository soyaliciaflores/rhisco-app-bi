import './App.css';
import './Graficos/Sector/Sector.css';
import React from 'react';
import Holdings from './Graficos/Holdings/Holdings'
import HeaderDirectivo from './General/Header_Directivo/HeaderDirectivo'
import HeaderAnalista from './General/Header_Analista/HeaderAnalitic'
import Sectors from './Graficos/Sector/Sector';

function App() {
  
  return (
    <div className="App">
        
        <HeaderDirectivo></HeaderDirectivo>
        <Sectors></Sectors>
        <Holdings></Holdings>
        <HeaderAnalista></HeaderAnalista>
      
    </div>
  );
}

export default App;
