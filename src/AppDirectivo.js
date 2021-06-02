import React, {useState} from 'react';

import Regions from './Graficos/Regions/Regions';
import FundList from './Graficos/Fund_List/FundList';
import FilterReturn from './Graficos/Return/FilterReturn';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import Holdings from './Graficos/Holdings/Holdings';
import Sector from './Graficos/Sector/Sector';
import executive from './Assets/executive.png';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';

function AppDirectivo() {

  const [renderGraphicDirect, setRenderGraphicDirect] = useState('assets')
  const [HoldingTableDir, setHoldingTableDir] = useState(true)
  const [HistoricalPriceDirective, setHistoricalPriceDirective] = useState(false)
 
  const handleChangeHoldingTable = () => {
    setHoldingTableDir(true)
    setHistoricalPriceDirective(false)
  }
  
  const handleChangeHistoryTable = () => {
    setHoldingTableDir(false)
    setHistoricalPriceDirective(true)
  }

  return (
    <div className="executive">
      <div className="header">
        <img src={executive} alt='header de Directivo' className='headerImage' width='100%'/>
      </div>
      <div className="dashboard">
        <div className="rigthBoard">
          <div className="founList">
            <FundList />
          </div>
          <div className="renderGraphicsA">
            <div className="botonsA">
              <div className='main-container-nav'>
                <button className='button-nav' onClick={() => setRenderGraphicDirect('assets')}>Assets Allocation</button>
                <button className='button-nav' onClick={() => setRenderGraphicDirect('sector')}>Sector</button>
                <button className='button-nav' onClick={() => setRenderGraphicDirect('regions')}>Regions</button>
                <button className='button-nav' onClick={() => setRenderGraphicDirect('benchmark')}>Benchmark</button>
              </div>
            </div>
            <div className="pieGraphicsRender">
              <div className="pieGraphics">
                {renderGraphicDirect === "assets" && <AssetAllocation/>} 
                {renderGraphicDirect === "sector" && <Sector/>} 
                {renderGraphicDirect === "regions" && <Regions/>} 
                {renderGraphicDirect === "benchmark" && <DiscretePerformance/>}
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
              <div className='main-container-navTable'>
                <button className='button-navTable' onClick={handleChangeHoldingTable}> Holdings </button>
                <button className='button-navTable' onClick={handleChangeHistoryTable}> Historical </button>
              </div>
            </div>
            <div className="tables">
              {HoldingTableDir === true ? <Holdings /> : null}
              {HistoricalPriceDirective === true ? <HistoricalPrice /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDirectivo;
