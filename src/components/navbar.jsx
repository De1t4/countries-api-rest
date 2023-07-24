import { Link } from 'react-router-dom'

export default function Navbar() {
  

  return (
    <nav className="content-navbar" id="content-nav">
        <Link to="/">
          <h4 className='root'>Where in the world?</h4>
        </Link>
        <div className="change-theme">
          <i class="fa-regular fa-sun"></i>
          <p id="btn-change-mode">Dark Mode</p>
        </div>
    </nav>
  )
}
