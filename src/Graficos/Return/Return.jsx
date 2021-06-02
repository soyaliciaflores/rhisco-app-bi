import React, {Fragment, useEffect} from 'react';
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const Return = (props) => {
    
    const data = {

      labels: props.lafecha,
      datasets:[{ 

        label: "Diference",
        borderColor: "#E46C0A",
        borderWidth: 5,
        data: props.ladiferencia
        
      }]
    };

    const opciones = {
      responsive: true,
      animations: false
    };

    const peticionApi = async () =>{

      await axios.get('https://rhisco-89b36-default-rtdb-b52e2.firebaseio.com/.json')

      .then(response =>{

        const respuesta = response.data;
        const auxDiffrenece = [], auxDate = [];

          respuesta.map(elemento => { 
            
            auxDiffrenece.push(elemento.Diffrenece);
            auxDate.push(elemento.Date);
            return 'difference data'

          });
      });
    };
  
    useEffect(()=>{
      peticionApi();
    },[]);
  
    return ( 

      <Fragment>

        <div className='generalContainer'>
          <div className="graphicReturn" style={{width:"99%"}}>

            <Line data={data} options={opciones} />

          </div>
        </div>

      </Fragment>
    );
};
 
export default Return;