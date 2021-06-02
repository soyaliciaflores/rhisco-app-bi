/* eslint-disable array-callback-return */
import React, {Fragment, useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const DiscretePerformance = () => {

    const [Aegon,SetAegon] = useState([]);
    const [PNSpecialis, SetPNSpecialis] = useState([]);
    const [Benchmark,SetBenchmark] = useState([]);
  
    const data = {

      labels: Benchmark,
      datasets: [{

          label: 'Aegon Stability Pn AORt',
          data: Aegon,
          fill: false,
          borderColor: '#004E4E',
          tension: 0.1
        },
        {
          label: 'PN Specialist',
          data: PNSpecialis,
          fill: false,
          borderColor: '#EF5D02',
          tension: 0.1
        }
      ],
    };

    const getData = async () =>{

        await axios.get('https://rhisco-89b36-default-rtdb-2d767.firebaseio.com/.json')
        .then(response =>{

          let res = response.data;
          const pnSpecialist = [];
          const aegonStability = [];
          const benchmark = [];

          res.map((data) => {

            pnSpecialist.push(data.PN_Specialist);
            aegonStability.push(data.Aegon_Stability_Pn_AOR);
            benchmark.push(data.Benchmark);

          });
          
          SetPNSpecialis(pnSpecialist);
          SetAegon(aegonStability);
          SetBenchmark(benchmark);
        });
    };
      useEffect(()=>{
        getData();
      },[]);

    return ( 

        <Fragment>
          <div className='graphicDP' style={{width:"100%"}}>
            <Line 
              data = {data}
            />
          </div>
        </Fragment>
    );
};
 
export default DiscretePerformance;