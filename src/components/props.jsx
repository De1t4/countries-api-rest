import React  from 'react'
import { Link } from 'react-router-dom'

export function CountryData (props) {

  return (
    <Link to={props.ccn3} className="card-country" key={props.ccn3}>
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
  return (
    <div className="content-info-country" key={props.key}>
      <div className="content-image-country">
        <img src={props.image} alt={props.alt} className="image-country" />
      </div>
      <div className="content-country-data-general">
        <div className="country-data-complete">
          <div className="country-info">
            <h1 className="name-country">{props.nameCommon}</h1>
            <p>Native Name: <span>{props.nameOfficial}</span></p>
            <p>Population: <span>{props.population}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <p>Sub Region: <span>{props.subRegion}</span></p>
            <p>Capital: <span>{props.capital}</span></p>
          </div>
          <div className="country-generalities">
            <p>Top Level Domain: <span>{props.tld} </span></p>
            <p>Area: <span>{props.area}</span></p>
            <div className="data-languages">
              <p style={{ display: "inline" }}>Languages: <span></span></p>
              <span>{props.language}</span>
            </div>
            <div className="data-currencies">
              <p style={{ display: "inline" }}>Currencies: </p>
              <span>{props.currencies} </span>
            </div>
          </div>
        </div>
        {props.borders}
      </div>
    </div>
  )
}


