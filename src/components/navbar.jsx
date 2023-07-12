import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav className="content-navbar" id="content-nav">
        <Link to="/">
          <h4>Where in the world?</h4>
        </Link>
        <div id="change-theme">
            <p id="btn-change-mode" ><i className="fa-regular fa-moon" id="icon" ></i> Dark Mode</p>
        </div>
    </nav>
  )
}
<nav className="content-navbar" id="content-nav">
<Link to="/">
  <h4>Where in the world?</h4>
</Link>
<div id="change-theme">
    <p id="btn-change-mode"><i className="fa-regular fa-moon" id="icon" ></i> Modo Oscuro</p>
</div>
</nav>