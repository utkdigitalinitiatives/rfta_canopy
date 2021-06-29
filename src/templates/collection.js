import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Viewer from "../components/viewer"
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
