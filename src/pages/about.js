import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Contact from "../components/layout/Contact"
import Layout from "../components/layout/layout"
import ProjectSummary from "../components/layout/project-summary"
import Seo from "../components/layout/seo"
import TeamAndFunding from "../components/layout/teamandfunding"
import UTKLogo from "../images/utk-logo.png"


const About = ({ location }) => {
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
      <Seo title="About Rising from the Ashes" schemaMarkup={schema} canonical="https://rfta.lib.utk.edu/about/"/>
      <div className="text-center text-lg-start mx-3 mx-md-5 my-4">
        <h2>About the Project</h2>
      </div>
      <ProjectSummary />
      <TeamAndFunding />
      <Contact />
    </Layout>
  )
}

export default About
