import React, { useEffect, useState } from 'react'
import SearchCountry from '../components/searchCountry'
import FilterCountry from '../components/filterCountries'
import Navbar from '../components/navbar'
import CountryData from './props';

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
      <div className="content-card-country" id="content-card-country">
        {country.map((datos)=>{
          return(
            <CountryData name={datos.name.common} ccn3={datos.ccn3} population={datos.population} region={datos.region} capital={datos.capital} img={datos.flags.png}></CountryData>
          )
        })
        }
      </div>
    </div>

  )
}
