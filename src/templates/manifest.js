import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import DigitalObject from "../components/canopy/DigitalObject"
import Related from "../components/canopy/Related"

const Manifest = ({ data }) => {

  const {node} = data.allManifests.edges[0];

  return (
    <Layout>
      <Seo title="Home" />

      <DigitalObject node={node}/>
      <Related metadata={node.metadata} />
    </Layout>
  )
}

export default Manifest

export const manifestQuery = graphql`
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
          items {
            items {
              items {
                motivation
                body {
                  label {
                    en
                    es
                  }
                  language
                  id
                  format
                }
              }
            }
          }
          structures {
            items {
              label {
                en
              }
              items {
                id
              }
            }
            label {
              en
            }
          }
          requiredStatement {
            label {
              en
            }
            value {
              en
            }
          }
          rights
          metadata {
            label {
              en
            }
            value {
              en
            }
          }
          transcripts {
            id
            format
            language
            type
            label {
              en
              es
            }
          }
        }
      }
    }
  }
`
