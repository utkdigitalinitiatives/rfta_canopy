import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import SearchResults from "../components/layout/search-results"
import SearchLimits from "../components/layout/search-limits"
import Facets from "../components/layout/facets"
import { urlParams } from '../utilities/helpers'


const Search = ({ data, location }) => {
  const { query, filter } = urlParams(location.search)

  return (
    <Layout location={location}>
      <Seo title="Search results" />
      <SearchLimits query={query}/>
      <div className="canopy-main canopy-main-inner">
        <Facets />
        <SearchResults data={data} initialQuery={query} filter={filter} />
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
