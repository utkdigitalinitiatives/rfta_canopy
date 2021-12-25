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
  const nodeCanonical = `https://rfta.lib.utk.edu${location.pathname}?filter=${filter}` ? `https://rfta.lib.utk.edu${location.pathname}` : `https://rfta.lib.utk.edu${location.pathname}?filter=${filter}`;
  const title = filter ? `Search results for ${filter}` : `Browse All Rising from the Ashes Oral Histories`

  return (
    <Layout location={location}>
      <Seo title={title} canonical={nodeCanonical} />
      <SearchLimits query={query} />
      <div className="canopy-main canopy-main-inner row px-0 mx-0">
        <div className="col-sm-4 px-0 mx-0 grey-background">
          <Facets />
        </div>
        <div className="col-sm-8 px-0 mx-0">
          <SearchResults data={data} initialQuery={query} filter={filter} />
        </div>
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
