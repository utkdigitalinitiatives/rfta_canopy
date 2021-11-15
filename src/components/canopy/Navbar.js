import * as React from "react"
import Logo from "../../images/utk-logo.png"

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid px-4">
      <a className="navbar-brand" href="/">
        <img className= "logo-image" src={ Logo } />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/" onClick={() => console.log('hello there!')} >Browse</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">Search</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
