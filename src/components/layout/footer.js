import * as React from "react"
import { Link } from "gatsby"


const Footer = () => (
  <footer className="mt-auto">
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div class="container-fluid py-lg-1 px-0">
        <button 
          class="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
        </button>
        <div class="navbar-text mx-auto  py-4 px-lg-4 text-center text-lg-start">
          <strong>University of Tennessee, Knoxville</strong><br/>
          Knoxville, TN 37996<br/>
          <a href="tel:865-974-1000" title="Call UT Libraries - 865-974-1000">865-974-1000</a>
        </div>
        <div class="collapse navbar-collapse show px-lg-4" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-2">
              <Link
                activeClassName="active"
                aria-current="page"
                className="nav-link footer-nav-link py-lg-0"
                to="/"
              >
                Browse
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-2">
              <Link
                activeClassName="active"
                aria-current="page"
                className="nav-link footer-nav-link py-lg-0"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-2">
              <Link
                activeClassName="active"
                aria-current="page"
                className="nav-link footer-nav-link py-lg-0"
                to="/search"
              >
                Search
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-2">
              <a 
                className="nav-link footer-nav-link py-lg-0" 
                href="https://www.lib.utk.edu/"
              >
                Library
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-2">
              <a 
                className="nav-link footer-nav-link py-lg-0" 
                href="https://digital.lib.utk.edu/"
              >
                Digital Collections
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </footer>
)

export default Footer
