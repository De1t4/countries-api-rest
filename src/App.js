import Countries from './components/countries';
import CountriesData from './components/countryData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

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
