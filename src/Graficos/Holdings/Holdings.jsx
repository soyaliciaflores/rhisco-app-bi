import React, {Fragment, useEffect, useState} from 'react';
//import Holdings from '../../ArchivosJSON/Holdings.json'
import axios from 'axios'
import DataTable from 'react-data-table-component'


const columns= [
    
        {
            name:'Fund',
            selector: 'Fund', 
            sortable: true,
            center: true,
            wrap: true
        },
        {
            name:'Company',
            selector: 'Company', 
            sortable: true,
            center: true,
            wrap: true
           
        },
        {
            name:'ISIN',
            selector: 'ISIN', 
            sortable: true,
            center: true
        },
        {
            name:'1 year change',
            selector: '1 year change', 
            sortable: true,
            center: true,
            
        },
        {
            name:'Portfolio weight',
            selector: 'Portfolio weight', 
            sortable: true,
            center: true
        },
        // {
        //     name:'Long allocation',
        //     selector: 'Long allocation', 
        //     sortable: true
        // },
        
    ] 

    
    const dataAPI ='https://rhisco-89b36-default-rtdb-holdings.firebaseio.com/.json'
    
    const Holdings = () => {
    
    
        const [data, setData] = useState([]);
        console.log(data)
        const apiRequest = async () => {
            await axios.get(dataAPI)
                .then(res => {
                    const data = res.data
                    
                    setData(data)
                    
    
                })
        }
        useEffect(() => {
           apiRequest();
        }, [])
    
        // createTheme('holdingsGreen', {
        //     text: {
        //       primary: '#000000',
        //       secondary: '#FFFFF',
        //     },
        //     background: {
        //       default: '#9CBABA',
        //     },
        //     context: {
        //       background: '#00000',
        //       text: '#FFFFFF',
        //     },
        //     divider: {
        //       default: '#0000000',
        //     },
            
            
        //   });

          // const customStyles = {
            
          //   rows: {
          //     style: {
          //       minHeight: '80px', // override the row height
          //     }
          //   },
          //   headCells: {
          //     style: {
          //       paddingLeft: '8px', // override the cell padding for head cells
          //       paddingRight: '8px',
                
          //     },
          //   },
          //   cells: {
          //     style: {
          //       paddingLeft: '8px', // override the cell padding for data cells
          //       paddingRight: '8px',
          //     },
          //   },
          // };

    return ( 
        <Fragment>
           <div className="tableHoldings">
            <div className="tableContainer">
                <DataTable
                columns={columns}
                data={data}
                title= 'Holdings'
                center
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[1, 1, 1]}
                paginationComponentOptions={{
                rowsPerPageText: 'Records per page:',
                rangeSeparatorText: 'out of',
        }}
                
                />
              </div>
           </div>
        </Fragment>
     );
}
 
export default Holdings;