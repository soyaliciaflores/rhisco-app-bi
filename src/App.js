import React from 'react';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice'
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

        <AssetAllocation />
        <HistoricalPrice/>
        <Return/>

      </header>
    </div>
  );
}

export default App;
