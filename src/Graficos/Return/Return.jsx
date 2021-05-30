import React, {Fragment, useState, useEffect} from 'react';
import dbreturn from '../../ArchivosJSON/Return.json'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const Return = () => {
    const [Diffrenece, setDiffrenece] = useState([]);
    const [Date, setDate] = useState([]);
  
    
    const data = {
      labels: Date,
      
      datasets:[{ 
        label: "Diference",
      BackgroundColor: "#FFF000",
      borderColor: "blue",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,0,0,2)",
      hoverBorderColor: "#FFF000",
      data: Diffrenece
    }]
    }
    const opciones ={
      maintainAspectRadio: false,
      responsive: true
    }
  
    const peticionApi = async () =>{
      await axios.get('https://rhisco-89b36-default-rtdb-b52e2.firebaseio.com/.json')
      .then(response =>{
        var respuesta = response.data;
        var auxDiffrenece = [], auxDate = [];
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
              <h2>Return</h2>
              <div className="App" style={{width:"45%", height: "500px"}}>
              <Line data={data} options={opciones} />
              </div>
             
          </Fragment>
       );
}
 
export default Return;