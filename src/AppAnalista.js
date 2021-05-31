import React from 'react';
import FundList from './Graficos/Fund_List/FundList';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';
import Holdings from './Graficos/Holdings/Holdings';
import NavGraph from './General/Navigation/NavGraph';
import NavTable from './General/Navigation/NavTable';

function App() {
  
  return (
    <div className="App">
        <FundList/>
        <DiscretePerformance/>
        <NavGraph/>
        <NavTable/>
        <Holdings/>
        <AssetAllocation />
        <HistoricalPrice/>
    </div>
  );
}

export default App;