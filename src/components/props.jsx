import React  from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from './DarkModeContext'

export function CountryData (props) {

  const {darkMode} = useDarkMode()

  return (
    <Link to={props.ccn3} className={`card-country ${darkMode ? "card-country-dark": ""}`} key={props.ccn3}>
      <div className="content-image-country">
      <img src={props.img} alt="country" />
      </div>
      <div className="info-country">
      <h3>{props.name}</h3>
      <p>Population: <span>{props.population}</span></p>
      <p>Region: <span>{props.region}</span></p>
      <p>Capital: <span>{props.capital}</span></p>
      </div>   
    </Link>
  )
}

export function SingleCountry(props) {

  const {darkMode} = useDarkMode()

  return (
    <main className={`content-info-country ${darkMode ? "content-info-country-dark": ""}`} key={props.key}>
      <div className="content-image">
        <img src={props.image} alt={props.alt} className="image-country" />
      </div>
      <div className='container-info-country'>
        <h1 className="name-country">{props.nameCommon}</h1>
        <div className="content-info">
          <p>Native Name: <span>{props.nameOfficial}</span></p>
          <p>Population: <span>{props.population}</span></p>
          <p>Region: <span>{props.region}</span></p>
          <p>Sub Region: <span>{props.subRegion}</span></p>
          <p>Capital: <span>{props.capital}</span></p>
          <p>Top Level Domain: <span>{props.tld} </span></p>
          <p>Area: <span>{props.area}</span></p>
          <p>Languages: <span>{props.language}</span></p>
          <p>Currencies: <span>{props.currencies} </span></p>
        </div>
        <div className="border-countries">
          {props.borders}
        </div>
      </div>
    </main>
  )
}


