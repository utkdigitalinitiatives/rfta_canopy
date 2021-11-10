/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IdProvider } from '@radix-ui/react-id';
import "../../sass/canopy.scss"

import Navbar from "./navbar"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

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

  return (
    < IdProvider >
      < Navbar />
      < Header siteTitle={data.site.siteMetadata?.title || `Title`}
              siteDescription={data.site.siteMetadata?.description|| `Description`} />
      <main>{children}</main>
      < Footer / >
    </ IdProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
