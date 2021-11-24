import React from "react"
import { Link } from "gatsby"
import logo from "../../images/utk-logo.png"

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light py-0 py-lg-2">
    <div className="container-fluid px-0 px-lg-4">
      <Link className="navbar-brand" to="/">
        <img className= "logo-image" src={ logo } alt="University of Tennessee, Knoxville Logo"/>
      </Link>
      {/* this button is to render the hamburger menu on mobile devices */}
      <button
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler mx-3"
        data-bs-target="#navbarNav"
        data-bs-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a 
              className="nav-link libraries-nav-link" 
              href="https://www.lib.utk.edu/"
            >
              Libraries
            </a>
          </li>
        </ul>
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
              to="/interviews"
            >
              Interviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
