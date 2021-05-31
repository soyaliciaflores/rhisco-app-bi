import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { Line } from 'react-chartjs-2'
const api = 'https://rhisco-89b36-default-rtdb-4be8b.firebaseio.com/.json'

const options = [
    {
        'years': '2020'

    },
    {
        'years': '2019'

    },
    {
        'years': '2018'

    }
]


const GraphicFilter = () => {

    const [date, setDate] = useState([]);
    const [close, setClose] = useState([]);
    const [year, setYear] = useState('');
    const [historicalData, sethistoricalData] = useState();
   

    const data = {
        labels: date,
        datasets: [{
            label: 'Low and High compare',
            data: close,
            fill: false,
            borderColor: 'rgb(225, 102, 0)',
            tension: 0.1
        }]
    };





    const peticionApi = async () => {
        await axios.get(api)
            .then(res => {
                let answer = res.data
                sethistoricalData(answer)

            
            })
    }
    useEffect(() => {
        peticionApi();
    }, [])

    const prueba = (datos, año) => {

        console.log();

        let auxDate = [];
        let auxClose = [];
        const filtrado = datos.filter(date => date.Date.includes(año))
        filtrado.map(item => {

            auxDate.push(item.Date)
            auxClose.push(item.Close)

        })

        setDate(auxDate);
        setClose(auxClose);
    }
    const handleCargarAños = function (e) {
        const opcion = e.target.value
        setYear(opcion)
        prueba(historicalData,year)

    }
    return (
        <Fragment>
            <select name="categorias"
                id="seCategorias"
                onClick={handleCargarAños}>
                <option> Seleccione un año</option>
                {
                    options.map((item, i) => (

                        <option key={'categoria' + i}>{item.years}</option>




                    ))
                }





            </select>



            <Line data={data} />



        </Fragment>
    )
}
export default GraphicFilter;