import React from 'react'

export default function filterCountries({onSelect}) {
const selectHendler = (e) =>{
    const regionName = e.target.value
    onSelect(regionName)
}
  return (
    <div className="select-filter">
        <select className="filter" onChange={selectHendler}>
            <option defaultValue="none" selected hidden>Filter by Region</option>
            <option defaultValue="Africa">Africa</option>
            <option defaultValue="America">America</option>
            <option defaultValue="Asia">Asia</option>
            <option defaultValue="Europe">Europe</option>
            <option defaultValue="Oceania">Oceania</option>
        </select>
    </div>
  )
}
