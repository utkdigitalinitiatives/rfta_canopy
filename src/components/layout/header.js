import * as React from "react"
// import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"
//import SearchForm from "./search-form"
//import Sticky from "react-sticky-el"

const Header = ({ siteTitle, siteDescription }) => (
  <header className="canopy-header d-flex flex-column">
    <Link to={'/'}>
      <h1 className="canopy-title">{siteTitle}</h1>
    </Link>
      <div className="canopy-subtitle">{siteDescription}</div>
      <div className="canopy-caption ms-auto mt-auto text-end text-white">
        Rising from the Ashes documents the immediate and ongoing impacts of the 2016 Chimney Tops II wildfires, one of the largest natural disasters in Tennessee history.
        <a className="text-warning"> Learn More.</a>
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
