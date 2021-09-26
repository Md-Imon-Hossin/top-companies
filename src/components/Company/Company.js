import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Company.css'
const Company = (props) => {
    const element = <FontAwesomeIcon icon={faPlus} />
    const { company, country, sector, bil, img,rank } = props.company;
    return (
        <div className='company'>
            <img src={img} alt="" />
            <h2>Company :  {company}</h2>
            <h3>Rank : {rank}</h3>
            <h3>Country : {country}</h3>
            <h3>Sector : {sector}</h3>
            <h3>Bil : {bil}</h3>
            <button onClick={()=>props.handleAddToCart(props.company)}>{element} Add To Bil</button>
        </div>
    );
};

export default Company;