import React, {Fragment, useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios'
import DataTable from 'react-data-table-component';

// import dbreturn from '../../ArchivosJSON/Return.json'
const columnas = [
    {
        name:"Fund Type",
        selector:"Fund Type",
        sortable:true
    },
    {
        name:"Name",
        selector:"Name",
        sortable:true
    },
    {
        name:"Group Name",
        selector:"Group Name",
        sortable:true
    },
    {
        name:"Fund Launch",
        selector:"Fund Launch",
        sortable:true
    },
    {
        name:"Domicile",
        selector:"Domicile",
        sortable:true
    },
    {
        name:"ISIN",
        selector:"ISIN",
        sortable:true
    },
    {
        name:"Price Currency",
        selector:"Price currency",
        sortable:true
    },
    {
        name:"Sector",
        selector:"Sector",
        sortable:true
    },
    {
        name:"Asset Class",
        selector:"Asset Class",
        sortable:true
    }
]
const url = 'https://rhisco-89b36-default-rtdb-40b73.firebaseio.com/.json';
const FundList = () => {
    const [data, setData] = useState([]);
    const peticionApi = async () =>{
        await axios.get(url)
        .then(resp =>{
          setData(resp.data);
          // setFund();
          console.log(resp)
        })
        .catch(err =>{
            console.log('Error: ', err)
        })
    }
    useEffect(() => {
        peticionApi();
    }, [])
    return ( 
        <Fragment>
            { data && data.map( fund => (
                <DataTable
                title = "Fund List"
                columns = {columnas}
                data = {fund}
                key = {fund.ISIN}
                />
            ))}
        </Fragment>
     );
}
export default FundList;