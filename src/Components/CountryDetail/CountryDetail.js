import React from 'react';
import './CountryDetail.css'
import {Link, useNavigate } from "react-router-dom";
const CountryDetail = (props) => {
    const {cca3,name,flags}=props.country;
    const navigate=useNavigate();
    const countryDetails=()=>{
        const url=`/countries/${cca3}`
        navigate(url)
    }
    return (
        <div className='country-detail'>
            <h5>{name.common}</h5>
            <img src={flags.png} alt="" />
            <Link to={'/countries/'+cca3}></Link>
            <button onClick={countryDetails}>Click more:{cca3}</button>
        </div>
    );
};

export default CountryDetail;