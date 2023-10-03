import { useEffect, useState } from 'react'
import { fetchCountries } from '../helpers/fetchCountries';


export const UseFetchCountries = () => {
    const [country, setCountry] = useState([]);
    const [countryFound, setCountryFound] = useState(true);
    
    const getCountries = async () =>{
      const {countries} =  await fetchCountries()
      setCountry(countries)
    }

    useEffect(() => {
      getCountries()
    }, []);
  
    const getCountryName = async (countryName) => {
      try {
        const endpoint = countryName === "" ? "/all" : `/name/${countryName}`;
    
        const response = await fetch(`https://restcountries.com/v3.1/${endpoint}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener la información del país.");
        }
    
        const countries = await response.json();
    
        if (countryName !== "" && countries.length === 0) {
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
  
    return{
      getCountryByRegion, getCountryName, country, countryFound
    }
}
