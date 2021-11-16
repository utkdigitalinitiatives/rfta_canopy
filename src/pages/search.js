import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import SearchResults from "../components/layout/search-results"
import SearchLimits from "../components/layout/search-limits"
import Facets from "../components/layout/facets"
import { searchParams } from '../utilities/helpers'


const Search = ({ data, location }) => {
  const { q, filter } = searchParams(location.search)

  return (
    <Layout location={location}>
      <Seo title="Search results" />
      <SearchLimits />
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
