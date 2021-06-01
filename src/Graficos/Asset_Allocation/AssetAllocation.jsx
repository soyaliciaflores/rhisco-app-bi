import React, {Fragment, useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const AssetAllocation = () => {
  
    const [found,SetfoundType] = useState([]);
    const [netAsset, SetnetAssets] = useState([]);
  
    // const [assetsAlocationData, SetassetsAlocationData] = useState([]);
        
    const data = {
      labels: found,
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
    }

    const getData = async () =>{
        await axios.get('https://rhisco-89b36-default-rtdb.firebaseio.com/.json')
        .then(response =>{
          let res = response.data;
          const foundType = [];
          const netAssets = [];
          res.map(item => { 
            return(
              foundType.push(item.Type),
              netAssets.push(item.Netassets)
            )
          })
          SetfoundType(foundType)
          SetnetAssets(netAssets)
          // SetassetsAlocationData(res)
        })
    }
      useEffect(()=>{
        getData();
      },[])

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
}
 
export default AssetAllocation;