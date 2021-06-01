import React from 'react';
import FundList from './Graficos/Fund_List/FundList';
//import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';
import Holdings from './Graficos/Holdings/Holdings';
import NavGraph from './General/Navigation/NavGraph';
import HeaderAnalista from './General/Header_Analista/HeaderAnalista';
//import NavTable from './General/Navigation/NavTable';
import './AppAnalista.css';
//import Sector from './Graficos/Sector/Sector';

function App() {

  return (
    <div className="App">
      <HeaderAnalista/>
      <div className="grapchis-Container">
        <div className="graphics-left">
          <FundList />
          <NavGraph />
          {/* <DiscretePerformance /> */}
          {/* <NavTable /> */}
          <AssetAllocation />
          {/* <Sector /> */}
        </div>
        <div className="graphics-right">
          <Holdings />
          <HistoricalPrice />
        </div>
      </div>
    </div>
  );
}

export default App;