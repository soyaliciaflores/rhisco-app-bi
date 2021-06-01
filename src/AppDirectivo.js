import React, {useState} from 'react';
import Regions from './Graficos/Regions/Regions';
import FundList from './Graficos/Fund_List/FundList';
import FilterReturn from './Graficos/Return/FilterReturn';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import Holdings from './Graficos/Holdings/Holdings';

import Sector from './Graficos/Sector/Sector';
import NavGraph from './General/Navigation/NavGraph';
import NavTable from './General/Navigation/NavTable';
import hDir from './Assets/hDirective.png';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';

function AppDirectivo() {

  const [showAssets, setshowAssets] = useState(true)
  const [showRegions, setshowRegions] = useState(false)
  const [showSector, setshowSector] = useState(false)
  const [showBenchmark, setshowBenchmark] = useState(false)
  const [holdingTable, setHoldingTable] = useState(true)
  const [historyTable, sethistoryTable] = useState(false)
  
  const handleChangeAsset = () =>{
    setshowAssets(true) 
    setshowRegions(false)
    setshowSector(false)
    setshowBenchmark(false)
  }
  const handleChangeRegions = () => {
    setshowAssets(false) 
    setshowRegions(true)
    setshowSector(false)
    setshowBenchmark(false)
  }
  const handleChangeSector = () =>{
    setshowAssets(false) 
    setshowRegions(false)
    setshowSector(true)
    setshowBenchmark(false)
  }
  const handleChangeBenchmark = () =>{
    setshowAssets(false) 
    setshowRegions(false)
    setshowSector(false)
    setshowBenchmark(true)
  }

  const handleChangeHoldingTable = () => {
    setHoldingTable(true)
    sethistoryTable(false)
  }
  
  const handleChangeHistoryTable = () => {
    sethistoryTable(true)
    setHoldingTable(false)
  }

  return (
    <div className="executive">
      <div className="header">
        <img src={hDir} alt='header de Directivo' className='headerImage' width='100%'/>
      </div>
      <div className="dashboard">
        <div className="rigthBoard">
          <div className="founList">
            <FundList />
          </div>
          <div className="renderGraphicsA">
            <div className="botonsA">
              <NavGraph
                handleChangeAsset={handleChangeAsset}
                handleChangeSector={handleChangeSector}
                handleChangeRegions={handleChangeRegions}
                handleChangeBenchmark={handleChangeBenchmark}
              />
            </div>
            <div className="pieGraphicsRender">
              <div className="pieGraphics" id='renderGraphics'>
                {showAssets === true ?   <AssetAllocation/> : null}
                {showRegions === true ? <Regions/> : null}
                {showSector === true ? <Sector/> : null}
                {showBenchmark === true ? <DiscretePerformance/> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="leftBoard">
          <div className="renderGraphicB">   
            <FilterReturn />
          </div>
          <div className="renderTables">
            <div className="bottonsB">
              <NavTable
                handleChangeHoldingTable={handleChangeHoldingTable}
                handleChangeHistoryTable={handleChangeHistoryTable}
                
                />
            </div>
            <div className="tables">
              {holdingTable === true ? <Holdings /> : null}
              {historyTable === true ? <HistoricalPrice /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDirectivo;
