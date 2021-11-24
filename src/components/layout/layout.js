/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IdProvider } from '@radix-ui/react-id'
import "../../sass/canopy.scss"
import Footer from "./footer"
import Header from "./header"
import Navbar from "../canopy/Navbar"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const { description, title } = data.site.siteMetadata || {}

  return (
    <IdProvider>
      <Navbar />
      <Header
        location={location}
        siteDescription={description || `Description`}
        siteTitle={title || `Title`}
      />
      <main>{children}</main>
      {/* Hide the footer for now, uncomment once it is styled/set up */}
      <Footer />
    </IdProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
