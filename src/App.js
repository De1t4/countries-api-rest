import { useState } from 'react';
import Countries from './components/countries';
import CountriesData from './components/countryData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(false)
  const changeBackgrund = () =>{
    setTheme(!theme)
  }
  return (
    <div className="container-app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Countries appTheme={changeBackgrund}/>}></Route>
          <Route path='/:ccn3' element={<CountriesData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
