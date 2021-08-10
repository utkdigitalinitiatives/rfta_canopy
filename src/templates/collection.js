import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Viewer from "../components/layout/viewer"
import * as Tabs from "@radix-ui/react-tabs"

const Collection = ({ data }) => {

  return (
    <Layout>
      <Seo title="Home" />

      <article className="canopy-collection">
        [...collection]
      </article>
    </Layout>
  )
}

export default Collection
