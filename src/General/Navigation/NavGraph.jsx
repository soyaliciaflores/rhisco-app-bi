import React, { Fragment } from 'react'

const NavGraph = () => {
    return (
        <Fragment>
            <div className='main-container-nav'>
                <button className='button-nav'>Asset Allocation</button>
                <button className='button-nav'>Sector</button>
                <button className='button-nav'>Regions</button>
                <button className='button-nav'>Benchmark</button>
            </div>
        </Fragment>
    )
}

export default NavGraph
