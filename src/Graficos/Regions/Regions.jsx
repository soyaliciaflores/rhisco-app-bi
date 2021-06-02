import React, {Fragment, useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const Regions = () => {

    const [region,Setregions] = useState([]);
    const [allocations, Setallocation] = useState([]);

    const data = {

      labels: region,
      datasets: [{
        label: 'Asset Allocation',
        data: allocations,
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
    };

    const getData = async () =>{

      //URL para obtener la date de la gráfica de Regions
        await axios.get('https://rhisco-89b36-default-regions-data.firebaseio.com/.json')
        .then(response =>{

          let res = response.data;
          const regions = [];
          const allocation = [];
          res.map(item => { 

            return(
              regions.push(item.Region),
              allocation.push(item.Allocation)
            )
          });

          Setregions(regions)
          Setallocation(allocation)

        });
    };

      useEffect(()=>{
        getData();
      },[]);

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
};
 
export default Regions;