import { Link } from 'react-router-dom'
import { useDarkMode } from './DarkModeContext'

export default function Navbar() {
  const {darkMode, setDarkMode} = useDarkMode()

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }
  return (
    <nav className={`content-navbar ${darkMode ? "content-navbar-dark": ""}`} id="content-nav">
        <Link to="/">
          <h4 className='root'>Where in the world?</h4>
        </Link>
        <div className="change-theme" onClick={toggleDarkMode}> 
          <span>{darkMode? <i class="fa-solid fa-moon" style={{color: "#ffffff"}}></i>: <i className="fa-regular fa-sun"></i>}</span>
          <p id="btn-change-mode" >Dark Mode</p>
        </div>
    </nav>
  )
}
