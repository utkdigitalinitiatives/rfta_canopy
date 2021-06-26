import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Viewer from "../components/viewer"

const Object = ({ pageContext: { node } }) => (
  <Layout>
    <Seo title="Home" />

    <article>
      <header>
        <h1>{node.label.en[0]}</h1>
        <Link to={'/'}>Back to Search</Link>
      </header>
      <Viewer manifestId={node.manifestId}/>
    </article>
  </Layout>
)

export default Object
