import * as React from "react"
// import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"
//import SearchForm from "./search-form"
//import Sticky from "react-sticky-el"

const Header = ({ siteTitle, siteDescription }) => (
  <header className="canopy-header d-flex flex-column p-5">
    <Link to={'/'}>
      <h1 className="canopy-title text-center text-md-start">{siteTitle}</h1>
    </Link>
      <div className="canopy-subtitle text-center text-md-start">{siteDescription}</div>
      <div className="canopy-caption ms-auto mt-auto text-end text-white text-center text-md-start">
        Rising from the Ashes documents the immediate and ongoing impacts of the 2016 Chimney Tops II wildfires, one of the largest natural disasters in Tennessee history.
        <Link to={"/about"} className="text-warning"> Learn More.</Link>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
