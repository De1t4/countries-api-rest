import SearchCountry from '../components/searchCountry'
import FilterCountry from '../components/filterCountries'
import {CountryData} from '../components/props';
import { UseFetchCountries } from '../hooks/useFetchCountries';


export default function Countries() {
  
  const {getCountryByRegion, getCountryName, country, countryFound} = UseFetchCountries()

  return (
    <div>
      <div className="content-search-filter" id="content-search-filter">
        <SearchCountry onSearch={getCountryName}></SearchCountry>
        {!countryFound && <p style={{ color: 'red', fontSize: 'bold' }}>No country found with the given name.</p>}
        <FilterCountry onSelect={getCountryByRegion}></FilterCountry>
      </div>
      <div className="content-card-country" id="content-card-country">
        {country && country.map((datos, index)=>{
          return(
            <CountryData 
              key={index} 
              name={datos.name.common} 
              ccn3={datos.ccn3} 
              population={datos.population} 
              region={datos.region} 
              capital={datos.capital} 
              img={datos.flags.png}>
            </CountryData>
          )
        })
        }
      </div>
    </div>

  )
}
