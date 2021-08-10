import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, siteDescription }) => (
  <header className="canopy-header">
    <Link to={'/'}>
      <span className="canopy-title">{siteTitle}</span>
      <span className="canopy-subtitle">{siteDescription}</span>
    </Link>
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
