import React from 'react';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice'
import Return from './Graficos/Return/Return';
import './Graficos/Return/Return.css'
import './Graficos/Return/FilterReturn.css'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <AssetAllocation />
        <HistoricalPrice/>
        <Return/>
      </header>
    </div>
  );
}

export default App;
