import React from "react"
import {useStaticQuery, graphql} from  "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import BrowseRow from "../components/layout/BrowseRow"
import UTKLogo from "../images/utk-logo.png"

const Browse = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "University of Tennessee, Knoxville. Libraries",
    "url": "https://www.lib.utk.edu/",
    "sameAs": [
      "https://twitter.com/utklibraries",
      "http://id.loc.gov/authorities/names/n87808088",
    ],
    "description": site.siteMetadata.description,
    "logo": UTKLogo
  }
  return (
    <Layout location={location}>
      <Seo title="Browse all Chimney Tops 2 Fire Resources" schemaMarkup={schema}/>
      <div className= "text-center text-lg-start px-3 px-md-5 my-4">
        <h2>Browse by Topic</h2>
        <p>Highlights from popular resources, locations, and featured items about the Chimney Tops 2 fires.</p>
      </div>
      <BrowseRow
        dataType='narratorRoles'
        backgroundClass="grey-background"
      />
      <BrowseRow dataType='topics' />
      <BrowseRow
        dataType='locations'
        backgroundClass="grey-background"
      />
    </Layout>
  )
}

export default Browse
