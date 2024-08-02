import { useState } from 'react';
import './Country.css';
const Country = ({country,handleVistiedCountry}) => {
   const {name,flags,population,area,region,cca3} = country;
   
   const[visited,setVisited]= useState(false);
   
   const handleVistied = () =>{
    setVisited(!visited);
   }


  const passwithparams =() =>{
    handleVistiedCountry(country);
  }
   return (
        <div className={`country ${ visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited ? 'red' :'white'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt=''/>
            <p style={{color: visited ? 'Black' :'aqua'}} >Population : {population}</p>
            <p style={{color: visited ? 'Black' :'aqua'}}>Area : {area}</p>
            <p style={{color: visited ? 'black' :'aqua'}}>Region : {region}</p>
            <p style={{color: visited ? 'black' :'aqua'}}><small>Code :{cca3} </small></p>
            <button className='button' onClick={passwithparams}>Mark visited</button>
            <br />
            <br />
            <button className='button' onClick={handleVistied}>{ visited ? 'Visited' : 'Going' }
            </button>
            {visited ?   '  I have visited this country.' :' I want to visit. '}
        </div>
    );
};

export default Country;