import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Viewer from "../components/viewer"

const Object = ({ data }) => {

  const {id, manifestId, label, summary} = data.allManifests.edges[0].node;

  return (
    <Layout>
      <Seo title="Home" />

      <article className="canopy-object">
        <header>
          <h1>{label.en[0]}</h1>
          <Link to={"/"}>Back to Search</Link>
        </header>
        <Viewer id={id}
                manifestId={manifestId} />
        <div>
        </div>
      </article>
    </Layout>
  )
}

export default Object

export const objectQuery = graphql`
  query allManifests($id: String) {
    allManifests(
      filter: {
        id: { 
          eq: $id
          }
        }
    ) {
      edges {
        node {
          id
          manifestId
          label {
            en
          }
          summary {
            en
          }
          requiredStatement {
            label {
              en
            }
            value {
              en
            }
          }
        }
      }
    }
  }
`
