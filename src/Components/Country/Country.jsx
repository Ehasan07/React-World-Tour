import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
   const {name,flags,population,area,region,cca3} = country;
   
   const[visited,setVisited]= useState(false);
   
   const handleVistied = () =>{
    setVisited(!visited);
   }

   return (
        <div className='country'>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt=''/>
            <p>population : {population}</p>
            <p>area : {area}</p>
            <p>region : {region}</p>
            <p><small>Code :{cca3} </small></p>
            <button onClick={handleVistied}>{ visited ? 'Visited' : 'Going' }
            </button>
            {visited ?   '  I have visited this country.' :' I want to visit. '}
        </div>
    );
};

export default Country;