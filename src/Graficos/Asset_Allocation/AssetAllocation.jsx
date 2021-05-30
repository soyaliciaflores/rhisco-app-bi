import React, {Fragment, useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const AssetAllocation = () => {

    const [foundType,SetfoundType] = useState()
    const [netAssets, SetnetAssets] = useState()
    console.log(foundType, netAssets);

    const data = {
      
      labels: foundType,
      datasets: [{
        label: 'My First Dataset',
        data: netAssets,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    const options ={
      maintainAspectRadio: false,
    }

    // const data = {
    //   labels: [foundType],
    //   dataSets:[{
    //     label:"Assets Allocation",
    //     data: [netAssets],
    //     BackgroundColor: "004E4E",
    //     borderWidth: 1,
    //   }]      
    // }
     
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
        })
    }
      useEffect(()=>{
        getData();
      },[])

    return ( 

        <Fragment>
          <div>
            <Pie 
              data = {data}
              options = {options}
            />
          </div>
        </Fragment>
    );
}
 
export default AssetAllocation;