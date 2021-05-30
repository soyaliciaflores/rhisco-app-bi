import './App.css';
import './Graficos/Asset_Allocation/AssetAllocation.css'
import React from 'react';
//Gráficas
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
// import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
// import Regions from './Graficos/Regions/Regions';
// import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice'
// import Return from './Graficos/Return/Return';
// import Sector from './Graficos/Sector/Sector';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhisco</h1>
          <DiscretePerformance />
          {/* <Sector />
          <Regions />
          <AssetAllocation />
          <HistoricalPrice/>
          <Return/> */}
      </header>
    </div>
  );
}

export default App;
