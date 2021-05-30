/* eslint-disable array-callback-return */
import React, {Fragment, useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const DiscretePerformance = () => {

    // const [Aegon,SetAegon] = useState();
    // const [PNSpecialis, SetPNSpecialis] = useState();
    const [DPData, SetDPData] = useState();
    console.log(DPData)

    // const data = {
    //   labels: foundType,
    //   datasets: [{
    //     label: 'Asset Allocation',
    //     data: netAssets,
    //     backgroundColor: [
    //       'rgb(0, 20, 20)',
    //       'rgb(0,41,41)',
    //       'rgb(0, 61, 61)',
    //       'rgb(0,82,82)',
    //       'rgb(142, 176, 176)',
    //       'rgb()'
    //     ],

    //   }]
    // };
    // const options ={
    //   maintainAspectRadio: false,
    //   responsive: true
    // }

    const getData = async () =>{
        await axios.get('https://rhisco-89b36-default-rtdb-2d767.firebaseio.com/.json')
        .then(response =>{
          let res = response.data;
          SetDPData(res)
          res.map((item,index) => {
            for (let i = 0; i < item.length; i++){
              console.log(item);
            }
          })
  
        })
    }
      useEffect(()=>{
        getData();
      },[])

    return ( 

        <Fragment>
          <div className='graphic'>
            <Line />
          </div>
        </Fragment>
    );
}
 
export default DiscretePerformance;