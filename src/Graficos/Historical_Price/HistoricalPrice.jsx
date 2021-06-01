import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import DataTable from 'react-data-table-component'
import GraphicFilter from './GraphicFilter'
import './HistoricalPrice.css'
//import Graphics from './Graphics'


const columnas = [
    {
        name: 'ISIN',
        selector: 'ISIN',
        sortable: true
    },

    {
        name: 'Date',
        selector: 'Date',
        sortable: true
    },
    {
        name: 'Open',
        selector: 'Open',
        sortable: true
    },
    {
        name: 'High',
        selector: 'High',

    },
    {
        name: 'Low',
        selector: 'Low',
        sortable: true
    },
    {
        name: 'Close',
        selector: 'Close',
        sortable: true
    },

]

const api = 'https://rhisco-89b36-default-rtdb-4be8b.firebaseio.com/.json'

const HistoricalPrice = () => {


    const [data, setData] = useState([]);

    const peticionApi = async () => {
        await axios.get(api)
            .then(res => {
                setData(res.data)
            })
    }
    useEffect(() => {
        peticionApi();
    }, [])


    return (

        <Fragment>
            <DataTable
                columns={columnas}
                data={data}
                title='Historical Prices'
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 15, 25, 50]}
                paginationComponentOptions={{
                    rowsPerPageText: 'Records per page:',
                    rangeSeparatorText: 'out of',
                }}

            />
            {/* <Graphics /> */}
            <GraphicFilter />
        </Fragment>
    );
}

export default HistoricalPrice;