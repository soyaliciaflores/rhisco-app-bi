import React, {Fragment, useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2'
import axios from 'axios'
// import FilterReturn from './FilterReturn';

const Return = (props) => {
    const [Diffrenece, setDiffrenece] = useState([]);
    const [Date, setDate] = useState([]);
    
    const data = {
      labels: props.lafecha,
      datasets:[{ 
        label: "Diference",
      BackgroundColor: "#FFF000",
      borderColor: "blue",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,0,0,2)",
      hoverBorderColor: "#FFF000",
      data: props.ladiferencia
    }]
    }
    const opciones ={
      maintainAspectRadio: false,
      responsive: true
    }
  
    const peticionApi = async () =>{
      await axios.get('https://rhisco-89b36-default-rtdb-b52e2.firebaseio.com/.json')
      .then(response =>{
        const respuesta = response.data;
        const auxDiffrenece = [], auxDate = [];
        respuesta.map(elemento =>{
          auxDiffrenece.push(elemento.Diffrenece);
          auxDate.push(elemento.Date);
        })
        setDiffrenece(auxDiffrenece);
        setDate(auxDate);
      })
    }
  
    useEffect(()=>{
      peticionApi();
    },[])
  
    return ( 
      <Fragment>
              <div className="App" style={{width:"45%", height: "500px"}}>
              <Line data={data} options={opciones} />
              </div>
          </Fragment>
       );
}
 
export default Return;