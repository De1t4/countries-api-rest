import { useDarkMode } from './components/DarkModeContext';
import Countries from './components/countries';
import CountriesData from './components/countryData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/style.css';

function App() {
  const {darkMode} = useDarkMode()

  return (
    <div className={`container-app ${darkMode? "container-app-dark": ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Countries/>}></Route>
          <Route path='/:ccn3' element={<CountriesData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
