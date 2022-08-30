import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const CountriesDetailInfo = () => {
    const {countryId}=useParams();
    const [country,setCountry]=useState({});
    useEffect(()=>{
        const url=`https://restcountries.com/v3.1/alpha/${countryId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setCountry(data[0]))
    },[])
    return (
        <div>
            <h2>This is country ID: {countryId}</h2>
            <img src={country.flags?.png} alt="" />
            <h4>Official Name: {country.name?.official}</h4>
            <h4>Name: {country.name?.common}</h4>
            <h5>Population:{country.population}</h5>
            <p>Area :{country.area}</p>
            
        </div>
    );
};

export default CountriesDetailInfo;