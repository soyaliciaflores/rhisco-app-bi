import React, {useState} from 'react';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import FundList from './Graficos/Fund_List/FundList';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';
import Holdings from './Graficos/Holdings/Holdings';
import Regions from './Graficos/Regions/Regions';
import Sector from './Graficos/Sector/Sector';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import analyst from './Assets/analyst.png'
import FilterReturn from './Graficos/Return/FilterReturn';

import './AppAnalista.css';

function App() {

<<<<<<< HEAD
  const [showAssets, setshowAssets] = useState(true)
  const [showRegions, setshowRegions] = useState(false)
  const [showSector, setshowSector] = useState(false)
  const [showBenchmark, setshowBenchmark] = useState(false)
  const [holdingTable, setHoldingTable] = useState(false)
  const [historyTable, sethistoryTable] = useState(true)
  
=======
  const [renderGraphic, setRenderGraphic] = useState('assetsAllocation')
  const [returnTable, setreturnTable] = useState(false)
  const [historyTable, sethistoryTable] = useState(true)
>>>>>>> df722d22cae8c269db1699a7cae753e43fe68b9a

  const handleChangeHistoryTable = () => {
    sethistoryTable(true)
    setreturnTable(false)
  }
  const handleChangeHoldingTable = () => {
    sethistoryTable(false)
    setreturnTable(true)
  }

  return (
   
    <div className="executive">
      <div className="header">
        <img src={analyst} alt='header de Directivo' className='headerImage' width='100%'/>
      </div>
      <div className="dashboard">
        <div className="rigthBoard">
          <div className="founList">
            <div className="foundListContainer">
              <FundList />
            </div>
          </div>
          <div className="renderGraphicsA">
            <div className="botonsA">
              <div className='main-container-nav'>
                <button className='button-nav' onClick={() => setRenderGraphic('assetsAllocation')}>Asset Allocation</button>
                <button className='button-nav' onClick={() => setRenderGraphic('sector')}>Sector</button>
                <button className='button-nav' onClick={() => setRenderGraphic('regions')}>Regions</button>
                <button className='button-nav' onClick={() => setRenderGraphic('benchmark')}>Benchmark</button>
              </div>
            </div>
          <div className="pieGraphicsRender">
            <div className="pieGraphics">
              {renderGraphic === "assetsAllocation" && <AssetAllocation/>} 
              {renderGraphic === "sector" && <Sector/>}
              {renderGraphic === "regions" && <Regions/>}
              {renderGraphic === "benchmark" && <DiscretePerformance/>}
            </div>
          </div>
        </div>
      </div>
      <div className="leftBoard">
        <div className="renderGraphicB">
          <Holdings />
        </div>
          <div className="renderTables">
            <div className="bottonsB">
              <div className='main-container-navTable'>
                <button className='button-navTable' onClick={handleChangeHistoryTable}> History </button>
                <button className='button-navTable' onClick={handleChangeHoldingTable}> Return </button>
              </div>
            </div>
            <div className="tables">
              {returnTable === true ? <FilterReturn/> : null}
              {historyTable === true ? <HistoricalPrice /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
