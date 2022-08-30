import React, { useEffect, useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import './Countries.css'
const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Country Length:{countries.length}</h1>
           <div className='countries'>
           {
                countries.map(country=> <CountryDetail key={country.cca3} country={country}></CountryDetail>)
            }
           </div>
        </div>
    );
};

export default Countries;