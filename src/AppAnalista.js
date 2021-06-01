import React, {useState} from 'react';
import FundList from './Graficos/Fund_List/FundList';
//import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import AssetAllocation from './Graficos/Asset_Allocation/AssetAllocation';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice';
import Holdings from './Graficos/Holdings/Holdings';
import NavGraph from './General/Navigation/NavGraph';
import HeaderAnalista from './General/Header_Analista/HeaderAnalista';
//import NavTable from './General/Navigation/NavTable';
import './AppAnalista.css';
import Regions from './Graficos/Regions/Regions';
import Sector from './Graficos/Sector/Sector';
import DiscretePerformance from './Graficos/Discrete_Performance/DiscretePerformance';
import NavTable from './General/Navigation/NavTable';

//import Sector from './Graficos/Sector/Sector';

function App() {

  const [showAssets, setshowAssets] = useState(true)
  const [showRegions, setshowRegions] = useState(false)
  const [showSector, setshowSector] = useState(false)
  const [showBenchmark, setshowBenchmark] = useState(false)
  const [renderTable, setrenderTable] = useState({

  })
  

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

  const handleChangeTable = () => {
 
  }


  return (
   
    <div className="executive">
    <div className="header">
      <HeaderAnalista/>
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
          <Holdings />
        </div>
        <div className="renderTables">
          <div className="bottonsB">
            <NavTable  />
          </div>
          <div className="tables">
            <HistoricalPrice />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;