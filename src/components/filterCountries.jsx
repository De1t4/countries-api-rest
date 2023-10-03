import React from 'react'
import { useDarkMode } from './DarkModeContext'

export default function FilterCountries({onSelect}) {
  const {darkMode} = useDarkMode()

  const selectHendler = (e) =>{
      const regionName = e.target.value
      onSelect(regionName)
  }

  return (
    <div className={`select-filter ${darkMode ? "select-filter-dark": ""}`}>
        <select className="filter" onChange={selectHendler}>
            <option defaultValue="none" hidden>Filter by Region</option>
            <option defaultValue="Africa">Africa</option>
            <option defaultValue="America">America</option>
            <option defaultValue="Asia">Asia</option>
            <option defaultValue="Europe">Europe</option>
            <option defaultValue="Oceania">Oceania</option>
        </select>
    </div>
  )
}
