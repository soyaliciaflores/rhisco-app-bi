import React from 'react';
import Regions from './Graficos/Regions/Regions';
import FundList from './Graficos/Fund_List/FundList';
import FilterReturn from './Graficos/Return/FilterReturn';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import Holdings from './Graficos/Holdings/Holdings';
import Sector from './Graficos/Sector/Sector';
import NavGraph from './General/Navigation/NavGraph';
import NavTable from './General/Navigation/NavTable';

function App() {
  
  return (
    <div className="App">
        <FundList/>
        <FilterReturn/>
        <DiscretePerformance/>
        <NavGraph/>
        <NavTable/>
        <Sector/>
        <Regions/>
        <Holdings/>
        <AssetAllocation/>
    </div>
  );
}

export default App;