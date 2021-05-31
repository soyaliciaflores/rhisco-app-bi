import './App.css';
import React from 'react';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';
import Holdings from './Graficos/Holdings/Holdings';
import Return from './Graficos/Return/Return';
import Sectors from './Graficos/Sector/Sector';
import './Graficos/Return/Return.css';
import './Graficos/Return/FilterReturn.css';
import './Graficos/Sector/Sector.css';

function App() {
  
  return (
    <div className="App">
        <Sectors/>
        <Holdings/>
        <AssetAllocation />
        <HistoricalPrice/>
        <Return/>
    </div>
  );
}

export default App;
