import * as React from "react"
import { Link, graphql } from "gatsby"
import { Index } from "lunr"
import Sticky from "react-sticky-el"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SearchForm from "../components/search-form"
import SearchResults from "../components/search-results"


const IndexPage = ({ data, location }) => {

  const params = new URLSearchParams(location.search.slice(1))
  const q = params.get("q") || ""

  return (
    <Layout location={location}>
      <Seo title="Search results" />

      <div className="canopy-main">
          <div className="canopy-control">
            <Sticky className="canopy-sticky">
              <SearchForm initialQuery={q} />
            </Sticky>
          </div>
        <SearchResults data={data} initialQuery={q} />
      </div>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    LunrIndex
  }
`
