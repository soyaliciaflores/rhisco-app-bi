import React, { Fragment } from 'react'

const NavTable = ({handleChangeHoldingTable, handleChangeHistoryTable}) => {
    return (
        <Fragment>
        <div className='main-container-navTable'>
            <button className='button-navTable' onClick={() => handleChangeHoldingTable()} >Holding</button>
            <button className='button-navTable' onClick={() => handleChangeHistoryTable()} >History</button>
        </div>
    </Fragment>
    )
}

export default NavTable
