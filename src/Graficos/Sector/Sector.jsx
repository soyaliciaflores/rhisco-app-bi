import React, {Fragment, useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const Sector = () => {
    const [sectors,Setsector] = useState([]);
    const [netAsset, SetnetAssets] = useState([]);
    const [sectorData, SetsectorData] = useState([]);

    console.log(sectors,netAsset,sectorData);

    const data = {
      labels: sectors,
      datasets: [{
        label: 'Asset netAssets',
        data: netAsset,
        backgroundColor: [
          '#EF5D02',
          '#F16C19',
          '#F27B30',
          '#F48A48',
          '#F5995F',
          '#F7A776',
          '#F8B68D',
          '#FAC5A5',
          '#FBD4BC'
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
 
export default Sectors;