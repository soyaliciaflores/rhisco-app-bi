import './App.css';
import React from 'react';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';
import Holdings from './Graficos/Holdings/Holdings';
import Return from './Graficos/Return/Return';
import FilterReturn from './Graficos/Return/FilterReturn';
import FundList from './Graficos/Fund_List/FundList';
import Sectors from './Graficos/Sector/Sector';
import NavGraph from './General/Navigation/NavGraph';
import NavTable from './General/Navigation/NavTable';
import './Graficos/Return/Return.css'
import './Graficos/Return/FilterReturn.css'
import './General/Navigation/NavGraph.css'
import './General/Navigation/NavTable.css'
import './Graficos/Sector/Sector.css';
import './Graficos/Fund_List/FundList.css';

function App() {
  
  return (
    <div className="App">
        <FundList/>
        <FilterReturn/>
        <NavGraph/>
        <NavTable/>
        <Sectors/>
        <Holdings/>
        <AssetAllocation />
        <HistoricalPrice/>
        <Return/>
    </div>
  );
}

export default App;
