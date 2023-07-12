import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchCountry from '../components/searchCountry'
import FilterCountry from '../components/filterCountries'
import Navbar from '../components/navbar'


export default function Countries() {
  const [country, setCountry] = useState([]);
  const [countryFound, setCountryFound] = useState(true);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const countries = await data.json();
      setCountry(countries);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const getCountryName = async (countryName) => {
    try {
      const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const countries = await data.json();

      if (data.status === 404) {
        setCountryFound(false);
      } else {
        setCountryFound(true);
        setCountry(countries);
      }
    } catch (error) {
      console.error("Error al obtener el país:", error);
      setCountryFound(false);
    }
  };

  const getCountryByRegion =  async(regionName) =>{
    try{
      const data = await fetch(`https://restcountries.com/v3.1/region/${regionName}`)
      const countries = await data.json()
      setCountry(countries)
    } catch(error){
      console.error("Error al obtener el país:", error);
    }
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="content-search-filter" id="content-search-filter">
        <SearchCountry onSearch={getCountryName}></SearchCountry>
        {!countryFound && <p style={{ color: 'red', fontSize: 'bold' }}>No country found with the given name.</p>}
        <FilterCountry onSelect={getCountryByRegion}></FilterCountry>
      </div>
      <div class="content-card-country" id="content-card-country">
            {
              country.map(info =>{return(
                <Link to={`/${info.ccn3}`} class="card-country" key={info.ccn3}>
                  <div className="content-image-country">
                    <img src={info.flags.png} alt="country" />
                  </div>
                  <div className="info-country">
                    <h3>{info.name.common}</h3>
                    <p>Population: <span>{info.population}</span></p>
                    <p>Region: <span>{info.region}</span></p>
                    <p>Capital: <span>{info.capital}</span></p>
                  </div>   
                </Link>
              )})
            }
        </div>
    </div>

  )
}
