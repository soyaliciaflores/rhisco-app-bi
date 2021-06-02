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
    const [historicalData, sethistoricalData] = useState();
    const data = {
        labels: date,
        datasets: [{
            label: 'Close',
            data: close,
            fill: false,
            borderColor: 'rgb(225, 102, 0)',
            tension: 0.1
        }]
    };
    const opciones = {
        responsive: true,
        animations: false
      }
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
    const prueba = (datos, year) => { // ''
        let auxDate = [];
        let auxClose = [];
        const filtrado = datos.filter(date => date.Date.includes(year)) // '
        filtrado.forEach(item => {
            auxDate.push(item.Date)
            auxClose.push(item.Close)
        })
        setDate(auxDate);
        setClose(auxClose);
    }
    const handleCargarAños =  (e) => {
        const selectedYear = e.target.value
        prueba(historicalData, selectedYear) // ''
    }
    return (
        <Fragment>
            <select className="select-historical" name="categorias"
                id="seCategorias"
                onClick={handleCargarAños}>
                <option> Select the year</option>
                {
                    options.map((item) => (
                        <option key={'categoria_' + item.years}>{item.years}</option>
                    ))
                }
            </select>
            <Line data={data} options={opciones}/>
        </Fragment>
    )
}
export default GraphicFilter;
