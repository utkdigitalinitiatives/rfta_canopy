import * as React from "react"
import { Link, graphql } from "gatsby"
import { Index } from "lunr"

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
      <SearchForm initialQuery={q} />
      <SearchResults data={data} initialQuery={q} />
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
