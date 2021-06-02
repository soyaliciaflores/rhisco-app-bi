/* eslint-disable array-callback-return */
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { Line } from 'react-chartjs-2'

/*URL con la API de la gráfica de Historical*/
const api = 'https://rhisco-89b36-default-rtdb-4be8b.firebaseio.com/.json'

const Graphics = () => {

    const [date, setDate] = useState([]);
    const [low, setLow] = useState([]);

    const data = {

        labels: date,
        datasets: [{

            label: 'Low and High compare',
            data: low,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const peticionApi = async () => {

        await axios.get(api)
            .then(res => {

                let answer =res.data
                let auxLow = [];
                let auxDate = [];
                
                answer.map (item => {

                    auxLow.push(item.Close)
                    auxDate.push(item.Date)
                });

                setLow(auxLow);
                setDate(auxDate);

            });
    };

    useEffect(() => {
        peticionApi();
    }, []);

    return (
        <Fragment>
            <Line data={data}/>
        </Fragment>

    );
};
export default Graphics;
