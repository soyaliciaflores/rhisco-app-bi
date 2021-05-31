import './App.css';
import React from 'react';
import Regions from './Graficos/Regions/Regions';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';
import Holdings from './Graficos/Holdings/Holdings';
import Return from './Graficos/Return/Return';
import Sector from './Graficos/Sector/Sector';
import NavGraph from './General/Navigation/NavGraph';
import NavTable from './General/Navigation/NavTable';
import './Graficos/Return/Return.css'
import './Graficos/Return/FilterReturn.css'
import './General/Navigation/NavGraph.css'
import './General/Navigation/NavTable.css'
import './Graficos/Sector/Sector.css';
import './Graficos/Asset_Allocation/AssetAllocation.css'

function App() {
  
  return (
    <div className="App">
        <FilterReturn/>
        <DiscretePerformance />
        <NavGraph/>
        <NavTable/>
        <Sectors/>
        <Regions/>
        <Holdings/>
        <AssetAllocation />
        <HistoricalPrice/>
        <Return/>
    </div>
  );
}

export default App;
