import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Object = ({ pageContext: { manifest } }) => (
  <Layout>
    <Seo title="Home" />

    <section>
      {manifest.label}
    </section>
  </Layout>
)

export default Object
