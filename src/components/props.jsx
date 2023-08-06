import React  from 'react'
import { Link } from 'react-router-dom'

export default function CountryData (props) {

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
