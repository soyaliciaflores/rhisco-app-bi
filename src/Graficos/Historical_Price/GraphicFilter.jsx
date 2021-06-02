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
    };

    useEffect(() => {
        peticionApi();
    }, [])
    const prueba = (datos, year) => { // ''
        let auxDate = [];
        let auxClose = [];
<<<<<<< HEAD
        const filtrado = datos.filter(date => date.Date.includes(year)) // '
        filtrado.forEach(item => {
=======

        const filtrado = datos.filter(date => date.Date.includes(año))

        filtrado.map(item => {

>>>>>>> df722d22cae8c269db1699a7cae753e43fe68b9a
            auxDate.push(item.Date)
            auxClose.push(item.Close)
        })
        setDate(auxDate);
        setClose(auxClose);
    }
<<<<<<< HEAD
    const handleCargarAños =  (e) => {
        const selectedYear = e.target.value
        prueba(historicalData, selectedYear) // ''
=======
    const handleCargarAños = function (e) {

        const opcion = e.target.value
        setYear(opcion)
        prueba(historicalData, year)
>>>>>>> df722d22cae8c269db1699a7cae753e43fe68b9a
    }
    return (

        <Fragment>

            <h3> Evolución de precios </h3>

            <select className="select-historical" name="categorias"

                id="seCategorias"
                onClick={handleCargarAños}>
<<<<<<< HEAD
                <option> Select the year</option>
=======
                <option> Seleccione un año</option>

>>>>>>> df722d22cae8c269db1699a7cae753e43fe68b9a
                {
                    options.map((item) => (
                        <option key={'categoria_' + item.years}>{item.years}</option>
                    ))
                }

            </select>
<<<<<<< HEAD
            <Line data={data} options={opciones}/>
        </Fragment>
    )
}
export default GraphicFilter;
=======

            <Line data={data} />

        </Fragment>
    )
};

export default GraphicFilter;
>>>>>>> df722d22cae8c269db1699a7cae753e43fe68b9a
