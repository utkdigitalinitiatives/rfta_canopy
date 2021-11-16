import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/utk-logo.png"

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid px-4">
      <a className="navbar-brand" href="/">
        <img className= "logo-image" src={ Logo } />
      </a>
      {/* this button is to render the hamburger menu on mobile devices */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              activeClassName="active"
              aria-current="page"
              className="nav-link"
              to="/"
            >
              Browse
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClassName="active"
              aria-current="page"
              className="nav-link"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClassName="active"
              aria-current="page"
              className="nav-link"
              to="/search"
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
