import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Object = ({ pageContext: { node } }) => (
  <Layout>
    <Seo title="Home" />

    <section>
      <div>{node.label.en[0]}</div>
      <div>{node.id}</div>
    </section>
  </Layout>
)

export default Object
