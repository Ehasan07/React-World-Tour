import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [VisitedCountries,setVisitedCountries] = useState([]);


useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
},[]);



    const handleVistiedCountry = country =>{
      console.log('add this to your visited country');
      const newvisitedCountries =[...VisitedCountries, country];
      setVisitedCountries(newvisitedCountries);
    }

    return (
        <div >
        <h3 className="countries">Countries: {countries.length}</h3>
         <div>
           <h4 className="countries">visited Countries : {VisitedCountries.length}</h4>
           <ul>
              {
                VisitedCountries.map(country =><li className="countries" key={country.cca3}>  
                {country.name.common}</li>)
              }

           </ul>
         </div>
        <div  className="country-container">
        {
          countries.map((country) => <Country
          key={country.cca3}
          handleVistiedCountry={handleVistiedCountry}
          country={country}></Country>
          )
        }
        </div>
      </div>
    );
};

export default Countries;