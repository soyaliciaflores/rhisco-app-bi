import React, { Fragment, useEffect, useState } from 'react';
import './FundList.css';
import axios from 'axios'

const url = 'https://rhisco-89b36-default-rtdb-40b73.firebaseio.com/.json';

const FundList = () => {
    const [data, setData] = useState([]);

    const peticionApi = async () => {
        await axios.get(url)
            .then(resp => {
                setData(resp.data);
            })
            .catch(err => {
                console.log('Error: ', err)
            })
    }

    useEffect(() => {
        peticionApi();
    }, [])

    return (
        <Fragment>
            <h2>Fund Information</h2>
            {
                data.map((item) => (
                    
                    
                    
                    <div className="table-content">
                        
                        <div className="table-right">
                        <div className="title-table">
                                <p>Fund Type:</p>
                                <p key={item.isin}> {item.fundType}</p>
                            </div>
                             <p> Name</p>
                            <p> Group Name </p>
                            <p> Sector</p>
                            <p> Assset Class</p>
                            <p> Price currency</p>
                            <p> Domicile</p>
                            <p> ISIN</p>
                            <p> Fund Launch</p>

                        </div>
                        <div className="table-left">
                           
                            <p> {item.name}</p>
                            <p> {item.groupName}</p>
                            <p> {item.sector}</p>
                            <p> {item.assetClass}</p>
                            <p> {item.priceCurrency}</p>
                            <p> {item.domicile}</p>
                            <p> {item.isin}</p>
                            <p> {item.fundLaunch}</p>
                        </div>

                    </div>
                ))
            }
        </Fragment>
    );
}

export default FundList;
