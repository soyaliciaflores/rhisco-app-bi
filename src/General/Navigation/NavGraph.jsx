import React, { Fragment } from 'react'

const NavGraph = ({handleChangeAsset, handleChangeSector, handleChangeRegions, handleChangeBenchmark}) => {
   
    return (
        <Fragment>
            <div className='main-container-nav'>
                <button className='button-nav' onClick={() => {handleChangeAsset()}}>Asset Allocation</button>
                <button className='button-nav' onClick={() => {handleChangeSector()}}>Sector</button>
                <button className='button-nav' onClick={() => {handleChangeRegions()}}>Regions</button>
                <button className='button-nav' onClick={() => {handleChangeBenchmark()}}>Benchmark</button>
            </div>
        </Fragment>
    )
}

export default NavGraph
