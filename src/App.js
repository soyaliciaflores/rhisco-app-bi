
import './App.css';
import './Graficos/Asset_Allocation/AssetAllocation.css'
import React from 'react';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import Regions from './Graficos/Regions/Regions';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice'
import Return from './Graficos/Return/Return';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhisco</h1>
          <DiscretePerformance />
          <Regions />
          <AssetAllocation />
        <HistoricalPrice/>
        <Return/>
      </header>
    </div>
  );
}

export default App;
