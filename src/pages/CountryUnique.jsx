import { Link } from 'react-router-dom'
import { SingleCountry } from '../components/props';
import { useDarkMode } from '../components/DarkModeContext';
import UseFetchCountry from '../hooks/useFetchCountry';

export default function CountryUnique() {
  const {darkMode} = useDarkMode()
  const {country, countryBorder} = UseFetchCountry()

  return (
    <>
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
