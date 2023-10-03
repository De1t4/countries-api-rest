import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UseFetchCountry() {
    const [country, setCountry] = useState([]);
    const { ccn3 } = useParams();
  
    useEffect(() => {
      
    const obtenerDatos = async () => {
      try {
        const data = await fetch(`https://restcountries.com/v3.1/alpha?codes=${ccn3}`);
        const users = await data.json();
        setCountry(users);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    };
  
      obtenerDatos();
    }, [ccn3]);
  
    const countryBorder = async (value) => {
      try {
        const data = await fetch(`https://restcountries.com/v3.1/alpha?codes=${value}`);
        const users = await data.json();
        setCountry(users);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    };
  
    return {
      country, countryBorder
    }
}
