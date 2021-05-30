import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Return from './Return'

function FilterReturn() {
    const [index1, setIndex1] = useState();
    const [index2, setIndex2] = useState();
    const [rangoDate, setRangoDate] = useState(["01/02/22", "02/02/22", "03/02/22", "06/02/22", "07/02/22", "08/02/22", "09/02/22", "10/02/22", "13/02/22", "14/02/22", "15/02/22", "16/02/22", "17/02/22", "20/02/22", "21/02/22", "22/02/22", "23/02/22", "24/02/22"]);
    const [rangoDiff, setRangoDiff] = useState([0.45, 0.48, 0.42, 0.03, -0.02, -0.39, -0.48, -0.86, -0.88, -0.84, -0.9, -0.67, -0.6, -0.47, -0.56, -0.49, -0.51, -0.54]);

    const [datos, setDatos] = useState();
  
    const peticionApi = async () =>{
        await axios.get('https://rhisco-89b36-default-rtdb-b52e2.firebaseio.com/.json')
        .then(response =>{
          var respuesta = response.data;
          setDatos(respuesta)
         } )
}

const handleGetIndex = ()=>{
    const arrDate = []
    const arrDiff = []
    for(let i = index1 ; i <= index2 ; i++){
      arrDate.push(datos[i].Date)
      arrDiff.push(datos[i].Diffrenece);
    }
    setRangoDate(arrDate)
    setRangoDiff(arrDiff)
  }

const onChangeMonth1 = (e)=>{
    const selectedId = e.target.value;
    const selectedObject = datos.filter((d,index) =>d.Date===selectedId)[0]
    const indice1 = datos.indexOf(selectedObject)
    setIndex1(indice1)

  }
  const onChangeMonth2 = (e)=>{
    const selectedId = e.target.value;
    const selectedObject = datos.filter((d) =>d.Date===selectedId)[0]
    const indice2 = datos.indexOf(selectedObject)
    setIndex2(indice2)
}

useEffect(()=>{
    peticionApi();
  })

  return (
    <Fragment>
     
        <select onChange={(e) => {
      onChangeMonth1(e);
    }}>
        {datos && datos.map((d,i)=> (
        <option key={i} value={d.Date}> 
        {d.Date}
        </option> ))}
      </select>
      <select onChange={(e) => {
      onChangeMonth2(e);
    }}>
        {datos && datos.map((d, i)=> (
        <option key={i} value={d.Date}> 
        {d.Date}
        </option> ))}
      </select>
      <button onClick={handleGetIndex}>Ir</button>
      {/* <p>{rangoDate}</p>
      <p>{rangoDiff}</p> */}
          <div>
          <Return lafecha={rangoDate}
          ladiferencia={rangoDiff} />
          </div>       
    </Fragment>
  );
}
export default FilterReturn;