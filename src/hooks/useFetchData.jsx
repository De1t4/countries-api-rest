import { useState, useEffect } from 'react';

const useFetchData = (endPoint) => {
	const [countryData, setCountryData] = useState([]);

	const obtenerDatos = async () => {
	  try {
		const response = await fetch(`https://restcountries.com/v3.1/${endPoint}`);
		const countries = await response.json();
		setCountryData(countries);
	  } catch (error) {
		console.error("Error al obtener los datos:", error);
	  }
	};
  
	useEffect(() => {
	  obtenerDatos();
	}, []);
  
	return countryData;
};

export default useFetchData;