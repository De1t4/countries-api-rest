import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './navbar'

export default function CountryData() {
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
    const obtenerBorder = (e) =>{
      countryBorder(e.target.textContent)
    }

    
  return (
   <div>
      <Navbar>
      </Navbar>
      <Link to="/"><button className="btn-back"><i className="fa-solid fa-arrow-left"></i>Back</button></Link>
        {country.map(info => {
            return (
            <div className="content-info-country" key={info.name.common}>
                <div className="content-image-country">
                  <img src={info.flags.png} alt={info.flags.alt} className="image-country" />
                </div>
                <div className="content-country-data-general">
                <div className="country-data-complete">
                    <div className="country-info">
                    <h1 className="name-country">{info.name.common}</h1>
                    <p>Native Name: <span>{info.name.official}</span></p>
                    <p>Population: <span>{info.population}</span></p>
                    <p>Region: <span>{info.region}</span></p>
                    <p>Sub Region: <span>{info.subregion}</span></p>
                    <p>Capital: <span>{info.capital}</span></p>
                    </div>
                    <div className="country-generalities">
                    <p>Top Level Domain: <span>{info.tld} </span></p>
                    <p>Area: <span>{info.area}</span></p>
                    <div className="data-languages">
                        <p style={{display:"inline"}}>Languages: <span></span></p>
                        {info.languages ? (
                            Object.values(info.languages).map((language, index) => (
                                <span key={index}>{language} </span>
                                ))
                        ) : <span>None</span>}
                    </div>
                    <div className="data-currencies">
                        <p style={{display:"inline"}}>Currencies: </p>
                        {info.currencies ? (
                            Object.keys(info.currencies).map((currencies, index)=>(
                                <span key={index}>{currencies} </span>
                            ))
                        ) : <span>None</span>}
                    </div>
                    </div>
                </div>
                    {info.borders && info.borders.length > 0 ? ( //Verifica si existen bordes
                    <div className="border-countries">
                        <p className="title-border-countries">Border Countries:</p>
                        <div className="country-border">
                            {info.borders.map((border, index) => (
                            <span key={index} onClick={obtenerBorder} className='border'>{border}</span>
                            ))}
                        </div>
                    </div>
                    ) : null}
                </div>
            </div>
            );
        })}
    </div>
  )
}
