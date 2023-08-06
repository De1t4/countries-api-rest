import { Link } from 'react-router-dom'
import ICON_SUN from './icon'

export default function Navbar() {
  
  return (
    <nav className="content-navbar" id="content-nav">
        <Link to="/">
          <h4 className='root'>Where in the world?</h4>
        </Link>
        <div className="change-theme">
          <p id="btn-change-mode" ><ICON_SUN />Dark Mode</p>
        </div>
    </nav>
  )
}
