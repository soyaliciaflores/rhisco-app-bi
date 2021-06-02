/* eslint-disable array-callback-return */
import React, {Fragment, useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const AssetAllocation = () => {
  
    const [fund,SetfoundType] = useState([]);
    const [netAsset, SetnetAssets] = useState([]);
      
    const data = {

      labels: fund,
      datasets: [{

        label: 'Asset Allocation',
        data: netAsset,
        backgroundColor: [
          '#003232',
          '#2C5D5D',
          '#527E7E',
          '#729999',
          '#003232',
          '#8BAFAF',
        ],
      }]
    };

    const options ={
      maintainAspectRadio: false,
      responsive: true
    };

    // Obtención de la data de la gráfica Assets Allocation alojada en Firebase
    const getData = async () => {

        await axios.get('https://rhisco-89b36-default-rtdb.firebaseio.com/.json')
        .then(response =>{

          let res = response.data;
          const foundType = [];
          const netAssets = [];
          res.map(item => { 

            return(
              foundType.push(item.Type),
              netAssets.push(item.Netassets)
            );

          });
          SetfoundType(foundType)
          SetnetAssets(netAssets)

        });
    };

      useEffect(()=>{

        getData();
        
      },[]);

    return ( 

      <Fragment>
        <div className='graphic'>
          <div className='chartContainer'> 
            <Pie 
              data = {data}
              options = {options}
            />
          </div>
        </div>
      </Fragment>
    );
};
 
export default AssetAllocation;