import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const Collection = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Seo title="Home" />
      <article className="canopy-collection">
        [...collection]
      </article>
    </Layout>
  )
}

export default Collection
