import { useDarkMode } from './components/DarkModeContext';
import Countries from './pages/countries';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import CountryUnique from './pages/CountryUnique';
import Navbar from './components/navbar';

function App() {
  const {darkMode} = useDarkMode()

  return (
    <div className={`container-app ${darkMode? "container-app-dark": ""}`}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Countries/>}></Route>
          <Route path='/:ccn3' element={<CountryUnique/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
