import React, {Fragment, useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const Sector = () => {
    const [sector,Setsector] = useState();
    const [netAssets, SetnetAssets] = useState();
    const [sectorData, SetsectorData] = useState();

    console.log(sector,netAssets,sectorData);

    const data = {
      labels:sector,
      datasets: [{
        label: 'Asset netAssets',
        data: netAssets,
        backgroundColor: [
          'rgb(0, 8, 20)',
          'rgb(0,24,61)',
          'rgb(0, 41, 102)',
          'rgb(0,57,143)',
          'rgb(0, 73, 184)',
          'rgb(0, 90, 224)'
        ],

      }]
    };
    const options ={
      maintainAspectRadio: false,
      responsive: true
    }

    const getData = async () =>{
        await axios.get('https://rhisco-89b36-default-rtdb-e7e3f.firebaseio.com/.json')
        .then(response =>{
          let res = response.data;
          const sector = [];
          const netAssets = [];
          res.map(item => { 
            return(
              sector.push(item.Sector),
              netAssets.push(item.Netassets)
            )
          })
          Setsector(sector)
          SetnetAssets(netAssets)
          SetsectorData(res)
        })
    }
      useEffect(()=>{
        getData();
      },[])

    return ( 

        <Fragment>
          <div className='graphic'>
            <Pie 
              data = {data}
              options = {options}
            />
          </div>
        </Fragment>
    );
}
 
export default Sector;