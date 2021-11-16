

import * as React from "react"
import { graphql } from "gatsby"
import Sticky from "react-sticky-el"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import SearchForm from "../components/layout/search-form"
import SearchResults from "../components/layout/search-results"
import SearchLimits from "../components/layout/search-limits"
import Facets from "../components/layout/facets"


const Search = ({ data, location }) => {

  const params = new URLSearchParams(location.search.slice(1))
  const q = params.get("q") || ""
  const filter = params.get("filter") || ""

  return (
    <Layout location={location}>
      <Seo title="Search results" />
      <div className="canopy-form">
        <Sticky className="canopy-sticky">
          <SearchForm initialQuery={q} />
        </Sticky>
      </div>
      < SearchLimits />
      <div className="canopy-main canopy-main-inner">
        <Facets />
        <SearchResults data={data} initialQuery={q} filter={filter} />
      </div>
    </Layout>
  )
}
export default Search

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
