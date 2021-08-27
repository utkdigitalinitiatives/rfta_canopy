import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"

const Metadata = ({ data }) => {

  console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
    </Layout>
  )
}

export default Metadata

export const metadataQuery = graphql`
  query allMetadata($id: String) {
    allMetadata(
      filter: {
        slug: {
          eq: $id
        }
      }
    ) {
      edges {
        node {
          label
          slug
          values {
            label
            slug
            manifests {
              id
              label {
                en
              }
              manifestId
            }
          }
        }
      }
    }
  }
`
