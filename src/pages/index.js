import * as React from "react"
import { graphql } from "gatsby"
import Sticky from "react-sticky-el"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import SearchForm from "../components/layout/search-form"
import SearchResults from "../components/layout/search-results"
import About from "../components/layout/about"


const IndexPage = ({ data, location }) => {

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
      <div className="canopy-main canopy-main-inner">
        <SearchResults data={data} initialQuery={q} filter={filter} />
        <aside>
          <About />
        </aside>
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
