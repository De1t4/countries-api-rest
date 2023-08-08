import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './navbar'
import { SingleCountry } from './props';
import { useDarkMode } from './DarkModeContext';

export default function CountryData() {
    const [country, setCountry] = useState([]);
    const { ccn3 } = useParams();
    const {darkMode} = useDarkMode()

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

  return (
    <>
      <Navbar>
      </Navbar>
      <Link to="/"><button className={`btn-back ${darkMode? "btn-back-dark": ""}`}><i class="fa-solid fa-arrow-left" style={darkMode? {color: "#fff"}:{color: "#000000"}}></i>Back</button></Link>
        {country.map((info, index) => {
            return (
              <SingleCountry key={index} 
              nameCommon={info.name.common} 
              image={info.flags.png} 
              alt={info.flags.alt} 
              nameOfficial={info.name.official} 
              population={info.population} 
              region={info.region} 
              subRegion={info.subregion} 
              capital={info.capital} 
              tld={info.tld} 
              area={info.area} 
              language={info.languages ? (
                Object.values(info.languages).map((language, index) => (
                  <span style={{display:'inline'}}>{language} </span>
                ))) : ""}

              currencies={info.currencies ? (
                Object.keys(info.currencies).map((currencies, index) => (
                  <span style={{display:'inline'}}>{currencies}</span>
                ))
              ) : ""}
              borders= {info.borders && info.borders.length > 0 ? ( //Verifica si existen bordes
                <div className="country-border">
                  <p className="title-border">Border Countries:</p>
                  <div className='content-border'>
                  {info.borders.map((border, index) => (
                      <span key={index} onClick={(e) => countryBorder(e.target.textContent)} className='border'>{border}</span>

                  ))}
                 </div></div>) : null}
              ></SingleCountry>
            );
        })}
    </>
  )
}
